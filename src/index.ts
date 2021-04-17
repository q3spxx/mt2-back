import express from 'express';
import cors from 'cors';
import { rootController } from '@controllers';
import { connect } from '@models';
import { APP_PORT } from '@config';

const app = express();

app.use(cors(), express.json(), rootController);

connect()
    .then(() => {
        app.listen(APP_PORT, () => console.info(`mt2 server listening on port ${APP_PORT}!`));
    })
    .catch(() => {
        process.exit(1);
    });
