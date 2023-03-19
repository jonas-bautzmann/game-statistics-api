import axios from "axios"
import {
	RIOT_GAMES_EUROPE_API_ENDPOINT,
	RIOT_GAMES_EUW1_API_ENDPOINT,
	RIOT_GAMES_LOL_API_KEY,
} from "../../utils/envVariables"

// https://axios-http.com/docs/config_defaults
export const riotEUW1ApiClient = axios.create({
	baseURL: RIOT_GAMES_EUW1_API_ENDPOINT,
	headers: { "X-Riot-Token": RIOT_GAMES_LOL_API_KEY },
})

export const riotEuropeApiClient = axios.create({
	baseURL: RIOT_GAMES_EUROPE_API_ENDPOINT,
	headers: { "X-Riot-Token": RIOT_GAMES_LOL_API_KEY },
})
