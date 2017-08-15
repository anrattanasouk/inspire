//var that gets list of all buttons
var allbuttons = document.querySelectorAll("button");
//For loop through the list of all buttons

//Disable all the buttons
//When the button is clicked that the image shows then the user is not allowed to mess with it
function clickBtn() {
  for (i=0; i<allbuttons.length; i++) {
    allbuttons[i].disabled = true;
  }
}

function Google() {
  document.getElementById("googleOp").innerHTML = "Congrats you just sent your resume to Google to apply for your first job!  2 weeks later...  'This is the recruiter from Google, we reviewed your application and after your interview last week, we think you’d be a really good fit for our company. We're happy to announce you as our new employee!'<hr>";


  document.getElementById("situation_100").innterHTML = "What could be better than a job at Google? Maybe better coworkers, but you’ve dealt with enough jerks, so you’re pretty sure you can get by. Soon it’s obvious that your new partner doesn’t like working with you. You suspect that’s because you’re the only new female hire but you don’t mind because Google isn’t known to be sexist. You keep working hard and deal the best you can, but it starts becoming a bit unbearable when your partner begins to drop comments about how you always get the easy work and the reason you do so well is because you’re a woman. You shrug them off because you know you excel through work hard. But when you get a tough project your partner works against you and you don’t make the deadline. Already mortified, your partner starts yelling at you. You yell back about how he’s sexist and he accuses you of sleeping with your boss to get easy work. <hr>"
  // document.getElementById("situation_100").style.fontFamily = "Cutive Mono";
}

function Apple() {
  document.getElementById("AppleOp").innerHTML = "Congrats you just sent your resume to Apple to apply for your first job!  2 weeks later...  'This is the recruiter from Apple, we reviewed your application and after your interview last week, we think you’d be a really good fit for our company. We're happy to announce you as our new employee!' <hr>";

  document.getElementById("situation_200").innterHTML = "Now you’re working for Apple and you feel invincible. You do feel rather scared, but that’s understandable seeing as you’re starting a new job, one that happens to be at Apple of all places. How much luckier could you get? You get into a groove after a couple weeks; the people seem pretty cool and you’re already making friends."
  "However after awhile you start to notice that your boss has been favoring the male team members who were hired at the same time as you. You tell yourself that you’re crazy, but pretty soon it’s undeniably that your boss is biased towards your male counterparts. He glorifies the things they do, doesn’t pay much attention to you, and doesn’t act like you matter. One day you find out that the male members of the team are even getting paid more than you despite having done the same amount of work, and you’ve been working extremely hard these last few weeks. <hr>"

}

function showGo() {
  document.getElementById("go").className ="showButton";
}

function showQuiet() {
  document.getElementById("stayquiet1").className ="showButton";
}

function showBoss() {
  document.getElementById("boss").className ="showButton";
  document.getElementById("go").className ="invisible";

}

function showEpiphany() {
  document.getElementById("quitthis").className ="showButton";
  document.getElementById("stayquiet1").className ="invisible";
  document.getElementById("boss").className ="invisible";
}

function showB() {
  document.getElementById("wrw").className ="showButton";
  document.getElementById("quitthis").className ="invisible";
}

function hideEpiphany() {
  document.getElementById("quitthis").className = "hideEvery";
}

function hideQuiet() {
  document.getElementById("stayquiet1").className = "hideEvery";

}

function hideBoss() {
  document.getElementById("boss").className = "hideEvery";

}

function undisableBtn() {
    document.getElementById("go").disabled = false;
    document.getElementById("stayquiet1").disabled = false;
    document.getElementById("boss").disabled = false;
    document.getElementById("quitthis").disabled = false;
    document.getElementById("wrw").disabled = false;
  }

  function notify1() {
    alert("Hello! My name is Ada Lovelace!");
  }

function Facebook() {
  document.getElementById("FbOp").innerHTML = "Congrats you just sent your resume to Facebook to apply for your first job!  2 weeks later...  'This is the recruiter from Facebook, we reviewed your application and after your interview last week, we think you’d be a really good fit for our company. We're happy to announce you as our new employee!'<hr>";

  document.getElementById("situation_300").innterHTML = "Congrats, you work at Facebook now! Who wouldn’t want to work at Facebook? They have great food, shameless self-promotion, and you don’t experience any workplace sexism like you did in college. It seems perfect until one day you receive an opportunity to get promoted; you begin to suspect your fellow coworker is sabotaging your work. You’re surprised; you’ve experienced this before but from men, not women. You decide that you’re paranoid because women stick together, and you keep working hard. However, it doesn’t take long for you to decide that she is definitely sabotaging you, but what should you do? You decide to confront her. She denies your allegations, but you keep trying and she eventually confides. She explains that it’s hard to get by as a woman in tech and only one woman can get promoted, so she was making sure that she would get the promotion by making you look like an unreliable employee. <hr>"
}

function nextStory() {
  document.getElementById("appleStart").innerHTML = "Now you’re working in a prestigious company and you feel invincible. You do feel rather scared, but that’s understandable seeing as you’re starting a new job. You get into a groove after a couple weeks; the people seem cool and you’re already making friends.<br>" +
  "However after a while you start to notice that your boss has been favoring the male team members who were hired at the same time as you. You tell yourself that you’re crazy, but soon it’s undeniably obvious that your boss is biased towards your male counterparts. He glorifies the things they do, doesn’t pay much attention to you, and doesn’t act like you matter. One day you find out that the male members of the team are even getting paid more than you despite having done the same amount of work, and you’ve been working extremely hard these last few weeks.<hr>";

}

function stayquiet2() {
  document.getElementById("quiet").innerHTML = "I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the man connections and relations which occur to me. Basically, hang in their girl, and never feel the need to stay quiet.<hr>";

}

function talktoboss() {
  document.getElementById("meanBoss").innerHTML = "You try to explain to your boss about what’s going on, and he continues to shut you out. A coworker overhears your conversation and comes to help. She tells you that it happens to her too, and encourages you to choose your own path. You leave the room feeling inspired.<hr>";

}

function quitThis() {
  document.getElementById("quit").innerHTML = "After talking to your boss you realize that you don’t want to keep working for a boss that doesn’t value you or your efforts. You quit on the spot and walk out the office with your head held high. Weeks later you are still looking for a job and beginning to feel nervous about leaving a job at such a prestigious place; even if you were being paid less than your male coworkers, at least you were being paid at all.<hr>"
}

function whoruntheworld() {
document.getElementById("beyonce").innerHTML = "Out of the blue, you find a notification on your LinkedIn from Twitter! They noticed your credentials and thought you would be a perfect tech manager, a role that they say would pay the exact same as its male counterpart, and so you happily accept their offer. After reflecting on your experiences, both the positive and the negative as well as solidifying your personal values, you feel empowered to approach this new job.<hr>"
}

//We only want to start with no buttons yet
//We want btn Go On... to show up after clicking the company-image
//After clicking Go On.. btn Talk to Boss and Stay Quiet should only be there
//Then we only want Epiphany
//Then we only want who runs the world
