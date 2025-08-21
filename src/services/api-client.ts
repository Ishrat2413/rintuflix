import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a40b4c34823fe3a2a60713fb586ec90f",
  },
});
