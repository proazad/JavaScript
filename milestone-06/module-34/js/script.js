const loadData = async (searchText = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    // Get Phone Container Div Element by Id 
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = '';

    // Show All Button Show if search item element is greterthan 12 else hide 
    const showallBtnContainer = document.getElementById("show-all-btn");
    if (phones.length > 12 && !isShowAll) {
        showallBtnContainer.classList.remove("hidden");
    } else {
        showallBtnContainer.classList.add('hidden');
    }
    // console.log(phones.length);
    if (!isShowAll) {
        phones = phones.slice(0, 7);
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement("div");
        phoneCard.classList = 'card bg-base-100 shadow-xl';
        phoneCard.innerHTML = `
            <figure class="py-4">
            <img
                src="${phone.image}"
                alt="${phone.name}"
                draggable="false"
            />
            </figure>
            <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button class="btn btn-primary" onclick="handleShowDetails('${phone.slug}')">Show Details</button>
            </div>
            </div>
    `;

        phoneContainer.appendChild(phoneCard);

    });

    toggleSpinner(false);
}

// Show Details Funciton Handler 
const handleShowDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    showPhoneDetails(data);
}
const showPhoneDetails = (phoneDetails) => {
    const phone = phoneDetails.data;
    console.log(phone)
    // Phone Title 
    const phoneName = document.getElementById('show-details-phone-name');
    phoneName.innerText = phone.name;
    // Phone Image 
    const phoneImage = document.getElementById('show-details-phone-image');
    phoneImage.src = phone.image;
    // Phone More Details 
    const moreDetails = document.getElementById('phone-more-details');
    moreDetails.innerHTML = `
    <p class="text-blue-800"><span class="font-bold">Brand:</span> ${phone?.brand}</p>
    <p class="text-blue-800"><span class="font-bold">Release Date: </span>${phone?.releaseDate}</p>
    <p class="text-blue-800"><span class="font-bold">Chipset:</span> ${phone?.mainFeatures?.chipSet}</p>
    <p class="text-blue-800"><span class="font-bold">Display Size:</span> ${phone?.mainFeatures?.displaySize}</p>
    <p class="text-blue-800"><span class="font-bold">Memory:</span> ${phone?.mainFeatures?.memory}</p>
    
    `;
    // Show  Modal 
    show_details_modal.showModal();
}

function searchHandler(isShowAll) {
    toggleSpinner(true);
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    loadData(searchText, isShowAll);
}


function toggleSpinner(isTrue) {
    const spinerContainer = document.getElementById("spinner");
    if (isTrue) {
        spinerContainer.classList.remove('hidden');
    } else {
        spinerContainer.classList.add("hidden");
    }
}

const showAll = () => {
    searchHandler(true);
}
loadData();


// how to get sokina instagram from dreamGirl ?

const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];
console.log(dreamGirl[0].sokina.contactInfo[1].instagram);