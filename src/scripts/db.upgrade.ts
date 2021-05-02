import { sequelize, connect } from '@models';

connect().then(async () => {
    await sequelize.query('DROP TABLE IF EXISTS public.tests');
    await sequelize.query('DROP TABLE IF EXISTS public.history');
});
