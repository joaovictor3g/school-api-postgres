module.exports = {
    development: {
        client: 'pg',
        version: '12.2',
        connection: {
            host : '127.0.0.1',
            user : 'postgres',
            password : '1234',
            database : 'school'    
        },
        migrations: {
            directory: './src/database/migrations'
        },  
        useNullAsDefault: true,
    }
};