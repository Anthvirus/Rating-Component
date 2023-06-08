    const btn = document.getElementById("submit");
    const option = document.getElementById("option");

    let myRate = 0;
    document.getElementById("rating").innerText = localStorage.getItem("myRate");
    document.getElementById("option").style.backgroundColor = "hsl(25, 97%, 53%)";

    function select(){
        option.style.backgroundColor = "hsl(25, 97%, 53%)";
    }

    function myRating(currentRating){
    //    document.getElementById("option" + currentRating).style.backgroundColor = "hsl(25, 97%, 53%)";
        myRate = currentRating;
        localStorage.setItem("myRate", myRate);
        
    }

    function onSubmit(){
        window.location.href = "page-two.html";
    }



  
    