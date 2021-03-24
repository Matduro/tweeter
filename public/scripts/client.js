/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

// $(document).ready(function() {

const createTweetElement = function(tweetsObj) {
  let $tweet = `
  <section class="tweets-container">
    <header><img src="/images/profile-hex.png"></header>
    <article>
      <textarea name="text" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloribus, ipsa tempora dolor consequuntur nisi voluptatibus aut provident et ducimus mollitia autem modi est repellendus quos repellat earum minus natus.</textarea>
    </article>
    <footer>10 Days Ago</footer>
  </section>`;
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
    $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }

};

renderTweets(tweetData);

// });