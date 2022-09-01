var playerResult = "undefined";
var delayInMilliseconds = 3000;

// angka random dibuat jadi pilihan cpu
function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    if (rng == 0) {
        return let = "batu";
    } else if (rng == 1) {
        return let = "gunting";
    } else if (rng == 2) {
        return let = "kertas";
    }

}
// memindahkan web ke "halaman" lain, aslinya hanya nge toggle displaynya block atau none
function togglePage(page) {
    var pageOne = document.getElementById("pertama");
    var pageTwo = document.getElementById("kedua");
    var pageThree = document.getElementById("ketiga");
    var pageFour = document.getElementById("keempat");
    let viv = "berhasil";
    switch (page) {
        case 1:
            pageOne.style.display = "block";
            pageTwo.style.display = "none";
            pageThree.style.display = "none";
            pageFour.style.display = "none";
            break;
        case 2:
            pageOne.style.display = "none";
            pageTwo.style.display = "block";
            pageThree.style.display = "none";
            pageFour.style.display = "none";
            break;
        case 3:
            pageOne.style.display = "none";
            pageTwo.style.display = "none";
            pageThree.style.display = "block";
            pageFour.style.display = "none";
            break;
        case 4:
            pageOne.style.display = "none";
            pageTwo.style.display = "none";
            pageThree.style.display = "none";
            pageFour.style.display = "block";
            break;
    }

    return viv;
}
// identifikasi kalau inputnya batu gunting apa kertas
function inputIdentify(btg) {
    if (btg === "batu") {
        let a = "batu";
        return playerResult = a;
    } else if (btg === "gunting") {
        let b = "gunting";
        return playerResult = b;
    } else if (btg === "kertas") {
        let c = "kertas";
        return playerResult = c;
    }
}


// aktifin function playRound 
function prePlayRound() {
    var pilihanImage = document.getElementById("loading-pilihan-prop3");
    pilihanImage.src = 'assets/' + playerResult + '.gif';
    setTimeout(testFunctionPleaseIgnore(), 3000);
    if (playerResult != "undefined") {
        var result = playRound(playerResult, getComputerChoice());
    }

    setTimeout(function loading() {
        togglePage(4);
    }, delayInMilliseconds);
}

// gk tau tapi kalau dihapus mungkin kodenya bakal error
function testFunctionPleaseIgnore() {
    console.log("test console please ignore")
}

//  yang nentuin menang kalahnya dan nge return string menang atau kalah
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("seri");
        return "seri";
    }

    if (playerSelection === 'batu') {
        if (computerSelection === 'kertas') {
            console.log("kalah");
            return "kalah";
        } else {
            console.log("menang");
            return "menang";
        }
    } else if (playerSelection === 'kertas') {
        if (computerSelection === 'gunting') {
            console.log("kalah");
            return "kalah";
        } else {
            console.log("menang");
            return "menang";
        }
    } else {
        if (computerSelection === 'batu') {
            console.log("kalah");
            return "kalah";
        } else {
            console.log("menang");
            return "menang";
        }
    }

}