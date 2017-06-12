# egg-socket.io问题复现

### Issue链接 [#1034](https://github.com/eggjs/egg/issues/1034)
### 脚手架创建参数：`egg-init egg-socket-io-test --type simple`
### 相比脚手架只改动了2点：
1. `plugin.js` 添加egg-socket.io ^1.x 插件；
2. `index.js` 添加sticky 启动参数

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development
```shell
$ npm install
$ npm run dev
$ open http://localhost:7001/news
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
