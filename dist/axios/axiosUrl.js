import axios from "axios";
export var API = axios.create({ baseURL: "".concat(process.env.REACT_APP_APIS) });
