const childProcess = require('child_process');
const path = require('path');

const filePath = {
  'vue2-child': path.join(__dirname, '../vue2-child'),
  'vue3-child': path.join(__dirname, '../vue3-child'),
  main: path.join(__dirname, '../main')
};
// cd 子应用的目录 npm start 启动项目
function runChild() {
  Object.values(filePath).forEach((item) => {
    childProcess.spawn(`cd ${item} && npm run serve`, {
      stdio: 'inherit',
      shell: true
    });
  });
}
runChild();
