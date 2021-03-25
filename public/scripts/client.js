/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {


  
  const createTweetElement = function(tweetsObj) {
    let $tweet = `
    <article class="tweet-box">
    <header><img src="${tweetsObj.user.avatars}">
    <div>
    ${tweetsObj.user.handle}
    </div>
    </header>
    <article>
    <textarea name="text" >${tweetsObj.content.text}</textarea>
    </article>
    <footer>"created at "${tweetsObj.created_at}</footer>
    </article>`;
    return $tweet;
  };
  
  
  const renderTweets = function(tweetsArr) {
    // leverage createTweetElement function for each tweet
    // take an array of tweet objects
    // loops and appends each one to the #tweets-container
    for (let tweet of tweetsArr) {
      // convert data to HTML elements
      const $tweet = createTweetElement(tweet);
      // Add each HTML elements to the container
      console.log($tweet); // to see what it looks like
      $('#tweets-container').prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
    
  };
  
  const loadTweets = function() {
    return $
      .ajax({
        url: '/tweets',
        method: "GET",
      })
      .then((tweets) => {
        renderTweets(tweets);
      });
  };

  loadTweets();

  const $submitTweet = $('form');
  $submitTweet.submit(function(event) {
    event.preventDefault();
    const $newTweet = $(this).serialize();
    const $tweetLen = $('textarea').val().length;

    if ($tweetLen > 140) {
      alert("Your tweet is too long");
    } else if ($tweetLen === 0) {
      alert("You're not tweeting anything");
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $newTweet
      })
        .then(loadTweets);
    }
  });


});