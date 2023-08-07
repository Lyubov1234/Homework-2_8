function delay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Прошло 5 секунд");
      }, 5000);
    });
  }
  
  delay().then((result) => {
    console.log(result); 
  });
