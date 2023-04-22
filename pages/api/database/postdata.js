import mysql from "mysql2/promise"
import getDatabaseConnection from "../../../database/getDatabaseConnection"

export default async function handler(req, res) {
	const dbconnection = await getDatabaseConnection()
	try {
		const query = "INSERT INTO Matchdata (MatchId, Puuid, ChampionId, Win) VALUES(222, 789, 897, True)"
		const values = []
		const [data] = await dbconnection.execute(query, values)
		dbconnection.end()

		res.status(200).json({ matchdata: data })
	} catch (error) {
		// unhide to check error
		res.status(500).json({ error: error.message })
	}
}
