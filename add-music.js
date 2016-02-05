// var addLink is linking to the "link-add" id in the navigation link
var addLink = document.getElementById("link-add");
// var addView is linking to the "add-view" id in the add music section
var addView = document.getElementById("add-view");

// connecting to the link ids
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
// connecting to the profile ids
var profileLink = document.getElementById("link-profile");
var profileView = document.getElementById("profile-view");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");
  profileView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});

// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

  // <section class="hidden" id="add-view">
  //   <p>Song title: <input type="text" id="song-title"></p>
  //   <p>Artist: <input type="text" id="artist"></p>
  //   <p>Album: <input type="text" id="album"></p>
  //   <input type="submit" id="button" value="Add"></input>
  // </section>

// var songTitle = document.getElementById("song-title");
// var artist = document.getElementById("artist");
// var album = document.getElementById("album");

// // EXECUTE
// var button = document.getElementById("button");

// button.addEventListener("click", checkAddSongForm);


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
//     // songs.push(songTitle.value + artist.value + album.value);
//   var newSong = "";
//     newSong += songTitle.value + " ";
//     newSong += artist.value + " ";
//     newSong += album.value;

// console.log(songTitle.value + " " + artist.value + " " +album.value);


//   // var newSong = {}
//   // newSong.songTitle = songTitle.value;
//   // newSong.artist = artist.value;
//   // newSong.album = album.value;

//   // printNewSong(newSong);
//   console.log(newSong);
//   console.log(checkAddSongForm);
//   songs.push(newSong);
//   }
// }

// checkAddSongForm();

// console.log(songs);




// // adds songs to end of array
// // songs.push(newSong);



























