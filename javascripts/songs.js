"use strict";

var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");
var profileLink = document.getElementById("link-profile");
var profileView = document.getElementById("profile-view");

listLink.addEventListener("click", function() {
  addView.classList.add("hidden");
  profileView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");

});

var SongListBuilder = function () {
  var songs = [];

  return {
    loadSongs: function () {
      console.log("loading songs");
      var songLoader = new XMLHttpRequest();
      songLoader.open("GET", "songs.json");
      songLoader.send();
      songLoader.addEventListener("load", function(){
        privateSongs = JSON.parse(this.responseText).songs;
        console.log("songs", privateSongs);

        outputSongs(privateSongs);

      });
    }
  }
}();






























// OLD MUSIC HISTORY SONGS //

// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// Each student must add one song to the beginning and the end of the array.

// adds songs to end of array
// songs.push("Teenage Dream - by Katy Perry on the album Teenage Dream");
// // adds song to beginning of array
// songs.unshift("The Night We Met by Lord Huron on the album Strange Trails");

// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.

// function replaceWords(){
// for (var i=0; i < songs.length; i++) {
//   songs[i] = songs[i].replace(/\>/g, "-");
//   songs[i] = songs[i].replace(/\*/g, "");
//   songs[i] = songs[i].replace(/\(/g, "");
//   songs[i] = songs[i].replace(/\!/g, "");
//   songs[i] = songs[i].replace(/\@/g, "");

// console.log(songs[i]);

// }
// };

// replaceWords(songs);












