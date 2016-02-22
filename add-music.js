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

// Must add each string to the DOM in index.html in the main content area.


var songTitle = document.getElementById("song-title");
var artist = document.getElementById("artist");
var album = document.getElementById("album");

// EXECUTE
var button = document.getElementById("button");

function checkAddSongForm(){
  if(!songTitle.value && !artist.value && !album.value){
    alert("Please enter all data.");
} else if(!songTitle.value){
    alert("Please enter song title.");
} else if(!artist.value){
    alert("Please enter artist name.");
} else if(!album.value){
    alert("Please enter album name.");
} else {
// build new string from input fields
// push new string into songs array

  var newSong = "";
    newSong += songTitle.value + " - by ";
    newSong += artist.value + " on the album ";
    newSong += album.value;

// console.log(songTitle.value + " " + artist.value + " " +album.value);

  console.log(newSong);
  // console.log(checkAddSongForm);

  songs.push(newSong)
  }
console.log(songs);
addToDom();
}

function addToDom(){
  songInfo.innerHTML = songs;
};
addToDom();

button.addEventListener("click", checkAddSongForm);



























