

//email to clipboard - clipboard API
//get clipboard access perms
navigator.permissions.query({
  name: 'clipboard-read',
  name: 'clipboard-write'
});

//target clip on DOM
const email = document.querySelector('.cta-email');
email.addEventListener('click', clip);
email.addEventListener('', clip);

function clip(){
  let clipable = document.querySelector('.clipable');
  navigator.clipboard.writeText("xxkeefer.code@gmail.com")
  clipable.innerHTML = "COPIED!"
  setTimeout( resetHTML, 3000)
};

function resetHTML(){
  let clipable = document.querySelector('.clipable');
  clipable.innerHTML = "EMAIL"
}


// Dark Mode Toggle
// TODO: add darkmod styling
// let darkMode = localStorage.getItem("darkMode");
// const darkmodeButton = document.querySelector('.darkmode-btn');
//
// const enableDarkmode = () => {
//   document.body.classList.add("darkmode");
//   localStorage.setItem("darkMode", "enabled");
// };
//
// const disableDarkmode = () => {
//   document.body.classList.remove("darkmode");
//   localStorage.setItem("darkMode", null);
// };
//
// if (darkMode === 'enabled') {
//     enableDarkmode();
// }
//
// darkmodeButton.addEventListener("click", () => {
//   darkMode = localStorage.getItem("darkMode");
//   if (darkMode !== 'enabled') {
//     enableDarkmode();
//   }else {
//     disableDarkmode();
//   }
// });
