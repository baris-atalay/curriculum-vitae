module.exports = {
  webpack: config => {
    config.resolve.modules.push('./');

    return config;
  }
};
