
// FORMS FUNCTION LEVEL 1_1

// Erstelle ein Formular, in dem du eine Zahl eingeben kannst.
// Erstelle einen Button, der eine Funktion aufruft.
// Deklariere eine Funktion, die den Wert aus deinem Input mit 2 multipliziert. 
// Das Ergebnis soll in deinem HTML ausgegeben werden.
// Versuche es weiter, bis du es schaffst. Viel Erfolg!

// Hinweis:
// gib deiner form onsubmit="return false" falls sich deine Seite nach dem Absenden neu lädt

function double() {
    let inputLvl1 = document.getElementById("lvl1").value 
    let res1 = inputLvl1 * 2
    let res1Output = document.getElementById("resLvl1")
    res1Output.innerHTML = res1
}

// FORMS FUNCTION LEVEL 1_2

// Ein Formular zur Berechnung deines Alters.
// Erstelle ein Formular, in dem du dein Geburtsjahr eingeben kannst.
// Nutze einen Button, der eine Funktion aufruft.
// Definiere eine Funktion, die dein Alter in Jahren ausgibt.
// Gib dein Alter in deinem HTML aus.

// Hinweis:
// gib deiner form onsubmit="return false" falls sich deine Seite nach dem Absenden neu lädt

let datum = new Date()
console.log(datum.getFullYear())

function age() {
    let inputLvl2 = document.getElementById("lvl2").value
    let res2 = datum.getFullYear() - inputLvl2
    let res2Output = document.getElementById("resLvl2")
    res2Output.innerHTML = res2
}

// FORMS FUNCTION LEVEL 1_3

// Erstelle ein Formular, um das Alter von zwei Leuten zu vergleichen.
// Nutze zwei Input Felder.
// Nutze einen Button, der eine Funktion aufruft.
// Definiere eine Funktion, die die Differenz in Jahren ausgibt.
// Gib die Differenz in deinem HTML aus.

// Hinweis:
// gib deiner form onsubmit="return false" falls sich deine Seite nach dem Absenden neu lädt

function difference() {
    let inputLvl31 = document.getElementById("lvl31").value
    let inputLvl32 = document.getElementById("lvl32").value
    let res3 = inputLvl31 - inputLvl32
    let res3Output = document.getElementById("resLvl3")
    res3Output.innerHTML = Math.abs(res3)
}