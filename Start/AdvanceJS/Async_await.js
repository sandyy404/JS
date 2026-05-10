function fetchUserData() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let fetch = false;
         if (fetch) {
            resolve({ name: "Sandeep" })
         } else {
            reject("data not found or searching rejected")
         }
      }, 3000);
   })
}
async function getUserData() {
   try {
      console.log("Fetching user Data...");
      const userData = await fetchUserData();
      console.log("User Data: ", userData);
      console.log("Data fetched successfully");
   } catch (error) {
      console.log("Error fetching data ", error);

   }
}
getUserData()

// fetching data from two or more data function we use promise.all