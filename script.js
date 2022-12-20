const cookiesContainer = document.querySelector("#cookies");

const cookiesButton = document.querySelector("#cookieButton");
const modal = document.querySelector("#overlay");
const closeButton = document.querySelector("#closeModal")
const showModal = document.querySelector("#showModal");

function toggleCookie(e) {
  if(e === "cookieButton"){
    cookiesContainer.classList.toggle("displayNone")
  } else if (e === "closeModal" || e === "overlay"){
    modal.classList.remove("overlay")
    modal.classList.add("displayNone")
  } else {
    console.log('here')
    modal.classList.remove("displayNone")
    modal.classList.add("overlay")
  }
}


cookiesButton.addEventListener("click", (e) => toggleCookie(e.target.id));
modal.addEventListener("click", (e) => toggleCookie(e.target.id))
closeButton.addEventListener("click", (e) => toggleCookie(e.target.id))
showModal.addEventListener("click", () => toggleCookie())