import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};



/**
 * 
 const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
      
    },
    {
      headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY
      'x-api-key': 'My-API-Key'
    }})
    .then((response) => {
      if (response.status == 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
 * 
 */
/**
 *  
 const login = (username, password) => {
  axios({
        'method':'GET',
        'url':'https://example.com/query',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
  }
 * 
 */

export default {
  register,
  login,
  logout,
};