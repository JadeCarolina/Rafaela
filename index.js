function seeMore(){
    let points = document.getElementById("points");
    let moretext = document.getElementById("moretext");
    let btnSeeMore = document.getElementById("btnSeeMore");

    if(points.style.display === "none"){
        points.style.display = "inline";
        moretext.style.display = "none";
        btnSeeMore.innerHTML = "Ver Mais";
    }
    else{
        points.style.display = "none";
        moretext.style.display = "inline";
        btnSeeMore.innerHTML = "Ver Menos";
    }
}

