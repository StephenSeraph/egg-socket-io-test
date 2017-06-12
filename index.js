'use strict';

// npm run dev DO NOT read this file

require('egg').startCluster({
  sticky: true, // egg-socket.io之用
  baseDir: __dirname,
  port: process.env.PORT || 7001, // default to 7001
});
