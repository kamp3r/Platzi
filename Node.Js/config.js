const config = {
    port: process.env.PORT || 8080,
    dbUrl: process.env.DB_URL || 'mongodb+srv://kamp3rh:coderhouse@backendheredia.pimvu.mongodb.net/projectPlatzi',
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || 'public',
}

export { config }