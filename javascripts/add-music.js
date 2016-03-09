"use strict";

$("#add-music-link").on("click", function() {
  $("#list-music-view").addClass("hidden");
  $("#profile-view").addClass("hidden");

  $("#add-music-view").addClass("visible");
  $("#add-music-view").removeClass("hidden");
});


$("#add-button").click(function(e) {
  var newSong = {
    // .val() takes value from input ids
    // makes newSong.title = whatever song title was typed in the input
    "title": $("#song-title").val(),
    "artist": $("#artist").val(),
    "album": $("#album").val(),
    "genre": $("#genre").val()
  };
  console.log("newSong", newSong);
  console.log("new song title", newSong.title);

  var outputString = "";

  $.ajax({
    url: "https://music-history-kaylee.firebaseio.com/songs.json",
    method: "POST",
    data: JSON.stringify(newSong)
  }).done(function(addedSong) {
    console.log("Your new song is", addedSong);

    // id="${newSong.title}" gives newly added song a unique ID
    outputString += `<div id="${newSong.title} singleSong"><p class="song-title">${newSong.title} </p>`;
    outputString += `<p>${newSong.artist}   |`;
    outputString += `   ${newSong.album}   |`;
    outputString += `   ${newSong.genre}`;
    outputString += `  <button class="delete-song" id="delete-song--${newSong.title}">Delete</button></p>`;
    outputString += `</div>`;

    let songEl = $("#song-info");
    songEl.append(outputString);
     
    // refreshes DOM with firebase info so I can immediately delete song just added without refreshing page 
    $.ajax({
      url: "https://music-history-kaylee.firebaseio.com/songs.json",
      // GET is getting the updated song list from firebase to put it in the DOM
      method: "GET"
    }).done(function(){
      // after I've received updated song list from firebase, getSongs(); is refreshing DOM to be identical to the data that's in firebase
      getSongs();
    })

  // clears input values when add button is clicked
   $("#song-title").val("");
   $("#artist").val("");
   $("#album").val("");
   $("#genre").val("");
  

  }); // closing function(addedSong) 
}); // closing add button event listener function









// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

// Must add each string to the DOM in index.html in the main content area.


// var songTitle = document.getElementById("song-title");
// var artist = document.getElementById("artist");
// var album = document.getElementById("album");

// // EXECUTE
// var button = document.getElementById("button");

// function checkAddSongForm(){
//   if(!songTitle.value && !artist.value && !album.value){
//     alert("Please enter all data.");
// } else if(!songTitle.value){
//     alert("Please enter song title.");
// } else if(!artist.value){
//     alert("Please enter artist name.");
// } else if(!album.value){
//     alert("Please enter album name.");
// } else {
// // build new string from input fields
// // push new string into songs array

//   var newSong = "";
//     newSong += songTitle.value + " - by ";
//     newSong += artist.value + " on the album ";
//     newSong += album.value;

// // console.log(songTitle.value + " " + artist.value + " " +album.value);

//   console.log(newSong);
//   // console.log(checkAddSongForm);

//   songs.push(newSong)
//   }
// console.log(songs);
// addToDom();
// }

// // function addToDom(){
// //   songInfo.innerHTML = songs;
// // };
// // addToDom();

// // button.addEventListener("click", checkAddSongForm);


























