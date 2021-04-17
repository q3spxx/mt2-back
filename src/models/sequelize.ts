import { Sequelize } from 'sequelize';
import pg from 'pg';

pg.defaults.parseInt8 = true;

export const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'postgres',
    host: process.env.APP_HOST || 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'step2zero',
    logging: (sql): void => console.info(sql),
});
