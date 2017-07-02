if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const devConfig = {
  MONGO_URL: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds141368.mlab.com:41368/votingapp`,
};
const testConfig = {
  MONGO_URL: 'mongodb://localhost/votingAppDb-test',
};
const prodConfig = {
  MONGO_URL: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds141368.mlab.com:41368/votingapp`,
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
  TWITTER_STRATEGY: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://127.0.0.1:3000/api/auth/twitter/callback',
    passReqToCallback: true,
  },
  LOCAL_STRATEGY: {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
