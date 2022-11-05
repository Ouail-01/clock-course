function clock(){
    let dateTime = new Date();
    let h = dateTime.getHours();
    let m = dateTime.getMinutes();
    let s = dateTime.getSeconds();
    let session = document.getElementById("session");

    if(h >= 12){
        session.innerHTML = "Pm";
    }else {
        session.innerHTML = "Am";
    }

    if(h > 12){
        h -=12;
    }

    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}

setInterval(clock,10);