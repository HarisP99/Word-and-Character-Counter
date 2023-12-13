// Selektujemo HTML elemente koje ćemo ažurirati
const wordCounter = document.getElementById("wordCounter");
Totalwords = document.getElementById("Totalwords");
TotalCharWithSpace = document.getElementById("TotalCharWithSpace");
TotalCharWithoutSpace = document.getElementById("TotalCharWithoutSpace");
TotalSpecialChar = document.getElementById("TotalSpecialChar");
TotalReadTime = document.getElementById("TotalReadTime");

// Dodajemo event listener na keyup događaj unutar wordCounter elementa
wordCounter.addEventListener("keyup", function (e) {
    // Dobavljamo vrijednost unutar polja za unos teksta
    let countValues = e.target.value;

    // Ažuriramo HTML elemente sa rezultatima
    Totalwords.innerText = getTotalWords(countValues);
    TotalCharWithSpace.innerText = getTotalCharWithSpace(countValues);
    TotalCharWithoutSpace.innerText = getTotalCharWithoutSpace(countValues);
    TotalSpecialChar.innerText = getTotalSpecialChar(countValues);
    TotalReadTime.innerText = getTotalReadTime(countValues);
});

// Funkcija za dobijanje ukupnog broja riječi u tekstu
function getTotalWords(str) {
    return str.length > 0 ? str.split(/\s+/).length : 0;
}

// Funkcija za dobijanje ukupnog broja karaktera sa razmacima u tekstu
function getTotalCharWithSpace(str) {
    return str.length;
}

// Funkcija za dobijanje ukupnog broja karaktera bez razmaka u tekstu
function getTotalCharWithoutSpace(str) {
    return str.split(" ").join("").length;
}

// Funkcija za dobijanje ukupnog broja specijalnih karaktera u tekstu
function getTotalSpecialChar(str) {
    let spChars = /[!@#$%^&*()\-_+={}[\]|\\:;"'<>,.]/;
    let counts = 0;

    for (let i = 0; i < str.length; i++) {
        if (spChars.test(str[i])) {
            counts++;
        }
    }

    return counts;
}

// Funkcija za dobijanje vremena čitanja teksta u minutima
function getTotalReadTime(str) {
    let WPM = 200; // Riječi po minutu
    return Math.ceil(getTotalWords(str) / WPM);
}
