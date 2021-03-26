
const timeSinceTweet = (unix) => {
  return moment(unix).fromNow();
};


// prevents malicious <scrip> to be inputed by user.
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


// creates HTML template for new tweets
const createTweetElement = function(tweetsObj) {
  let $tweet = `
  <article class="tweet-box">
  <header class="tweet-head">
  <div class="avatar-user-name">
    <img src="${tweetsObj.user.avatars}">
      <div class="user-name">
      ${escape(tweetsObj.user.name)}
      </div>
  </div>
    <div class="handler">
    ${escape(tweetsObj.user.handle)}
    </div>
  </header>
  <article class="tweet-content">
  <div>${escape(tweetsObj.content.text)}</div>
  </article>
  <footer class="footer">
    <time>${timeSinceTweet(tweetsObj.created_at)}</time>
      <aside>
      <a><i class="far fa-flag"></i></a>
      <a><i class="fas fa-retweet"></i></a>
      <a><i class="far fa-heart"></i></a>
    </aside>
  </footer>
  </article>
  <br>
  `;
  return $tweet;
};

// renders the tweets in the database
const renderTweets = function(tweetsArr) {
  for (let tweet of tweetsArr) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

// loads the tweets on to the main page
const loadTweets = function() {
  $.ajax({
    url: '/tweets',
    method: "GET",
  })
    .then((tweets) => {
      renderTweets(tweets);
    });
};

// Load when document is ready
$(document).ready(function() {

  
  // load the database tweets on page load
  loadTweets();
  
  
  // Submits new tweets if input is withing the character requirements, else it drops an error message.
  const $submitTweet = $('form');
  $submitTweet.submit(function(event) {
    event.preventDefault();
    const $newTweet = $(this).serialize();
    const $tweetLen = $('textarea').val().length;
    
    if ($tweetLen > 140) {
      
      $(".error-message").text("Hey, you're tweeting too much!").slideDown(1000).delay(2000).fadeOut(1000);
    } else if ($tweetLen === 0) {
      $(".error-message").text("Hey, you're not tweeting anything!").slideDown(1000).delay(2000).fadeOut(1000);
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $newTweet
      }).then(loadTweets).then(() => this.reset()).then(('.character-count').text(140));
    }
  });

  ///////////
  /// STRETCH: toggles the new tweet section.
  //////////
  $('.new-tweet-button').on("click",function() {
    $("#toggle-tweet").slideToggle();
  });
});