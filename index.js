var money = prompt("Ваш бюджет на месяц?", ""),
    timeData = prompt("Введите дату в формате YYYY-MM-DD", "");

var exp1  = prompt("Введите обязательную статью расходов в этом месяце", ""),
    exp2 = prompt("Во сколько обойдется?", "");

var appData = {
     money : "",
     timeData : "",
     expenses : {exp1 : exp2},
     optionalExpenses : {},
     income : [],
     savings : false

}; 
alert (+money / 30);  