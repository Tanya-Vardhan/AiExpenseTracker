import 'dotenv/config';
// import { Pool } from '@neondatabase/serverless';

// const pool = new Pool({
//     connectionString: process.env.NEXT_PUBLIC_DATABASE_URL, // Neon database connection URL
//   });

export default{
    dialect:'postgresql',
    schema:'./utils/schema.js',
    out:'./drizzle',
    dbCredentials:{
        url:process.env.NEXT_PUBLIC_DATABASE_URL,
        // connectionStrings: process.env.NEXT_PUBLIC_DATABASE_URL,
    }, 
};