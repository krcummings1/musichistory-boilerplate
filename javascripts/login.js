"use strict";

// When the user first opens the application, there should be a username and password text field, a button labeled "Register", and a button labeled "Login".
var ref = new Firebase("https://music-history-kaylee.firebaseio.com");

// $("#navbar").addClass("hidden");
// $("#navbar").removeClass("visible");

$("#register-button").on("click", createAccount);
$("#login-button").on("click", checkLogin);

// If the user has filled in information in both text fields, and clicks the register button, you are going to create an account in Firebase for that user.
function createAccount(){
  if (!email.value && !password.value){
    alert("Please enter email address and password.");
    console.log("register clicked");
  }   else if (!email.value){
    alert("Enter email address");
  } else if (!password.value){
    alert("Enter password");
  } else {
    ref.createUser({
      email    : $("#email").val(),
      password : $("#password").val()
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);

        $("#email").val("");
        $("#password").val("");

        $("#login-screen-view").addClass("hidden");
        $("#list-music-view").removeClass("hidden");
        $("#navbar").removeClass("hidden");
      }
    });
  } // closing big else
};

// If the user has filled in information in both text fields, and clicks the register button, you are going to authenticate that user. Notice in the docs that Firebase sends back an object into the authData function parameter. That will contain all the information about the user.

function checkLogin(){
  if (!email.value && !password.value){
    alert("Please enter email address and password.");
  }   else if (!email.value){
    alert("Enter email address");
  } else if (!password.value){
    alert("Enter password");
  } else {
    ref.authWithPassword({
      email    : $("#email").val(),
      password : $("#password").val()
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);

        $("#email").val("");
        $("#password").val("");

        $("#login-screen-view").addClass("hidden");
        $("#list-music-view").removeClass("hidden");
        $("#navbar").removeClass("hidden");
      }
    });
  } //closing big else
}; // closing checkLogin

// LOG OUT
$("#log-out-link").click(function() {
  ref.unauth();
  console.log("user maybeee logged out");

// When the user has been unauthenticated, show the login view again.
  $("#login-screen-view").removeClass("hidden");

  $("#list-music-view").addClass("hidden");
  $("#add-music-view").addClass("hidden");
  $("#profile-view").addClass("hidden");
  $("#navbar").addClass("hidden");
});

// When a user has been successfully authenticated, you can listen to that change of state with the onAuth method.
ref.onAuth(function(authData) {
  if (authData) { // if user is logged in
    console.log("Authenticated with uid:", authData.uid);
    $("#navbar").removeClass("hidden"); 
    $("#login-screen-view").addClass("hidden");
    $("#list-music-view").removeClass("hidden");
       
  } else { // if user is NOT logged in
    console.log("Client unauthenticated.")
    $("#login-screen-view").removeClass("hidden");
    $("#navbar").addClass("hidden");
    $("#list-music-view").addClass("hidden");
    $("#add-music-view").addClass("hidden");
    $("#profile-view").addClass("hidden");
  }
});














