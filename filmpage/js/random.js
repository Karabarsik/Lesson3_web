var site = [
    "../filmpage/Aquaman.html",
    "../filmpage/Joker.html",
    "../filmpage/Parker.html",
    "../filmpage/Titanik.html",
    "../filmpage/Spirited_away.html",
    "../filmpage/Avatar.html",
    "../filmpage/invencivel.html",
    "../filmpage/Avengers.html",
    "../filmpage/Forest_gamp.html",
    "../filmpage/Green_mile.html",
    "../filmpage/star_wars.html",
    "../filmpage/hobbit.html",
];

function randomSite() {
    "use strict";
    var i = parseInt(Math.random() * site.length);
    location.href = site[i];
}
