// 动态加载所有当前文件夹下所有-spec.ts结尾的模块, false:不包括下一层级
const files = require.context('./', false, /-spec.tsx?$/);

const keys = files.keys();
console.log(keys);

keys.forEach(key => {
      files(key);
});

// 以上代码可以简写为
//   let files = require.context('./', false, /-spec.tsx?$/);
//    files.keys().forEach(files)
