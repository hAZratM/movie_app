// ============================
// 📌 JavaScript Promises Example
// ============================

// ✅ Function: fetchUser(id)
// This function simulates fetching a user based on an ID using a Promise.
const fetchUser = (id) => {
  // Creating a user object with the given ID
  const user = {
    id,
    name: "User" + id, // Generating a name dynamically
  };

  // Creating a new Promise
  const fetch = new Promise((resolve, reject) => {
    // 🔴 Error Handling: If ID is invalid (not a number or negative), reject the Promise
    if (!Number(id) || id < 0) reject("User Should have a (+)ve Id");

    // ✅ If ID is valid, resolve the Promise with the user object
    resolve(user);
  });

  return fetch; // Returning the Promise
};

// ✅ Function: userUpdate(user)
// This function simulates updating a fetched user's details using a Promise.
const userUpdate = (user) => {
  // Creating a new Promise
  const fetchUpdate = new Promise((resolve, reject) => {
    // Simulating an asynchronous delay using setTimeout()
    setTimeout(() => {
      // Updating the user object with an email property
      user.email = user.name.toLowerCase() + "@example.com";

      // ✅ Resolving the Promise with the updated user object
      resolve(user);
    }, 1500); // 1.5-second delay to simulate a real-world async operation
  });

  return fetchUpdate; // Returning the Promise
};

// ✅ Calling fetchUser() with an invalid ID (-1) to demonstrate error handling
fetchUser(-1)
  .then((result) => {
    // 🟢 Success: If fetchUser() resolves, this block executes
    console.log("Fetched User: ", result);

    // Calling userUpdate() to update the fetched user
    return userUpdate(result);
  })
  .then((result) => {
    // 🟢 Success: If userUpdate() resolves, this block executes
    console.log("Updated User: ", result);
  })
  .catch((err) => {
    // 🔴 Error: If any Promise in the chain rejects, this block executes
    console.error("Error: ", err);
  })
  .finally(() => {
    // 🏁 Finally Block: Always executes, whether Promise resolves or rejects
    console.log("User is fetched/Updated Successfully!");
  });

/*
📝 Notes on JavaScript Promises:
--------------------------------
1️⃣ `new Promise((resolve, reject) => {...})`
   - Used to handle asynchronous operations.
   - `resolve(value)`: Marks the operation as successful.
   - `reject(error)`: Marks the operation as failed.

2️⃣ `.then((result) => {...})`
   - Runs if the Promise resolves successfully.
   - Can return another Promise to form a chain.

3️⃣ `.catch((error) => {...})`
   - Runs if any Promise in the chain rejects.
   - Handles errors and prevents crashes.

4️⃣ `.finally(() => {...})`
   - Runs regardless of success or failure.
   - Useful for cleanup operations (e.g., hiding a loading spinner).

5️⃣ `setTimeout()`
   - Simulates delay in an async operation.

🚀 How It Works:
---------------
✔ If fetchUser() resolves, it passes the user object to userUpdate().
✔ If userUpdate() resolves, the updated user is logged.
✔ If fetchUser() rejects (e.g., negative ID), `.catch()` handles the error.

❌ Expected Output (for fetchUser(-1)):
--------------------------------------
Error: User Should have a (+)ve Id
User is fetched/Updated Successfully!

✔ Expected Output (for fetchUser(5)):
--------------------------------------
Fetched User: { id: 5, name: "User5" }
Updated User: { id: 5, name: "User5", email: "user5@example.com" }
User is fetched/Updated Successfully!

*/
