import mysql from "mysql2/promise"
import getDatabaseConnection from "../../../database/getDatabaseConnection"

export default async function handler(req, res) {
	const dbconnection = await getDatabaseConnection()
	try {
		const query = "SELECT MatchId, Puuid, ChampionId, Win FROM Matchdata WHERE Puuid = ? AND ChampionId = ?"
		const values = ["6Setw-G4egNNcxcqEXgr20mTdkJfY5-amZpUsPkRLghkzXI", "63"]
		const [data] = await dbconnection.execute(query, values)
		dbconnection.end()
		console.log(data)

		const winCount = data.filter((date, index) => date.Win == "1").length
		const gamesCount = data.length
		const winRate = (winCount / gamesCount) * 100

		console.log("Winrate: " + winRate + "%. Based on " + gamesCount + " games.")

		res.status(200).json({ winRate, gamesCount, winCount })
	} catch (error) {
		// unhide to check error
		res.status(500).json({ error: error.message })
	}
}
