import { NextApiHandler, NextApiRequest } from "next"
import { Participant } from "../../../api/riotGamesApi/models/match"
import { getMatchByMatchId } from "../../../api/riotGamesApi/requests/getMatchByMatchId"
import getDatabaseConnection from "../../../database/getDatabaseConnection"

export interface MatchByMatchIdRequest extends NextApiRequest {
	query: {
		matchId: string
	}
}

const handler: NextApiHandler = async (req, res): Promise<void> => {
	const dbconnection = await getDatabaseConnection()
	const { matchId } = req.query
	const match = await getMatchByMatchId(matchId as string)

	const rows = match.info.participants.map((participant: Participant) => {
		return [matchId, participant.summonerId, participant.championId, participant.win]
	})

	try {
		const query = `INSERT INTO Matchdata (MatchId, Puuid, ChampionId, Win) VALUES ?`
		const [data] = await dbconnection.query(query, [rows])

		res.status(200).json(data)
	} catch (error) {
		// unhide to check error
		res.status(500).json({ error: JSON.stringify(error) })
	} finally {
		await dbconnection.end()
	}
}

export default handler
