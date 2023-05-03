const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-CSRF-Token": csrfToken,
  };

  //   return await fetch(url, options);
  let response = await fetch(url, options);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response);
  }
}

export function followUser(id) {
  let url = `/users/${id}/follow`;
  let options = { method: "POST" };
  return customFetch(url, options);
}

export function unfollowUser(id) {
  let url = `/users/${id}/follow`;
  let options = { method: "DELETE" };
  return customFetch(url, options);
}

export async function fetchTweets(options = {}) {
  let queryParams = new URLSearchParams(options);
  let url = "/tweets?" + queryParams.toString();
  // console.log(url);
  // let secondOptions = {
  //   method: "get",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     "X-CSRF-Token": csrfToken,
  //   },
  // };
  return await customFetch(url);
}

export const foo = "bar";
