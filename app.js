// const incomeForm = document.getElementById('form-income');
// const expensesForm = document.getElementById('form-expenses');

// const incomeHistory = document.getElementById('in-history');
// const expensesHistory = document.getElementById('ex-history')

// const totalIncome = document.getElementById('tl-income');
// const totalExpenses = document.getElementById('tl-expenses')
// const balans = document.getElementById('balans');

// let sumIncome = 0;
// let sumExpenses = 0;
// let sum = 0;

// let historyIncomes = [];
// let historyExpenses = [];


// incomeForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     historyIncomes.push( `${e.target.income.value} $ - ${e.target.inresource.value}`);

//     sumIncome += Number(e.target.income.value);
//     sum += Number(e.target.income.value);
   
//     totalIncome.innerText = sumIncome;
//     balans.innerText = sum;

//     sizeBalanceWrap(String(sum));
//     displayHistory(historyIncomes, 'income')
    
//     e.target.income.value = "";
//     e.target.inresource.value = "";
 
// })

// // expensesForm.addEventListener('submit', (e) => {
// //     e.preventDefault();

// //     historyExpenses.push( `${e.target.expenses.value} ${e.target.exresource.value}`);

// //     sumExpenses += Number(expenses.value);
// //     sum -= Number(expenses.value);

// //     totalExpenses.innerText = sumExpenses;
// //     balans.innerText = sum;

// //     sizeBalanceWrap(String(sum));
// //     displayHistory(historyExpenses, 'expenses')
    
// //     e.target.expenses.value = "";
// //     e.target.exresource.value = "";

// // })


// function displayHistory(arr, flag) {
    
//     if (flag == 'income') {
//         incomeHistory.textContent = ""
//     } else {
//         expensesHistory.textContent = ""
//     }
    
//     for (let i = 0; i < arr.length; i++) {
//         const msg = arr[i];
//         const li = document.createElement('li');
//         const text = document.createElement('p');
//         const removeItem = document.createElement('button');

//         li.classList.add('row');
//         text.classList.add('text');
//         removeItem.classList.add('delete-btn');
    
//         text.textContent = msg;
//         removeItem.textContent = "X";

//         li.appendChild(text);
//         li.appendChild(removeItem);

//         if (flag == 'income') {
//             incomeHistory.appendChild(li);
//         } else {
//             expensesHistory.appendChild(li);
//         }

//         removeItem.addEventListener('click',() => {
//             // console.log(removeItem.previousElementSibling.textContent);
//             arr = arr.filter(el => el != removeItem.previousElementSibling.textContent)
//             // console.log('after', arr);
//             displayHistory(arr, flag)
//             // removeItem.parentElement.remove();
//         })
//     }
// }

// function sizeBalanceWrap(val) {
//     if( val.length >= 4) {
//         balans.style.fontSize = '3em';
//     }
// }
