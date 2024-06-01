import { API as customAxios } from './axiosUrl';
var requestHandler = function (request) {
    var getTokenFromLocalStorage = JSON.parse(localStorage.getItem('profile') || '{}');
    var token = getTokenFromLocalStorage.token;
    request.headers.Authorization = "Bearer ".concat(token);
    return request;
};
var responseHandler = function (response) {
    if (response.status === 401) {
        localStorage.removeItem('profile');
    }
    return response;
};
var errorHandler = function (error) {
    return Promise.reject(error);
};
customAxios.interceptors.request.use(function (request) { return requestHandler(request); }, function (error) { return errorHandler(error); });
customAxios.interceptors.response.use(function (response) { return responseHandler(response); }, function (error) { return errorHandler(error); });
export default customAxios;
