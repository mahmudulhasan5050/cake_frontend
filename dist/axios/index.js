import { API } from './axiosUrl';
import customAxios from './axiosConfig';
if (!localStorage.getItem('profile')) {
    localStorage.setItem('profile', JSON.stringify({}));
}
//cake
export var axiosFetchCakes = function () { return API.get('/cakes'); };
export var axiosAddCake = function (cake) {
    return customAxios.post('/cakes', cake);
};
export var axiosDeleteCake = function (id) {
    return customAxios.delete("/cakes/".concat(id));
};
export var axiosUpdateCake = function (id, updateInfo) {
    return customAxios.post("/cakes/".concat(id), updateInfo);
};
//user
export var axiosFetchUsers = function () { return customAxios.get('/users'); };
export var axiosAddUser = function (user) {
    return customAxios.post('/users', user);
};
export var axiosDeleteUser = function (id) {
    return customAxios.delete("/users/".concat(id));
};
export var axiosUpdateUser = function (id, updateInfo) {
    return customAxios.post("/users/".concat(id), updateInfo);
};
//orders
export var axiosFetchOrders = function () { return customAxios.get('/orders'); };
export var axiosAddOrder = function (order) {
    return customAxios.post('/orders', order);
};
export var axiosDeleteOrder = function (id) {
    return customAxios.delete("/orders/".concat(id));
};
export var axiosUpdateOrder = function (id, updateInfo) {
    return customAxios.post("/orders/".concat(id), updateInfo);
};
export var axiosUserOrdersById = function (userId) {
    return customAxios.get("/orders/userorders/".concat(userId));
};
export var axiosDeliveryStatusOrder = function (id) {
    return customAxios.post("/orders/deliverystatus/".concat(id));
};
// authentication
export var axiosSignIn = function (user) { return API.post('/auth/signin', user); };
export var axiosSignUp = function (user) { return API.post('/auth/signup', user); };
