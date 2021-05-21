const config = require('./config');

module.exports = {
  target: 'serverless',
  poweredByHeader: false,
  generateBuildId: async () => {
    return process.env.npm_package_version;
  },
  env: {
    GRAPHQL_URL: config.GRAPHQL_URL,
    FIREBASE_API_KEY: config.FIREBASE_API_KEY,
    FIREBASE_AUTH_ADMIN: config.FIREBASE_AUTH_ADMIN,
    FIREBASE_DATABASE_URL: config.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: config.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: config.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: config.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: config.FIREBASE_APP_ID,
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: '../public/assets/', // if you don't use ../ it will put it inside ".next" folder by default
          publicPath: 'assets/',
        },
      },
    );

    return config;
  },
};