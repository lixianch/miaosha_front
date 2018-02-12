var config = {};
config.HOST = "http://localhost:8080"
var apilist = {
    registApi: '/regist/post',
    loginApi:'/login/doLogin',
    goodsListApi: '/goods/listGoods'
}

var _fn = {
    registApiUrl: function () {
        return config.HOST + apilist.registApi;
    },
    loginApiUrl: function () {
        return config.HOST + apilist.loginApi;
    },
    goodsListApiUrl: function () {
        return config.HOST + apilist.goodsListApi;
    }
};

