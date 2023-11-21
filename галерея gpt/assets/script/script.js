
// Список изображений и текущий индекс
const images = [
	"./assets/imgs/work_and_travel-lake.webp", 
	"./assets/imgs/work_and_travel-sea.webp", 
	"./assets/imgs/work_and_travel-mountain.webp",  
	"./assets/imgs/work_and_travel-forest.webp"
];

let currentImageIndex = 0;
const imageElement = document.getElementById("image");

// Функция для отображения текущего изображения
function displayCurrentImage() {
	imageElement.src = images[currentImageIndex];
}
const prevButton = document.getElementById("prevButton");

// Обработчик события для кнопки "Назад"
prevButton.addEventListener("click", function() {
	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	displayCurrentImage();
});
const nextButton = document.getElementById("nextButton");

// Обработчик события для кнопки "Вперед"
nextButton.addEventListener("click", function() {
	currentImageIndex = (currentImageIndex + 1) % images.length;
	displayCurrentImage();
});

// Отображаем первое изображение при загрузке страницы
displayCurrentImage();