var playerResult = "undefined";
var delayInMilliseconds = 3000;
var conMove = getComputerChoice();


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
        var result = playRound(playerResult, conMove);
    }

    setTimeout(function loading() {
        togglePage(4);
        var winLoss = document.getElementById("winloss-prop4");
        document.getElementById("wl-img-player-prop4").src = 'assets/' + playerResult + '.gif';
        document.getElementById("wl-img-cpu-prop4").src = 'assets/' + conMove + '.gif';
        document.getElementById("h2-pilih1-prop4").innerHTML = playerResult;
        document.getElementById("h2-pilih3-prop4").innerHTML = conMove;
        // memberi warna ke h2 yang menunjukan pilihan kita dan musuh
        switch (playerResult) {
            case "batu":
                document.getElementById("h2-pilih1-prop4").style.color = "red";
                break;
            case "gunting":
                document.getElementById("h2-pilih1-prop4").style.color = "blue";
                break;
            case "kertas":
                document.getElementById("h2-pilih1-prop4").style.color = "lime";
                break;
        }
        switch (conMove) {
            case "batu":
                document.getElementById("h2-pilih3-prop4").style.color = "red";
                break;
            case "gunting":
                document.getElementById("h2-pilih3-prop4").style.color = "blue";
                break;
            case "kertas":
                document.getElementById("h2-pilih3-prop4").style.color = "lime";
                break;
        }
        if (result === "menang") {
            winLoss.innerHTML = "ANDA MENANG";
        } else if (result === "seri") {
            winLoss.innerHTML = "PERMAINAN SERI";
        } else {
            winLoss.innerHTML = "ANDA KALAH";
        }
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

function reset() {
    playerResult = "undefined";
    conMove = getComputerChoice();
}