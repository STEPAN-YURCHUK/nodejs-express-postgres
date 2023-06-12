import Pool from 'pg'

const pool = new Pool.Pool({
	user: 'postgres',
	password: 'postgres',
	host: 'localhost',
	port: 5432,
	database: 'node_postgres',
})

export default pool
