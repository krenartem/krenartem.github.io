// let name = "Привет, мир!";
// console.log(name);

// let a = 158;
// let b = 2;
// sum = a + b;
// alert('Результат: ' + sum);

// // Индекс Массы Тела
// let weight = prompt('Какой ваш вес?');
// weight = parseFloat(weight)
// let height = prompt('Какой ваш рост в см.?');
// height = parseFloat(height/100)
// imt = weight/height/height

// if (imt <= 16) {
//     alert('ИМТ = ' + imt + '. Выраженный дефицит массы тела');
//     } else {
//     if (imt > 16 && imt <= 18.5) {
//         alert('ИМТ = ' + imt + '. Недостточная масса тела');
//     } else {
//         if (imt > 18.5 && imt < 25) {
//             alert('ИМТ = ' + imt + '. Норма');
//         } else {
//             if (imt >= 25 && imt < 30) {
//                 alert('ИМТ = ' + imt + '. Предожирение');
//             } else {
//                 if (imt >= 30 && imt < 35) {
//                     alert('ИМТ = ' + imt + '. Ожирение первой степени');
//                 } else {
//                     if (imt >= 35 && imt < 40) {
//                         alert('ИМТ = ' + imt + '. Ожирение второй степени');
//                     } else {
//                         alert('ИМТ = ' + imt + '. Ожирение третьей степени');
//                     }
//                 }
//             }
//         }
//     }
// }

function hello() {
    let name = document.getElementById("nameElement").value;
    document.getElementById('result').innerText = 'Привет, ' + name;
    document.getElementById('nameElement').value = '';
    return name
}