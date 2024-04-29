import app from "./app";
import test from 'express';
import database from './database/config';

const appp = test();

(async () =>{
    try {
        const port = parseInt(`${process.env.PORT}`);

        await database.sync();
        console.log(`The Database is running in ${process.env.DB_NAME}...`);

        app.listen(port, () => {
            console.log(`The API Authentication is running on port ${port}...`);
        });

    } catch (error) {
        console.error('Fail to connect database, contact the administrator and show the message. Message: ' + error);
    }
})();