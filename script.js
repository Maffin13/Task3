var first = +prompt(' Введите первое число ')

var second = +prompt(' Введите второе число ')

var third = +prompt(' Введите третье число ')


if(first > third && first < second || first > second && first < third) {
    alert( first + ' среднее число')
}else if(second > first && second < third || second < first && second > third){
    alert( second + ' среднее число')
}else if(third > first && third < second || third < first && third > second){
    alert( third + ' среднее число')
}else {
    alert('Вы ввели не цифру')
}





