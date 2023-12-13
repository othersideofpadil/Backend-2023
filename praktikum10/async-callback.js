const persiapan = () => {
  console.log("Persiapan");
};

const rebusAir = () => {
  console.log("Rebus air ....");
};

const masak = () => {
  console.log("Memasak mie ....");
};

const main = () => {
  setTimeout(() => {
    persiapan();

    setTimeout(() => {
      rebusAir();

      setTimeout(() => {
        masak();
      }, 5000);
    }, 7000);
  }, 3000);
};

main();
