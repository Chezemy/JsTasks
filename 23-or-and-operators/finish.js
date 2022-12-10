/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)
//          3 or (true and false) or false)
//          3 or false or false
//          3, т.к. это первое истинное значение в цепочке операторов or
