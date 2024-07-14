const APIConfig = {
  apiEndPoint: 'https://api.cert.platform.sabre.com',
  userSecret: process.env.SWS_API_SECRET || ''
};

module.exports = APIConfig;
