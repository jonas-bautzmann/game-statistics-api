import { NextApiHandler, NextApiRequest } from "next"
import { getMatchesByPuuid } from "../../../../../api/riotGamesApi/requests/getMatchesByPuuid"
import { Participant } from "../../../../../api/riotGamesApi/models/match"
import { getMatchByMatchId } from "../../../../../api/riotGamesApi/requests/getMatchByMatchId"
import getDatabaseConnection from "../../../../../database/getDatabaseConnection"
import mysql from "mysql2"

export interface MatchesByPuuidRequest extends NextApiRequest {
	query: {
		puuid: string
	}
}

export interface MatchByMatchIdRequest extends NextApiRequest {
	query: {
		matchId: string
	}
}

interface StoredMatchResult extends mysql.RowDataPacket {
	MatchId: string
}

const handler: NextApiHandler = async (req, res) => {
	const dbconnection = await getDatabaseConnection()

	const { puuid } = req.query
	const matchIds = await getMatchesByPuuid(puuid as string)

	const isInDatabase = async (rows: string[]) => {
		const query = `SELECT MatchId from Matchdata WHERE MatchId IN (?) GROUP BY MatchId`
		const [data] = await dbconnection.query<StoredMatchResult[]>(query, [rows])
		return data.map(row => row.MatchId)
	}

	const existingMatches = await isInDatabase(matchIds)

	const filteredMatchIds = matchIds.filter(function (item) {
		return !existingMatches.includes(item)
	})

	try {
		await dbconnection.beginTransaction()

		const queries = filteredMatchIds.map(async filteredMatchId => {
			const match = await getMatchByMatchId(filteredMatchId as string)

			const rows = match.info.participants.map((participant: Participant) => {
				return [
					filteredMatchId,
					participant.puuid,
					participant.championId,
					participant.win,
					match.info.gameMode,
					match.info.gameVersion,
				]
			})

			const query = `INSERT INTO Matchdata (MatchId, Puuid, ChampionId, Win, GameMode, GameVersion) VALUES ?`
			return dbconnection.query(query, [rows])
		})
		const results = await Promise.all(queries)
		await dbconnection.commit()
		res.status(200).json(results)
	} catch (error) {
		await dbconnection.rollback()
		res.status(500)
	} finally {
		await dbconnection.end()
	}
}

export default handler
