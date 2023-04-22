import mysql from "mysql2/promise"
import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } from "../utils/envVariables"

const getDatabaseConnection = async (): Promise<mysql.Connection> =>
	mysql.createConnection({
		host: MYSQL_HOST,
		database: MYSQL_DATABASE,
		port: MYSQL_PORT,
		user: MYSQL_USER,
		password: MYSQL_PASSWORD,
	})

export default getDatabaseConnection
