// global object
console.log(global)

global.setTimeout(() => {
  console.log('in the timeout')
  clearInterval(int)
}, 3000)

const int = setInterval(() => {
  console.log('I repeat')
}, 1000)

console.log(__dirname)
//abs path of folder
console.log(__filename)
//abs path of file in folder

