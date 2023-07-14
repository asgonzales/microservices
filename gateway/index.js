const express = require("express");
const morgan = require("morgan");
const {createProxyMiddleware} = require('http-proxy-middleware')
const server = express();

server.use(express.json());
server.use(morgan("dev"));


server.use("/characters", createProxyMiddleware({
    target: 'http://characters:8001',
    changeOrigin: true,
    pathRewrite: {
        '/characters' : '/'
    }
}));
server.use("/planets", createProxyMiddleware({
    target: 'http://planets:8002',
    changeOrigin: true,
    pathRewrite: {
        '/planets': '/'
    }
}));
server.use("/films", createProxyMiddleware({
    target: 'http://films:8003',
    changeOrigin: true,
    pathRewrite: {
        '/films': '/'
    }
}));

server.listen(8000, () => {
    console.log('gateway listening at 8000')
})