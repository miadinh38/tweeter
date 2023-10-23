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

   // Display the time passed since a tweet
  const timeStamp = function(timestamp) {
    return timeago.format(timestamp); 
  };


  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  }

  // Define an escape function to safely escape HTML content
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article>
        <header class="tweet-article-header">
          <div class="header-content">
            <img src="${escape(tweet.user.avatars)}" alt="Author's Image" class="author-image">
            <h4 class="name">${escape(tweet.user.name)}</h4>
          </div>
          <h4 class="username">${escape(tweet.user.handle)}</h4>
        </header>
        <p class="text">${escape(tweet.content.text)}</p>
        <footer>
        <p class="timeStamp">${escape(timeStamp(tweet.created_at))}</p>
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

  const validateForm = function() {
    const message = $('#tweet-text').val();

    if (message === '') {
      alert('The content is empty.');
      return false; // Return false to prevent form submission
    } 
    if (message.length > 140) {
      alert('The content is too long.');
      return false; 
    }
  
    return true; // Return true if validation is successful
  }

  $('#myForm').on('submit', function(event) {

    event.preventDefault();
    
    if (validateForm()) {
      // Serialize the form data
      const tweet = $('#myForm').serialize();
      console.log($(this).serialize());

      $.post("/tweets", tweet).then((data) => {    
        console.log(data);
        $("#myForm").trigger("reset");
      });
    }
  });

    
  const $loadTweets = function(tweet) {
    const $button = $('.tweet-button');
    $button.on('click', function() {
      console.log('Button clicked, performing ajax call...');
      
      $.ajax({
        url: '/tweets',
        method: 'GET',
        success: function(data) {
          console.log("Server data: ", data);
          renderTweets(data);
        }    
      });
    })
  }

  $loadTweets();
  
});



