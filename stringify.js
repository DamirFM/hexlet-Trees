// @ts-check

// BEGIN (write your solution here)
const stringify = (value, replacer =' ', spacesCount = 1) => {

    //Далее будет проверка если value явлется object. Надо его пройти вглубь с 
    //промощью рекурсий 
    const depth = (currentValue, counter) => {
      //Примитивная проверка на то, что value не является object, в данном случае
      //проверка на null необходима, так как null при провеке тоже явлеется object
      if (typeof currentValue !== 'object' || currentValue === null) {
        //Конвертация в строку через метод String, а не через tostring
        //является более читабельной и мы должны это выделить
        return String(currentValue)
        //это терминальное условие, дальше нам погружаться не надо
        //дальше будем работать только с object, так как будето совершен выход из этой функции
        //мы проверили value и на string, number, boolean
      }
      //Теперь нам надо работать с currentValue и мы преобразуем его в массив, что бы пробежаться по нему
      const array = Object.entries(currentValue);
      //Теперь пары надо преобразовать в строку, где будет ключ и значение
      //через map мы может деструктуризировать каждый массив
    }
    return depth;
  }
  // END
  