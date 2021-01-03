const SteinStore = require("stein-js-client");
const store = new SteinStore(process.env.STEIN_API_URL);

exports.handler = async () => {
  try {
    const data = store.read("Sheet1", { limit: 1, offset: 2 });
    console.log(data);

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.error(e);
    
    return {
      statusCode: 400,
    };
  }
};
