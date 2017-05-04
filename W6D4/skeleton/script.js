document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const postItem = (e) => {
    e.preventDefault();
    const favoriteEl = document.getElementsByClassName("favorite-input")[0];
    const favorite = favoriteEl.value;
    favoriteEl.value = "";
    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = favorite;
    ul.appendChild(li);
  };

  document.querySelector("form").addEventListener("submit", postItem);



  // adding new photos

  // --- your code here!
  const toggleHidden = function(e){
      let photoForm = document.querySelector(".photo-form-container");
      photoForm.className === "photo-form-container" ?
        photoForm.className = "photo-form-container hidden" :
        photoForm.className="photo-form-container";
  };

  document.getElementsByClassName("photo-show-button")[0]
    .addEventListener("click", toggleHidden);


    const postPhoto = (e) => {
    e.preventDefault();
    let photoLinkEl = document.querySelector(".photo-url-input");
    let link = photoLinkEl.value;
    photoLinkEl.value = "";

    const newImg = document.createElement('img');
    newImg.src = link;

    const newPhotoLi = document.createElement('li');
    newPhotoLi.appendChild(newImg);

    const dogList = document.querySelector(".dog-photos");
    dogList.appendChild(newPhotoLi);
  };

  const d = document.querySelector(".photo-url-submit");
  d.addEventListener("click", postPhoto);

});
