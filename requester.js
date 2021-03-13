const axios = require('axios');

const Requester = async ({
  url,
  body,
  headers,
  method,
  params
}) => {
  try {
    const {
      data
    } = await axios({
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      params,
      data: JSON.stringify(body)
    });
    return Promise.resolve(data);
  } catch (
    err
  ) {
    logger.error(err);
    if (!err.response || !err.response.data || !err.response.data.errors) {
      return Promise.reject(new Error('Requester: Error connecting the service'));
    }

    const {
      response: {
        data: {
          errors: [
            {
              message,
            },
          ],
        },
      },
    } = err;
    return Promise.reject(message);
  }
};

module.exports = Requester;
