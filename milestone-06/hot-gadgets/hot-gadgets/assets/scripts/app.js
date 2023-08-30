/**
 * 
 * Load All Data 
 */
const phonesDataLoad = async (searchText, isShowAll) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    const phones = data.data;
    displyPhones(phones, isShowAll);
}

/**
 * 
 * Display Phone Data 
 */

const displyPhones = (phones, isShowAll) => {
    /**
     * GetPhone Cotainer Div 
     */
    const phonesContainer = document.getElementById("phoneContainer");
    phonesContainer.innerHTML = '';

    /**
     * Show And Hide ShowAll Button
     */
    const showAll = document.getElementById("showAll");
    if (phones.length > 12 && !isShowAll) {
        showAll.classList.remove("hidden");
    } else {
        showAll.classList.add("hidden");
    }
    if (!isShowAll) {
        phones = phones.slice(0, 9);
    }
    /**
      * Create Phone Card Element Div
      * Add Card Class List 
      */
    phones.forEach(phone => {
        const phoneCard = document.createElement("div");
        phoneCard.classList = 'card bg-base-100 shadow-md shadow-slate-500';
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
            <img
            src="${phone.image}"
            alt="${phone.phone_name}"
            class="rounded-xl"
            />
        </figure>
        <div class="card-body items-center text-center space-y-4">
            <div class="space-y-3">
            <h2 class="text-2xl font-bold text-center">
               ${phone.phone_name}
            </h2>
            <p>
                If a dog chews Iphone 13 Pro Max whose Iphone 13 Pro Max does
                he choose?
            </p>
            <p class="font-bold text-2xl">$999</p>
            </div>
            <div class="card-actions">
            <button class="btn btn-primary" onclick="showDetails('${phone.slug}')">Show Details</button>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneCard);
    });
    /**
    * Hidden Loading Spinner 
    */
    loadingSpinner(false);
}
/**
 * Search Phone by User Input
 */
const searchPhone = (isShowAll) => {
    /**
     * Show Loading Spinner 
     */
    loadingSpinner(true);
    /**
     * Get Input Text from input Box
     */
    const searchField = document.getElementById("inputText");
    const searchText = searchField.value;
    phonesDataLoad(searchText, isShowAll);
    //    console.log(searchText);
}
const loadingSpinner = (isLoaded) => {
    const loadingSpinnerElement = document.getElementById("loadingSpinner");
    if (isLoaded) {
        loadingSpinnerElement.classList.remove('hidden');
    } else {
        loadingSpinnerElement.classList.add('hidden');
    }
}


/**
 * Show All Data
 */
const showAllPhone = () => {
    searchPhone(true);
}


/**
 * Show Phone Details in Modal Box
 */

const showDetails = (slug) => {
    loadPhoneDetails(slug);
    modal.showModal();
}

/**
 * Load Phone Details 
 */

const loadPhoneDetails = async (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    const response = await fetch(url);
    const data = await response.json();
    const phone = data?.data;
    /**
     * Get Modal Parent Div
     */
    const modal = document.getElementById("modal");
    modal.innerHTML = `
    <form method="dialog" class="modal-box lg:max-w-[800px]">
            <div>
              <img
                src="${phone.image}"
                alt="${phone.name}";
                class="w-20 mx-auto"
              />
            </div>
            <div>
              <h3 class="font-bold text-2xl my-4">${phone?.name}</h3>
              <p class="py-4">
               
              </p>

              <div>
                <span class="font-semibold text-md">Storage : </span>
                <span class="text-gray-500 text-md"
                  >${phone?.mainFeatures?.storage}</span
                >
              </div>

              <div>
                <span class="font-semibold text-md">Display Size : </span>
                <span class="text-gray-500 text-md">${phone?.mainFeatures?.displaySize}</span>
              </div>

              <div>
                <span class="font-semibold text-md">Chipset : </span>
                <span class="text-gray-500 text-md">${phone?.mainFeatures?.chipSet}</span>
              </div>

              <div>
                <span class="font-semibold text-md">Memory : </span>
                <span class="text-gray-500 text-md">${phone?.mainFeatures?.memory}</span
                >
              </div>

              <div>
                <span class="font-semibold text-md">Sensors : </span>
                <span class="text-gray-500 text-md">${phone?.mainFeatures?.sensors}</span
                >
              </div>

              <div>
                <span class="font-semibold text-md">Release data : </span>
                <span class="text-gray-500 text-md"
                  >${phone?.releaseDate}</span
                >
              </div>

              <div>
                <span class="font-semibold text-md">Brand : </span>
                <span class="text-gray-500 text-md">${phone?.brand}</span>
              </div>

              <div>
                <span class="font-semibold text-md">GPS : </span>
                <span class="text-gray-500 text-md">${phone?.others?.GPS}</span>
              </div>

              <div>
                <span class="font-semibold text-md">WLAN : </span>
                <span class="text-gray-500 text-md">${phone?.others?.WLAN}</span>
              </div>

              <div>
                <span class="font-semibold text-md">Bluetooth : </span>
                <span class="text-gray-500 text-md">${phone?.others?.Bluetooth}</span>
              </div>

              <div>
                <span class="font-semibold text-md">NFC : </span>
                <span class="text-gray-500 text-md">${phone?.others?.NFC}</span>
              </div>

              <div>
                <span class="font-semibold text-md">Radio : </span>
                <span class="text-gray-500 text-md">${phone?.others?.Radio}</span>
              </div>

              <div>
                <span class="font-semibold text-md">USB : </span>
                <span class="text-gray-500 text-md">${phone?.others?.USB}</span>
              </div>

            </div>
            <div class="modal-action">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn btn-secondary">Close</button>
            </div>
          </form>
    `;
}
phonesDataLoad('iphone');