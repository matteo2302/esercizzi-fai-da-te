console.log("hello world");
let giornidilavoro = [
    { lavorato: true, giorno: "lunedi", ore: 3, ruolo: "bibite" },
    { lavorato: true, giorno: "martedi", ore: 4, ruolo: "lavaggio" },
    { lavorato: false, giorno: "mercoledi", ore: 3.5, ruolo: "bibite" },
    { lavorato: true, giorno: "giovedi", ore: 0, ruolo: "nessuno" }
];

//map


let settimana = giornidilavoro.map((giornodilavoro) => {
    return giornodilavoro.giorno
});
console.log(settimana);

let lavoro = giornidilavoro.map((giornodilavoro) => { return { lavorato: giornodilavoro.lavorato, giorno: giornodilavoro.giorno } });

console.log(lavoro)


//filter


let hoLavorato = giornidilavoro.filter(giornidilavoro =>
    giornidilavoro.lavorato === true).map((giornodilavoro) => {
        return { gioron: giornodilavoro.giorno, ore: giornodilavoro.ore }
    })
console.log(hoLavorato);


//find


let primoGiorno = giornidilavoro.find(giornodilavoro => giornodilavoro.giorno === "lunedi")
console.log(primoGiorno)

let findruoloPrimogiorno = giornidilavoro.find(giornodilavoro =>
    giornodilavoro.giorno === "lunedi")

let ruoloPrimogiorno = { giorno: findruoloPrimogiorno.giorno, ruolo: findruoloPrimogiorno.ruolo }
console.log(ruoloPrimogiorno)