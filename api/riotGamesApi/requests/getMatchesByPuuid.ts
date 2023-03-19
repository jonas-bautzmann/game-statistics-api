import { riotEuropeApiClient } from "../clients"

export const getMatchesByPuuid = async (puuid: string): Promise<string[]> => {
	const { data } = await riotEuropeApiClient.get<string[]>(`/lol/match/v5/matches/by-puuid/${puuid}/ids`)
	return data
}
