function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("name").innerText = profile.getName();
    document.getElementById("image").src = profile.getImageUrl();
    document.querySelector(".g-sign-ok").style.display = "block";
    document.querySelector(".g-sign").style.display = "none";
    document.querySelector(".g-signin2").style.display = "none";
}

  // <a href="#" onclick="signOut();">Sign out</a>

  // function signOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }
