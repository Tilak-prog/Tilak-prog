const envalid = require('envalid');
const { url, str } = envalid;

module.exports = envalid.cleanEnv(
  process.env,
  {
    GRAPHQL_URL: url(),
    FIREBASE_API_KEY: str(),
    FIREBASE_AUTH_ADMIN: str(),
    FIREBASE_DATABASE_URL: str(),
    FIREBASE_PROJECT_ID: str(),
    FIREBASE_STORAGE_BUCKET: str(),
    FIREBASE_MESSAGING_SENDER_ID: str(),
    FIREBASE_APP_ID: str(),
  },
  {
    // disable dotenv processing
    dotEnvPath: null,
    // https://www.npmjs.com/package/envalid#strict-mode
    strict: false,
  },
);