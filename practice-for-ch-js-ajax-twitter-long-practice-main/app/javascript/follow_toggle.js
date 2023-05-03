import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this));
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    // console.log(this.followState);
    if (this.followState === "followed") {
      this.unfollow();
    } else {
      this.follow();
    }
  }

  async follow() {
    // Your code here
    this.followState = "following";
    let response = await API.followUser(this.toggleButton.dataset.userId);
    this.followState = "followed";
  }

  async unfollow() {
    // Your code here
    this.followState = "unfollowing";
    let response = await API.unfollowUser(this.toggleButton.dataset.userId);
    this.followState = "unfollowed";
  }

  render() {
    switch (this.followState) {
        case "followed":
            this.toggleButton.removeAttribute("disabled");
            this.toggleButton.innerText = "Unfollow!";
            break;
        case "unfollowed":
            this.toggleButton.removeAttribute("disabled")
            this.toggleButton.innerText = "Follow!";
            break;
        case "following":
            this.toggleButton.setAttribute("disabled", "true")
            this.toggleButton.innerText = "Following...";
            break;
        case "unfollowing":
            this.toggleButton.setAttribute("disabled", "true")
            this.toggleButton.innerText = "Unfollowing...";
            break;
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}
