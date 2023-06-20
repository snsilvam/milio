import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'pruebamilio.cf2vut2yihrq.us-east-2.rds.amazonaws.com',
        port: 3306,
        username: 'adminMilioDB',
        password: '7752930Ni',
        database: 'pruebamilio',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
