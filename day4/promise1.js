const getSomething = () => {
  return new Promise((resolve, reject) => {
    // resolve("Promice is resolved");
    reject("Promise rejected");
  });
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
