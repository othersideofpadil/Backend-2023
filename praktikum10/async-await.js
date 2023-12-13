// Producing promise
const persiapan = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pesiapan....");
        },3000);
    });

};

const rebusAir = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Rebus air....");
        },7000);
    });

};

const masak = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Masak Mie....");
        },5000);
    });

};

// consuming async await
const main = async () => {

    const Hasilpersiapan = await persiapan();
    console.log(Hasilpersiapan);

    const HasilrebusAir =await rebusAir();
    console.log(HasilrebusAir);

    const Hasilmasak =await masak();
    console.log(Hasilmasak);
    
};

main();