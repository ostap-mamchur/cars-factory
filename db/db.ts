import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres'

const client = postgres('postgres://myuser:mypassword@localhost:5432/mydatabase', { max: 1 });

export default drizzle(client);