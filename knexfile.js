module.exports = {
    development: {
        client: 'pg',
        version: '12.2',
        connection: {
            host : '127.0.0.1',
            user : 'postgres',
            password : '1234',
            database : 'Test'    
        },
        migrations: {
            directory: './src/database/migrations'
        },  
        useNullAsDefault: true,
    },

    test: {
        client: 'pg',
        version: '12.2',
        connection: {
            host : '127.0.0.1',
            user : 'postgres',
            password : '1234',
            database : 'test_school'
        },
        migrations: {
          directory: './src/database/migrations'
        },  
        useNullAsDefault: true,
      },
};