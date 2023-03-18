import axios from "axios"
import { RIOT_GAMES_EUW1_API_ENDPOINT } from "../../utils/envVariables"

// https://axios-http.com/docs/config_defaults
export const riotEUW1ApiClient = axios.create({
	baseURL: RIOT_GAMES_EUW1_API_ENDPOINT,
})
