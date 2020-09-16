// 动态加载所有当前文件夹下所有-spec.ts结尾的模块, false:不包括下一层级
//const files = require.context('./', true, /-spec.tsx?$/);

const files = require.context('./', true, /zego-express-?/);

let keys = files.keys();

keys = keys.filter(k => k.includes('roomuser-spec.ts'));
console.warn('keys:', keys);

keys.forEach(key => {
    files(key);
});

// 以上代码可以简写为
//   let files = require.context('./', false, /-spec.tsx?$/);
//    files.keys().forEach(files)
