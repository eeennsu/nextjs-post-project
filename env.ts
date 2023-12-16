import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
    GOOGLE_CLIENT_ID: str(),
    GOOGLE_CLIENT_SECRET: str(),
    MONGO_DB_URL: str(),
    NEXTAUTH_URL: str(),
    NEXTAUTH_URL_INTERNAL: str(),
    NEXTAUTH_SECRET: str(),
})

export default env;