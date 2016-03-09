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


function getSongs () {
  $("#song-info").empty();
  $.ajax({
    url: "https://music-history-kaylee.firebaseio.com/songs.json",
    method: "GET"
  }).done(function (songs) {
    let songEl = $("#song-info");
    console.log("songs", songs);
    // for in iterates over an object's keys // songs is object
    for (let song in songs) {
    var outputString = "";
      var currentSong = songs[song];

      // currentSong.title
      // currentSong.artist
      // currentSong.album

      outputString += `<div id="${song} singleSong"><p class="song-title">${currentSong.title} </p>`;
      outputString += `<p>${currentSong.artist}   |`;
      outputString += `   ${currentSong.album}   |`;
      outputString += `   ${currentSong.genre}</p>`;
      outputString += `  <button class="delete-song" id="delete-song--${song}">Delete</button>`;
      outputString += `</div>`;

      songEl.append(outputString);

      $(`#delete-song--${song}`).click(function(){
        $.ajax({
          url: `https://music-history-kaylee.firebaseio.com/songs/${song}.json`,
          method: "DELETE"
        }).done(function(){
          getSongs();
        })
      // $(event.target).parents("#singleSong").remove();

      });
    }


    console.log("currentSong", currentSong);
  })
}


getSongs();

/*
CODE ABOVE REPLACED CODE BELOW
*/

// var SongListBuilder = function () {
//   var songs = [];

//   return {
//     loadSongs: function () {
//       console.log("loading songs");
//       var songLoader = new XMLHttpRequest();
//       songLoader.open("GET", "songs.json");
//       songLoader.send();
//       songLoader.addEventListener("load", function(){
//         privateSongs = JSON.parse(this.responseText).songs;
//         console.log("songs", privateSongs);

//         outputSongs(privateSongs);

//       });
//     }
//   }
// }();

