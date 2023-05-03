const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "Content-Type": "application/json", "Accept": "application/json"
    
  };


  return await fetch(url, options);
}
export function followUser(id){
  let url = `/users/${id}/follow`;
  let options = {method: "post"};
  return customFetch(url, options);
}
export function unfollowUser(id){
  let url = `/users/${id}/follow`;
  let options = JSON.stringify({method: "delete"});
  return customFetch(url, options);

}


export const foo = "bar";
