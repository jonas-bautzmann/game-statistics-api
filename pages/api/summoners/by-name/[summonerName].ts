import { NextApiRequest, NextApiResponse } from "next"
import { Summoner } from "../../../../api/riotGamesApi/models/summoner"
import { getSummonerBySummonerName } from "../../../../api/riotGamesApi/requests/getSummonerBySummonerName"

export interface SummonerBySummonerNameRequest extends NextApiRequest {
	query: {
		summonerName: string
	}
}

const handler = async (req: SummonerBySummonerNameRequest, res: NextApiResponse<Summoner>): Promise<void> => {
	const { summonerName } = req.query
	const summoner = await getSummonerBySummonerName(summonerName)
	res.status(200).json(summoner)
}

export default handler
