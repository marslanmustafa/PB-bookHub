function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
document.getElementById("name").innerHTML = (profile.getName());
    $("#name").text(profile.getName());
    document.getElementById("name").src = (profile.getImageUrl());
    $("#image").attr('src' ,profile.getImageUrl());
    document.querySelector(".g-sign-ok").style.display = "flex";
    $(".g-sign-ok").css("display" , "flex");
    document.querySelector(".g-sign").style.display = "none";
    $(".g-sign").css("display" , "none");
    document.querySelector(".g-signin2").style.display = "none";
    $(".g-signin2").css("display" , "none");
  }



  // <a href="#" onclick="signOut();">Sign out</a>

  // function signOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }
