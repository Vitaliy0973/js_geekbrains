// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function count(number) {

    let dict = {}

    if (number > 999 || number < 0) {
        console.log('Задайте число в приделах 0-999');
    } else if (number) {
        dict['units'] = number % 10;
        if (number > 10) {
            dict['dozens'] = (number % 100 - dict['units']) / 10
            if (number > 100) {
                dict['hundreds'] = (number - number % 100) / 100
            }
        }
    }

    return dict
}

var x = 759;

console.log(count(x));



// 2. Продолжить работу с интернет-магазином:
//  a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//  b. Реализуйте такие объекты.
//  c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

function countBasketPrice(array) {
    for (i = 0, y = 0; i < array.length; i++) {
        y += array[i].price;
    }
    return y;
}

var basket = [{ name: 'phone', price: 300 }, { name: 'laptop', price: 657 }, { name: 'pen', price: 33 }, { name: 'shoes', price: 78 }, { name: 'picture', price: 42 }];

console.log(countBasketPrice(basket));