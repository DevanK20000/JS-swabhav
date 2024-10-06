const getTodos = (link) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Could not fetch data");
      }
    });

    request.open("GET", link);
    request.send();
  });
};

const link1 = "https://jsonplaceholder.typicode.com/todos/";
const link2 = "https://jsonplaceholder.typicode.com/users/";

getTodos(link1)
  .then((data) => {
    console.log(data);
    return getTodos(link2);
  })
  .then((data) => {
    console.log(data);
    return getTodos(link1);
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
