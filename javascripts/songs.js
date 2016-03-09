"use strict";

$("#list-music-link").on("click", function() {
  $("#add-music-view").addClass("hidden");
  $("#profile-view").addClass("hidden");

  $("#list-music-view").addClass("visible");
  $("#list-music-view").removeClass("hidden");
});

function getSongs () {
  // .empty() empties and resets the #song-info div so when firebase GETS the songs and updates the DOM, it doesn't duplicate
  $("#song-info").empty();
  $.ajax({
    // GETs songs from json file on firebase
    url: "https://music-history-kaylee.firebaseio.com/songs.json",
    method: "GET"
    //. done says, after this is done, do this...
  }).done(function (songs) {
    let songEl = $("#song-info");
    console.log("songs", songs);
    // for in iterates over an object's keys 
    // SONGS is the main object
    // song is the key for all song objects within SONGS
    for (let song in songs) {
      var outputString = "";
      //SONGS[song] is saying the currentSong is whichever song is currently up in the object SONGS
      var currentSong = songs[song];

      // currentSong.title
      // currentSong.artist
      // currentSong.album

      // ${song} is giving each song a unique ID
      outputString += `<div id="${song} singleSong"><p class="song-title">${currentSong.title} </p>`;
      outputString += `<p>${currentSong.artist}   |`;
      outputString += `   ${currentSong.album}   |`;
      outputString += `   ${currentSong.genre}`;
      // --${song}: -- is common convention to place before a unique identifier
      // included ${song} in delete button so that delete button has same ID as the song it's on, linking them together making it possible to delete that specific song by ID
      outputString += `  <button class="delete-song" id="delete-song--${song}">Delete</button></p>`;
      outputString += `</div>`;

      // append adds to the end
      songEl.append(outputString);

      $(`#delete-song--${song}`).click(function(){
        $.ajax({
          // ${song} in the link below is saying go to this firebase link and delete only the song with the ${song} id
          url: `https://music-history-kaylee.firebaseio.com/songs/${song}.json`,
          method: "DELETE"
        }).done(function(){
        // after firebase DELETES the song from their database, run getSongs(); again to refresh the DOM making it possible to delete the song just added without refreshing the page
          getSongs();
        })

      });
    }


    console.log("currentSong", currentSong);
  })
}
getSongs();



