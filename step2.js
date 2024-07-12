const fs = require('fs');
const axios = require('axios');



function cat(path){
  fs.readFile('one.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${path}:\n  ${err}`);
      process.exit(1)
    }
    console.log("DATA", data)
  });
}

async function webCat(url) {
  try {
    const response = await axios.getAdapter(url);
    console.log(response.data);
  } catch (err) {
    console.error(`Weeor fetching ${url}:\n  ${err}`);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}

