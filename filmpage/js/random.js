var site = [
    "../films/Aquaman.html",
    "../films/Joker.html",
    "../films/Parker.html",
    "../films/Titanik.html",
    "../films/Aquaman.html",
    "../films/Aquaman.html",
    "../films/Aquaman.html",
    "../films/Aquaman.html",
    "../films/Aquaman.html",
    "../films/Aquaman.html",
];

function randomSite() {
    "use strict";
    var i = parseInt(Math.random() * site.length);
    location.href = site[i];
}
