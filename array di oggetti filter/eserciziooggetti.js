console.log("hello world");
let giornidilavoro = [
    { lavorato: true, giorno: "lunedi", ore: 3, ruolo: "bibite" },
    { lavorato: true, giorno: "martedi", ore: 4, ruolo: "lavaggio" },
    { lavorato: false, giorno: "mercoledi", ore: 3.5, ruolo: "bibite" },
    { lavorato: true, giorno: "giovedi", ore: 0, ruolo: "nessuno" }
];
let settimana = giornidilavoro.map((giornodilavoro) => {
    return giornodilavoro.giorno
});
console.log(settimana);

let lavoro = giornidilavoro.map((giornodilavoro) => { return { lavorato: giornodilavoro.lavorato, giorno: giornodilavoro.giorno } });

console.log(lavoro)

let hoLavorato = giornidilavoro.filter(giornidilavoro =>
    giornidilavoro.lavorato === true).map((giornodilavoro) => {
        return { gioron: giornodilavoro.giorno, ore: giornodilavoro.ore }
    })
console.log(hoLavorato);