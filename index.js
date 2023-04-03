// const { default: axios } = require('axios');
const fs = require('fs')
const axios = require('axios')

// fs.readFileSync("/docs/newfile.json",)

// fs.writeFile("/docs/newfile.txt", "Hello Backend", (err, data) => {
//   if (err) console.log(err)
//   console.log(data)
//   fs.readFile("/docs/newfile.txt", "utf-8", (err, data) => {
//     if (err) console.log(err)
//     console.log(data)
//     fs.writeFile("/docs/newfile.txt", "Hello Backend", (err, data) => {
//       if (err) console.log(err)
//       console.log(data)
//       fs.readFile("/docs/newfile.txt", "utf-8", (err, data) => {
//         if (err) console.log(err)
//         console.log(data)
//       })
//     })
//   })
// })

const newObj = {
  newkey: 'Hello Backend'
}
// Promise

// const myPromise = new Promise((resolve, reject) => {
//   fs.readFile("./docs/newfile.txt", "utf-8", (err, data) => {
//     if (err) {
//       reject(err) 
//     }
//     resolve(data)
//   })
// }).then(data => {
//   if (data === newObj.newkey) {
//     return data
//   }
//   throw "The data in the file is different from our object value."
// }).then(data => {
//   fs.writeFile("./docs/newfile2.txt", data, (err, data) => {
//     if (err) { reject(err) }
//     return data
//   })
// }).catch(err => console.log(err)).finally(() => console.log('ran successfully'))

// console.log(myPromise)

// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });



// Promise.all([p1, p2, p3]).then((value) => {
//   console.log(value)
// }).catch((err) => console.log(err))


const asyncFun = async function (arg) {
try { const data = fs.readFileSync(arg, 'utf-8');
  // const response = await fetch();
  console.log(data, "DOG BREED")
  const response = await axios.get(`https://dog.ceo/api/breed/${data.toLowerCase()}/images/random`);
  console.log(response.data)
  fs.writeFile(`./docs/dogImage.json`,
      JSON.stringify(
      { [data]: response.data.message}
      ),  (err) =>console.log( err))
  console.log('DONE')
}catch (err){ 
  throw err
}
}

asyncFun('./docs/newfile.txt')

//






// const newArr = [...[data1, data2 , data3], ...[data1, data2 , data3] ]
// console.log(newArr)