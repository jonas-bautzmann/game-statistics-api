import { NextApiRequest, NextApiResponse } from "next"
import { getMatchesByPuuid } from "../../../../../api/riotGamesApi/requests/getMatchesByPuuid"

export interface MatchesByPuuidRequest extends NextApiRequest {
	query: {
		puuid: string
	}
}

const handler = async (req: MatchesByPuuidRequest, res: NextApiResponse<string[]>): Promise<void> => {
	const { puuid } = req.query
	const matches = await getMatchesByPuuid(puuid)
	res.status(200).json(matches)
}

export default handler
