//xml request

const getTodos = (callback, link) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });

  request.open("GET", link);
  request.send();
};

const link1 = "https://jsonplaceholder.typicode.com/todos/";
const link2 = "https://jsonplaceholder.typicode.com/users/";

getTodos((err, data) => {
  if (data) {
    console.log(data);

    getTodos((err, data) => {
      if (data) {
        console.log(data);
      } else {
        console.log(err);
      }
    }, link2);
  } else {
    console.log(err);
  }
}, link1);
