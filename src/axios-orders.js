import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-6522f-default-rtdb.firebaseio.com/",
});

export default instance;
