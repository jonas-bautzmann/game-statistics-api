const required = (envVariable: string | undefined): string => {
	if (!envVariable) {
		throw new Error("Found undefined env variable.")
	}

	return envVariable
}

// RIOT GAMES API KEYS
export const RIOT_GAMES_LOL_API_KEY: string = required(process.env.RIOT_GAMES_LOL_API_KEY)

// PLATFORM ROUTING VALUES
export const RIOT_GAMES_EUW1_API_ENDPOINT: string = required(process.env.RIOT_GAMES_EUW1_API_ENDPOINT)

// REGIONAL ROUTING VALUES
export const RIOT_GAMES_EUROPE_API_ENDPOINT: string = required(process.env.RIOT_GAMES_EUROPE_API_ENDPOINT)

// DATA DRAGON ROUTING VALUES
export const RIOT_GAMES_DATA_DRAGON_API_ENDPOINT: string = required(process.env.RIOT_GAMES_DATA_DRAGON_API_ENDPOINT)

// MYSQL CONNECTION
export const MYSQL_HOST: string = required(process.env.MYSQL_HOST)
export const MYSQL_DATABASE: string = required(process.env.MYSQL_DATABASE)
export const MYSQL_PORT: number = parseInt(required(process.env.MYSQL_PORT))
export const MYSQL_USER: string = required(process.env.MYSQL_USER)
export const MYSQL_PASSWORD: string = required(process.env.MYSQL_PASSWORD)
