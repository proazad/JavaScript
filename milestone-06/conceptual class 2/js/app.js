const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    const allCategory = data.data.news_category;
    const tabContainner = document.getElementById("tab-container");
    const div = document.createElement("div");
    div.classList = "grid grid-cols-2 gap-4";
    allCategory.forEach(category => {
        const tabLink = document.createElement('a');
        tabLink.setAttribute('onclick', 'handleCategoryId(``)');
        tabLink.innerText = category.category_name;
        //     const tabLink = `
        // <a onclick="" class="tab">${category.category_name}</a>
        // `;
        div.appendChild = tabLink;
        console.log(tabLink);
    });

    tabContainner.appendChild(div);

}


// Get Category Id
const handleCategoryId = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await res.json();
    const newsContainer = document.getElementById("card-container");
    newsContainer.innerHTML = '';
    data.data.forEach((news) => {

        const newsElement = document.createElement('div');
        newsElement.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="${news?.image_url}"
                alt="${news?.title}"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
              ${news?.title}
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
    `;
        newsContainer.appendChild(newsElement);
    });
}
handleCategoryId('01');
handleCategory();