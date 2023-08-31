//video category function
const loadVideoCategory = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await response.json();
  const videoData = data.data;
  console.log(videoData);

  const videoCategoryContainer = document.getElementById('videoCategoryContainer');

  videoData.forEach((category) => {
    console.log(category.category);
    const div = document.createElement('div');
    div.innerHTML = `
    
    <a href="#"
    class="px-4 ml-5 py-2 bg-[#25252533] hover:text-white hover:bg-[#FF1F3D]  focus:ring-4 focus:ring-blue-300 rounded-md active focus:outline-none dark:bg-gray-700 dark:text-white"
    aria-current="page">${category.category}</a>
    
    
    `;

    videoCategoryContainer.appendChild(div);
  })
}

//calling the function
loadVideoCategory();


//video category related data card function
