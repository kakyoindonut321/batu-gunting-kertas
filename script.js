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

function inputIdentify(btg) {
    //
}

function playRound(playerSelection, computerSelection) {
    // 
}