import { riotEuropeApiClient } from "../clients"
import { Match } from "../models/match"

export const getMatchByMatchId = async (matchId: string): Promise<Match> => {
	const { data } = await riotEuropeApiClient.get<Match>(`/lol/match/v5/matches/${matchId}`)
	return data
}
