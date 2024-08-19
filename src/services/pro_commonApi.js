import axios from "axios";

export const commonAPI = async (httpRequest, url, reqBody) => {
  // Configuration data
  const reqConfig = {
    method: httpRequest,

    url,

    data: reqBody,
    headers: { "Content-Type": "application/json" },
  };

  return await axios(reqConfig)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
