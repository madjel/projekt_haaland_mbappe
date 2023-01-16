let date = new Date();
let day = date.getDay();
let hours = date.getHours();

let weekday = [];
weekday[0] = "niedziela";
weekday[1] = "poniedziałek";
weekday[2] = "wtorek";
weekday[3] = "środa";
weekday[4] = "czwartek";
weekday[5] = "piątek";
weekday[6] = "sobota";

class Player {
    
    constructor( name, country, club, goals, photo, foot, speed, shoot, passing, stadium){
        this.name = name;
        this.country = country;
        this.club = club;
        this.goals = goals;
        this.photo = photo;
        this.foot = foot;
        this.speed = speed;
        this.shoot = shoot;
        this.passing = passing;
        this.stadium = stadium;
    }
};

let mbappe = new Player("Kylian Mbappe", "francja.png", "psg.png", 254, "mbappe.png", "prawonożny", 97, 89, 80, "mstadium.jpg");

let haaland = new Player("Erling Haaland", "norwegia.png", "city.png", 183, "haaland.png", "lewonożny", 89, 91, 65, "hstadium.png");



let n = weekday[day];



//updatowanie flagi//
$(".country-left").attr("src", mbappe.country);
$(".country-right").attr("src", haaland.country);


//updatowanie nazwy gracza//
$(".name-left").text(mbappe.name);
$(".name-right").text(haaland.name);


//updatowanie klubu//
$(".club-left").attr("src", mbappe.club);
$(".club-right").attr("src", haaland.club);


//bramki//
$(".goals-left").text(mbappe.goals);
$(".goals-right").text(haaland.goals);


//zdjecie gracza//
$(".player-image-left").attr("src", mbappe.photo);
$(".player-image-right").attr("src", haaland.photo);


//lepsza noga lub czy jest obunożny//
$(".foot-left").text(mbappe.foot);
$(".foot-right").text(haaland.foot);



//wartość siły strzału z fify2023//
$(".shoot-left").text(mbappe.shoot);
$(".shoot-right").text(haaland.shoot);


//wartość szybkości z fify2023//
$(".speed-left").text(mbappe.speed);
$(".speed-right").text(haaland.speed);


//wartość podania z fify2023// 
$(".passing-left").text(mbappe.passing);
$(".passing-right").text(haaland.passing);

//dzien tygodnia//
$("h3").text("Dzisiaj jest " + n); 

//tytuł//
$("h1").text(mbappe.name + " vs " + haaland.name);

//zmienianianie tła zależnie od pory dnia//
if(hours > 13 ) {
    $(".container").css("background-image", "url(" + mbappe.stadium +")" ); 
}
else {
    $(".container").css("background-image", "url(" + haaland.stadium +")" ); 
}


//guzik//
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
