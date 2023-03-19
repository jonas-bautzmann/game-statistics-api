import { riotEUW1ApiClient } from "../clients"
import { Summoner } from "../models/summoner"

export const getSummonerBySummonerName = async (summonerName: string): Promise<Summoner> => {
	const { data } = await riotEUW1ApiClient.get<Summoner>(`/lol/summoner/v4/summoners/by-name/${summonerName}`)
	return data
}
