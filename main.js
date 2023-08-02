function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#image").attr('src' ,profile.getImageUrl());
    $(".g-sign-ok").css("display" , "flex");
    $(".g-sign").css("display" , "none");
  }



  // <a href="#" onclick="signOut();">Sign out</a>

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
