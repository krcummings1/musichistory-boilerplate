// "use strict";

// // var addLink is linking to the "link-add" id in the navigation link
// // var addLink = document.getElementById("link-add");
// var addLink = $("#link-add");

// // var addView is linking to the "add-view" id in the add music section
// // var addView = document.getElementById("add-view");
// var addView = $("#add-view");

// // connecting to the link ids
// // var listLink = document.getElementById("link-list");
// var listLink = $("#link-list");

// // var listView = document.getElementById("list-view");
// var listView = $("#list-view");

// // connecting to the profile ids
// // var profileLink = document.getElementById("link-profile");
// var profileLink = $("link-profile");

// // var profileView = document.getElementById("profile-view");
// var profileView = $("#profile-view");

// // var deleteButton = $(".delete-song");

// // deleteButton.addEventListener("click", function deleteSongs() {


// // });

// $(document).on("click", ".delete-song",function(){
//   console.log(this.parentNode);
// })  










// Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.

// var SongListBuilder = function(deleter) {
//   deleter.deleteSingleSong = function(id, text){
//     var divToRemove = document.getElementById(id);
//     divToRemove.parentNode.removeChild(divToRemove);

//   }
//   return deleter;
// }(SongListBuilder);