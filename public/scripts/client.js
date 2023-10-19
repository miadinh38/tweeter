/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function() {

  const data = [
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
  ]


  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
      $('#tweets-container').append('<br/>');
    }

    
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }

  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article>
        <header class="tweet-article-header">
          <div class="header-content">
            <img src="${tweet.user.avatars}" alt="Author's Image" class="author-image">
            <h4 class="name">${tweet.user.name}</h4>
          </div>
          <h4 class="username">${tweet.user.handle}</h4>
        </header>
        <p class="text">${tweet.content.text}</p>
        <footer>
        <p>${tweet.created_at}</p>
        <div class="icon">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
        </footer>
      </article>
    `);

    return $tweet;
  };

  renderTweets(data);

});

