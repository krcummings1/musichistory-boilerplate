// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

// {Song name} by {Artist} on the album {Album}

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



// var version2Songs = document.getElementById("songInfo").innerHTML = "";


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// Each student must add one song to the beginning and the end of the array.

// adds songs to end of array
songs.push("Teenage Dream - by Katy Perry on the album Teenage Dream");
// adds song to beginning of array
songs.unshift("The Night We Met by Lord Huron on the album Strange Trails");

// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.

function replaceWords(){
for (var i=0; i < songs.length; i++) {
  songs[i] = songs[i].replace(/\>/g, "-");
  songs[i] = songs[i].replace(/\*/g, "");
  songs[i] = songs[i].replace(/\(/g, "");
  songs[i] = songs[i].replace(/\!/g, "");
  songs[i] = songs[i].replace(/\@/g, "");

console.log(songs[i]);

}
};

replaceWords(songs);


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











