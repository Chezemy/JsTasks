/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */


const firstName = "Paul";
const lastName = "Panyushkin";
const profession = "Software engineer";

const sentence1 = "My name is " + firstName + " " + lastName + " and I am a " + profession;
console.log(sentence1);

const sentence2 = `My name is ${firstName} ${lastName} and I am a ${profession}`;
console.log(sentence2);