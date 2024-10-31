import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.token = null;
    this.remoteHostUrl = remoteHostUrl;
  }

  setToken(token) {
    this.token = token;
  }

  async request({ endpoint, method, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;
    console.debug("API Call:", endpoint, data, method);
    const params = method === "get" ? data : {};
    const headers = {
      "Content-Type": "application/json",
    };
    if (this.token) {
      headers.bearer = this.token;
    }
    try {
      const res = await axios({ url, method, data, params, headers });
      return { data: res.data, error: null, message: null };
    } catch (error) {
      console.error("APIclient.makeRequest.error", error.response);
      // If failed, we check for a 404 error, otherwise we return the error
      if (error?.response?.status === 404)
        return { data: null, error: "Not found" };
      // Checking that error message exists -- Syntax thing
      const message = error?.response?.data?.error?.message;
      return { data: null, error: error?.response, message };
    }
  }

  async signUp(creds) {
    // Make register post request using generalized request method above with creds
    return await this.request({
      endpoint: `users/register`,
      method: `POST`,
      data: creds,
    });
  }

  async login(creds) {
    // Make login post request using generalized request method above with creds
    return await this.request({
      endpoint: `users/login`,
      method: `POST`,
      data: creds,
    });
  }

  async fetchUserFromToken() {
    return await this.request({
      endpoint: `users/me`,
      method: `GET`,
    });
  }
}

export default new ApiClient("http://localhost:3001/api");
