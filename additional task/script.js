
function calculateTotalPrice(quantity = 2, price = 15000000) {
	const sum = quantity * price;
	return sum.toLocaleString('ru-RU');
}

alert("Стоимость покупки: " + calculateTotalPrice() + " рублей");

const button = document.querySelector('.button');
const total = document.querySelector('.total');

button.addEventListener('click', () => {
	total.textContent = ("Стоимость покупки: " + calculateTotalPrice() + " рублей"); 
	});