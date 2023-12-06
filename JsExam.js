// Q.No=1

//     let fruits =['apple','banana','mango','orange','strawbery']

//     for (let i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]);
        
        
//     }




// Q.No=2
 
// let items =['cake','apple pie','cookie','chips','patties'];
// let userInput = prompt ('Search')
//  for (let i = 0; i < items.length; i++) {
    //   if(userInput===items[i]){
        //     console.log(`${userInput} is avaible in our bakry`);
        //     break
        //   }else{
            //     console.log(`We are sorry .${userInput} is not avaible in our bekry`)   ;
//   }

//  }




// Q.No=3
//  var userInput = prompt("enter value")
//  var array = [12,45,3,22,34,50];

// function printNumbers(array, stopValue) {
//     stopValue = Math.min(stopValue, array.length);
 
//     for (let i = 0; i < stopValue; i++) {
//         console.log(array[i]);
//     }
//  }
 
 
//  printNumbers(array, userInput);




// Q.No=4

// let srt = '*****'
//  for (let i = 0; i <= srt.length; i++) {
//    console.log(srt);
// if(true){
//     console.log(`${srt}`);
// }else{
//     console.log('sorry');
// }

// }



//Q.no.5

// let num1 = +prompt("Enter first No.")
// let operator = prompt('operator')
// let num2 = +prompt("Enter secound No.")

//  function sum() {
// if (operator === '-') {
//     console.log(num1 - num2) ;
// }else if(operator==='*' ){
// console.log(num1 * num2);
// }else if(operator==='/'){
//     console.log(num1 / num2);
// }else if(operator=== '+'){
//     console.log(num1 + num2);
// }else{
//     console.log('Error');
// }

// }
// sum()



//Q.no.6

//  let str = prompt('enter any string');

//  function palindrome (str){
//      console.log(str.split('').reverse().join(''));
//     //  if(str.split('').reverse().join('') === str){
//     //      console.log('this is palindrome');
//     //  }else{
//     //      console.log('chalo shaba katto');
//     //  }

//  }
// palindrome(str)


//Q.No.7

// function celsiusToFahrenheit() {
//     let c = -40
//     let f = (c * 9 / 5) + 32
//     console.log(`${c}°C is ${f}°F`);
// }

// celsiusToFahrenheit()

// function FahrenheitToCelsius() {
//     let c = -40
//     let f = (c * 9 / 5) + 32
//     console.log(`${c}°F is ${f}°C`);
// }

// FahrenheitToCelsius()


//Q.No.8



// const books = [
//     { title: "book1", author: "author1", price: 20 },
//     { title: "book2", author: "author2", price: 30 },
//     { title: "book3", author: "author3", price: 25 },
//     { title: "book4", author: "author4", price: 15 },
//   ];
  
//   function filterBooks(bookArray, maxPrice) {
//     const affordableBooks = [];
  
//     for (const book of bookArray) {
//       if (book.price <= maxPrice) {
//         affordableBooks.push(book);
//       }
//     }
  
//     return affordableBooks;
//   }
  
//   const maxPrice = 25;
//   const affordableBooks = filterBooks(books, maxPrice);
  
//   if (affordableBooks.length > 0) {
//     console.log(`Books with prices less than or equal to ${maxPrice}:`);
//     console.log(affordableBooks);
//   } else {
//     console.log(`No books found with prices less than or equal to ${maxPrice}`);
//   }


