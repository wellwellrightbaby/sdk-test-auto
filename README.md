# sdk 自动化测试

## 背景

提高 sdk 测试效率, 减少由于代码更新导致的 sdk 的不稳定

## 参考文档

+ [karma](https://karma-runner.github.io/5.0/intro/configuration.html) : 集成工具,调度中心
+ [mocha](https://mochajs.cn/#assertions): 测试框架
+ [Chai](https://www.chaijs.com/): 断言库
  + [chai-as-promised](https://www.npmjs.com/package/chai-as-promised) Chai Assertions for Promises
+ [Istanbul](https://istanbul.js.org/)：跟踪代码运行路径，计算测试覆盖率。
+ [Coveralls](https://coveralls.io/)：测试覆盖率分析服务。
+ [Travis CI ](https://travis-ci.org/)：持续集成服务，每次提交 commit 即可触发测试。

参考文档 [https://blog.crimx.com/2019/06/19/%E6%90%AD%E5%BB%BA-karma-mocha-chai-%E6%B5%8B%E8%AF%95-typescript-%E9%A1%B9%E7%9B%AE/](https://blog.crimx.com/2019/06/19/搭建-karma-mocha-chai-测试-typescript-项目/)


## 测试常见语法：

超时处理：

```js
describe('a suite of tests', function () {
  this.timeout(500);

  it('should take less than 500ms', function (done) {
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function (done) {
    setTimeout(done, 250);
  });
});
```

抛出异常：

```js
const fn = async () => await zg.loginRoom(roomId, token, user);
expect(fn).to.throw(Error);
```