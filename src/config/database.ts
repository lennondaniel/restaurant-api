require('dotenv').config()

export const Config = {
    postgres: {
        DB_NAME: process.env.DB_POSTGRES_NAME ?? '',
        DB_HOST: process.env.DB_POSTGRES_HOST ?? '',
        DB_PORT: process.env.DB_POSTGRES_PORT ?? '',
        DB_USER: process.env.DB_POSTGRES_USER ?? '',
        DB_PASSWORD: process.env.DB_POSTGRES_PASSWORD ?? '',
    }
}
