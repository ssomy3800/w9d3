import { API } from "./util";

export default class InfiniteTweets {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.fetchButton = document.querySelector(".fetch-tweets-btn");
    this.tweets = document.querySelector(".tweets");
    this.fetchButton.addEventListener(
      "click",
      this.handleFetchTweets.bind(this)
    );
    // Your code here
  }

  async handleFetchTweets(event) {
    event.preventDefault();
    let type = event.currentTarget.parentElement.parentElement.dataset.type;
    let offset = this.tweets.children.length;
    let options = { type: type, offset: offset };
    let fetchedTweets = await API.fetchTweets(options);
    console.log(fetchedTweets);
    // Your code here
    // Remove fetch tweets button if you've run out of tweets to fetch
    if (false /* REPLACE */) {
      const noMoreTweets = document.createElement("p");
      noMoreTweets.innerText = "No more tweets!";
      // Your code here
    }
  }

  appendTweet(tweetData) {
    const tweetEl = this.createTweet(tweetData);
    // Your code here
  }

  createTweet(tweetData) {
    const li = document.createElement("li");
    // Your code here
    return li;
  }

  // Helper methods...
}
