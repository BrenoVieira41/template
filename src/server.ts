import 'reflect-metadata';
import { config } from 'dotenv';
import { app } from './app';
import { AppDataSource } from './typeorm/data-source';


config();
const appPort = process.env.APP_PORT;
//Database connection required.
AppDataSource.initialize().then(() => {
  app.listen(appPort, () => console.log(`Server is running in port:${appPort}`));
});

