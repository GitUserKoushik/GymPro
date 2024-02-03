import axios from"axios";
let mainUrl="https://corefitserver.onrender.com"
export const baseURL=mainUrl;
let apiInstance=axios.create({baseURL,});

apiInstance.interceptors.request.use(
    async function (config) {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );




export default apiInstance;



export const produc = (media) => {
    return (
        `https://corefitserver.onrender.com/${media}`
    );
  };
