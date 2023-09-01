//video category function
const loadVideoCategory = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await response.json();
  const videoData = data.data;
  // console.log(videoData);

  const videoCategoryContainer = document.getElementById('videoCategoryContainer');

  videoData.forEach((category) => {
    // console.log(category.category);
    const div = document.createElement('div');
    div.innerHTML = `
    
    <a onclick="handleCardVideo('${category.category_id}')" href="#"
    class="px-4 ml-5 py-2 bg-[#25252533] hover:text-white hover:bg-[#FF1F3D]  focus:ring-4 focus:ring-blue-300 rounded-md active focus:outline-none dark:bg-gray-700 dark:text-white"
    aria-current="page">${category.category}</a>
    
    
    `;

    videoCategoryContainer.appendChild(div);
  })
}

//calling the function
loadVideoCategory();


//video category related data card function
const handleCardVideo = async (cardId) => {
  console.log(cardId);
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${cardId}`);
  const data = await response.json();
  console.log(data);
  const cardData = data.data;
  // console.log(cardData);

  const cardContainer = document.getElementById('cardContainer');
  cardContainer.textContent = '';


  if (cardData.length === 0) {
    const noData = document.createElement('div');
    noData.innerHTML = `
    <div class="card md:ml-[250px] lg:ml-[600px] md:mt-30 lg:mt-40 w-full bg-base-100 ">
    <figure class="px-10 pt-10">
      <img src="img/Icon.png" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      
      <p class="text-2xl font-bold">Oops!! Sorry, There is no content here</p>
      
    </div>
  </div>
    
    `;
    cardContainer.appendChild(noData);
    return;
  }

  cardData.forEach((video) => {
    console.log(video);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a class="relative" href="#">
      <img class="rounded-t-lg h-60 w-full" src="${video.thumbnail}" />
      <p class=" text-white ml-72 absolute bottom-6">${video.others.posted_date}</p>
    </a>
    <div class="p-5">
      <div class="flex flex-start gap-4 " >
      <img class="h-10 w-10 rounded-full" src="${video.authors[0].profile_picture}">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${video.title}</h5>
      </a>
      </div>
      <div class="flex justify-between">
      <p class="mb-3 ml-14 font-normal text-gray-700 dark:text-gray-400">${video.authors[0].profile_name}</p>
      <p class="mb-3 ml-14 font-normal text-gray-700 dark:text-gray-400">${video.authors[0]?.verified ? (`<img src="img/verified.svg">`) : ""}</p>
      
      </div >


  <p class="ml-14">${video.others.views}</p>
    </div >
  </div >
  `;
    cardContainer.appendChild(div);
  })
}

handleCardVideo('1000')


// Blog button
const blogButton = document.getElementById('blogButton');

blogButton.addEventListener('click', () => {
  const blogUrl = 'blog.html';
  window.open(blogUrl, '_blank');
});

