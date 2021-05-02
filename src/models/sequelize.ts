import { Sequelize } from 'sequelize';
import pg from 'pg';
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from '@config';

pg.defaults.parseInt8 = true;

export const sequelize = new Sequelize({
    dialect: 'postgres',
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    logging: (sql): void => console.info(sql),
});
