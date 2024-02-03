// knopka.onclick = function () {
//     let firstName = prompt('познакомимся?Как вас зовут?');
//     if (firstName) {
//         alert("добро пожаловать!" + firstName)
//     }
//     else {
//         alert("познакомимся в другой раз :(")
//     }
// };

// knopkaq.onclick = function () {
//     let input = 0;
//     let random = Math.floor(Math.random() * 10);
//     while (input = prompt('угадай число! от 0 до 9')) {
//         if (isNaN(input)) {
//             alert('введите чило!');
//         }
//         else if (input > random) {
//             alert('введите число меньше!');
//         }
//         else if (input < random) {
//             alert('ввведите число больше!');
//         } else if (input == random) {
//             alert('ты угадал!')
//         }
//     }
// };

// let age = prompt('Укажите свой возраст');


// let ageNormalized = Number(age);
// if (ageNormalized >= 18) {
//     alert('добро пожаловать')
// } else {
//     ageNormalized < 18
//     alert('Ты не пройдёшь!')
// };

// c3.onclick = function () {

//     let a;
//     while (a = prompt('какой сейчас год?')) {
//         if (a == 2023) {
//             let b = prompt('уверены?')
//             if (b == 'да') {
//                 alert('верно')
//             }
//         }
//         else if (a < 2023) {
//             alert('похоже вы в прошлом!')
//         }

//         else if (a > 2023) {
//             alert('похоже вы в будущем!')
//         }

//         else {
//             alert('я не понял')
//         }
//     }
// }


// for (let i = 0; i < 10; i++) {
//     alert(i);
// }

// let bal = prompt('сколько баллов получил?')
// if (bal > 90) alert('похоже это 5!')
// else if (bal <= 90 && bal >= 70) alert('вы получили 4')
// else if (bal == 4 || bal == 5) alert('круто!')
// else if (bal < 70 && bal >= 50) alert('это 3')
// else if (bal < 50) alert('похоже это 2!')


// const ans = ['учите js', 'повтори html', 'йййй']

// while (confirm('хотите получить предсказание?')) {
//     let rand = Math.floor(Math.random() * ans.length)
//     alert(ans[rand])
// }


// let username = prompt('как вас зовут?');
// function showmessege() {
//     alert('привет,' + username)
// }
// showmessege();

// function showMessege2(text) {
//     alert(username + ',' + text)
//     if (text == 'как дела?') {
//         let answer = promt(text)
//     }
//     else {
//         alert(text)
//     }
// }
// showMessege2('как дела?')
// showMessege2('отлично!')

function getDays(day) {
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    if (day > 0 && day <= 7) {
        alert('это' + days[day - 1])
    }
    else {
        alert('не корректно!')
    }
}
getDays(prompt('какой день недели вас интересует?'))

function three(a, b, c){
    if (arguments.length == arguments.callee.length){
        return a + b + c;
    }
    else{
        return 'не хватает аргументов'
    } 
}
alert(three(10, 12 ))
alert(three(10, 10, 2))