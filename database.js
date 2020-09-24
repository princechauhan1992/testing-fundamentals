const pg = require('pg');

const config = {
  host: 'eximdev.shipsy.in',
  port: 5432,
  user: 'exim',
  password: 'universe',
  database: 'playanalytics',
};

const PGClient = pg.Client;
const client = new PGClient(config);
client
  .connect()
  .then(async () => {
    const result = await client.query('SELECT * from users limit 1');
    console.log(result.rows);
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(0);
  });

console.log('Hello Shubhangi');
