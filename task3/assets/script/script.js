//переменные
const image1 = "./assets/imgs/work_and_travel-forest.webp";
const image2 = "./assets/imgs/work_and_travel-sea.webp";

//элементы DOM дерева
const image = document.getElementById('image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

//текущая картинка
let currentImage = image1;

//изменение изображения вперед
function changeImage() {
	image.src = image2;
}

//нажатие на кнопку вперед
nextButton.addEventListener('click', ()=>{
	currentImage = image2;
	changeImage();
});

//изменение изображения назад
function returnImage() {
	image.src = image1;
}

//нажатие на кнопку назад
prevButton.addEventListener('click', ()=>{
	currentImage = image1;
	returnImage();
});

