import { NextApiRequest, NextApiResponse } from "next"
import { Metadata } from "../../../api/riotGamesApi/models/match"
import { getMatchByMatchId } from "../../../api/riotGamesApi/requests/getMatchByMatchId"

export interface MatchByMatchIdRequest extends NextApiRequest {
	query: {
		matchId: string
	}
}

const handler = async (req: MatchByMatchIdRequest, res: NextApiResponse<Metadata>): Promise<void> => {
	const { matchId } = req.query
	const match = await getMatchByMatchId(matchId)
	res.status(200).json(match)
}

export default handler
