import { riotEuropeApiClient } from "../clients"

export const getMatchesByPuuid = async (puuid: string): Promise<string[]> => {
	const { data } = await riotEuropeApiClient.get<string[]>(`/lol/match/v5/matches/by-puuid/${puuid}/ids`, {
		params: { count: 10 },
	})
	return data
}
