// creating Promise
function fetchdata() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let success = true;
         if (success) {
            resolve("Data fetched successfully");
         } else {
            reject("Error while fetching data");
         }
      }, 3000);
   });
}

// fetching promises
fetchdata()
   .then((data) => {
      console.log(data);
   })
   .catch((error) => {
      console.log(error);
   })