const getTodos = async (link) => {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
};

const link1 = "https://jsonplaceholder.typicode.com/todos/";
const link2 = "https://jsonplaceholder.typicode.com/users/";

const datalist = getTodos(link1)
  .then((data) => console.log(data))
  .catch((err) => console.log("Could not fetch data", err.message));
