import { riotEuropeApiClient } from "../clients"
import { Metadata } from "../models/match"

export const getMatchByMatchId = async (matchId: string): Promise<Metadata> => {
	const { data } = await riotEuropeApiClient.get<Metadata>(`/lol/match/v5/matches/${matchId}`)
	return data
}
