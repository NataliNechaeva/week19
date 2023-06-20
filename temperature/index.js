let cities = ["Москва", "Санкт-Петербург", "Тюмень"];
let temperatures = [];
for(let i=0; i<cities.length; i++) 
{
    temperatures[i] = prompt('Введите температуру для города ' + cities[i]);
}

for (let i=0; i<cities.length; i++) {
document.write("Температура в "+`${cities[i]}`+" "+`${temperatures[i]}`+"С"+"<br>")
}


let max_val = Math.max(...temperatures);
let min_val = Math.min(...temperatures);


let myDiv1 = document.getElementById("myDiv1");
myDiv1.innerHTML = "Максимальная температура "+`${max_val}`+"С"+"<br>" + "Минимальная температура "+`${min_val}`+"С"+"<br>";