const baseUrl = process.env.REACT_APP_BASE_URL;

const getHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };
};

export default {
  async auth(URL: string, values: any) {
    return fetch(`${baseUrl}/api/auth/${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => response.json());
  },
  async get(URL: string) {
    return fetch(`${baseUrl}${URL}`, {
      method: "GET",
      headers: getHeader(),
    }).then((response) => response.json());
  },

  async post(URL: string, values: any) {
    return fetch(`${baseUrl}${URL}`, {
      method: "POST",
      headers: getHeader(),
      body: JSON.stringify(values),
    }).then((response) => response.json());
  },

  async put(URL: string, values: any) {
    return fetch(`${baseUrl}${URL}`, {
      method: "PUT",
      headers: getHeader(),
      body: JSON.stringify(values),
    }).then((response) => response.json());
  },

  async delete(URL: string, values: any) {
    return fetch(`${baseUrl}${URL}`, {
      method: "DELETE",
      headers: getHeader(),
      body: JSON.stringify(values),
    }).then((response) => response.json());
  },
};
