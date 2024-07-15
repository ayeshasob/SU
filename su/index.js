
function handleSearch() {
    // Loading animation starts
    loadingAnimationToggle(true);
    const searchInputElement = document.getElementById('search-input-field');
    const searchInputValue = searchInputElement.value;


    loadPhone(searchInputValue);
}

function loadingAnimationToggle(isLoading){
    const loaderAnimation = document.getElementById('loader-animation');
    if(isLoading){
        loaderAnimation.classList.remove("hidden");
    }
    else{
        loaderAnimation.classList.add("hidden");
    }
}

const loadPhone = async (searchText) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    const serverData = await res.json();

    console.log(serverData.data);
    displayPhone(serverData.data);

};
const displayPhone = (data) => {
    const cardContainer = document.getElementById('card-section');

    cardContainer.innerHTML = "";

    data.forEach(phone => {
        const productCard = document.createElement("div");

        productCard.innerHTML = `
        <div class="card-image">
            <img src=${phone.image} alt="phone image" />
        </div> 
        <h3 class="card-title"> ${phone.phone_name} </h3>
        <p class="card-description">
            There are many variations of passages of available, but the majority have suffered
        </p>
        <div class="card-price">
            <span>$</span>
            <span id="card-item-price">999</span>
        </div>
        <div class="card-btn">
            <button class="btn">Show Details</button>
        </div>
   `;
   cardContainer.appendChild(productCard);
    });

    // Loading animation stop

    loadingAnimationToggle(false);
};