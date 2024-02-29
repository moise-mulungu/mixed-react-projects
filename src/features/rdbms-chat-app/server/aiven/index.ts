const pg = require('pg')

// secrets must be in ./.env.local
const dotenv = require('dotenv')
dotenv.config({ path: './.env.local' })
const password = process.env.AIVEN_POSTGRES_PASSWORD
// multiline string, so in .env.local put it in quotes!
const ca = process.env.AIVEN_POSTGRES_CA
const host = process.env.AIVEN_POSTGRES_HOST
// node src/features/rdbms-chat-app/server/aiven/index.ts

// DM: I moved anything that is unique to the my database to .env.local, even though it may not be a secret, in order to make it easier for us to share code using the same database
const config = {
  user: 'avnadmin',
  password: password,
  host: host,
  port: 17973,
  database: 'defaultdb',
  ssl: {
    rejectUnauthorized: true,
    ca: ca,
  },
}

const client = new pg.Client(config)

client.connect(function (err) {
  if (err) throw err
  client.query('SELECT VERSION()', [], function (err, result) {
    if (err) throw err

    console.log(result.rows[0].version)
    client.end(function (err) {
      if (err) throw err
    })
  })
})

const pool = new pg.Pool(config)

module.exports = { client, pool }
