
const incomeForm = document.getElementById('form-income');
const expensesForm = document.getElementById('form-expenses');

const incomeHistory = document.getElementById('in-history');
const expensesHistory = document.getElementById('ex-history')

const totalIncome = document.getElementById('tl-income');
const totalExpenses = document.getElementById('tl-expenses')
const balans = document.getElementById('balans');

let sumIncome = 0;
let sumExpenses = 0;
let sum = 0;


let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];

displayHistory()

incomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    history.push({
        id: Math.floor(Math.random()* 1000),
        amount: e.target.income.value,
        msg: e.target.inresource.value,
        type: 'income'
    })

    localStorage.setItem('history', JSON.stringify(history));

    sumIncome += Number(e.target.income.value);
    sum += Number(e.target.income.value);
   
    totalIncome.innerText = sumIncome;
    balans.innerText = sum;

    sizeBalanceWrap(String(sum));
    displayHistory()
    
    e.target.income.value = "";
    e.target.inresource.value = "";
 
})

expensesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    history.push({
        id: Math.floor(Math.random()* 1000),
        amount: e.target.expenses.value,
        msg: e.target.exresource.value,
        type: 'expenses'
    })

    localStorage.setItem('history', JSON.stringify(history));

    sumExpenses += Number(expenses.value);
    sum -= Number(expenses.value);

    totalExpenses.innerText = sumExpenses;
    balans.innerText = sum;

    sizeBalanceWrap(String(sum));
    displayHistory()
    
    e.target.expenses.value = "";
    e.target.exresource.value = "";

})

function displayHistory() {
        incomeHistory.textContent = ""
        expensesHistory.textContent = ""

    for (let i = 0; i < history.length; i++) {
        const element = history[i];
        const msg = `${element.amount}$ - ${element.msg}`;
        const li = document.createElement('li');
        const text = document.createElement('p');
        const removeItem = document.createElement('button');

        li.classList.add('row');
        text.classList.add('text');
        removeItem.classList.add('delete-btn');
        removeItem.id = element.id;
    
        text.textContent = msg;
        removeItem.textContent = "X";

        li.appendChild(text);
        li.appendChild(removeItem);

        if (element.type == 'income') {
            incomeHistory.appendChild(li);
        } else {
            expensesHistory.appendChild(li);
        }

        removeItem.addEventListener('click',(e) => {
            history = history.filter(it => it.id != removeItem.id);
            localStorage.setItem('history', JSON.stringify(history));
           
            displayHistory();
        })
    }
}



// function displayHistory(arr, flag) {
    
//     if (flag == 'income') {
//         incomeHistory.textContent = ""
//     } else {
//         expensesHistory.textContent = ""
//     }
    
//     for (let i = 0; i < arr.length; i++) {
//         // console.log('log', arr[i]);
//         const msg = `${arr[i].amount}$ - ${arr[i].msg}`;
//         const li = document.createElement('li');
//         const text = document.createElement('p');
//         const removeItem = document.createElement('button');

//         li.classList.add('row');
//         text.classList.add('text');
//         removeItem.classList.add('delete-btn');
//         removeItem.id = arr[i].id;
    
//         text.textContent = msg;
//         removeItem.textContent = "X";

//         li.appendChild(text);
//         li.appendChild(removeItem);

//         if (flag == 'income') {
//             incomeHistory.appendChild(li);
//         } else {
//             expensesHistory.appendChild(li);
//         }

//         removeItem.addEventListener('click',(e) => {
//             // console.log('remove', removeItem.id);
//             // console.log('before', arr);
//             arr = arr.filter(it => it.id != removeItem.id);

//             // arr = arr.filter(el => el != removeItem.previousElementSibling.textContent)
//             // console.log('after', arr);
//             displayHistory(arr, flag)
//             // removeItem.parentElement.remove();
//         })
//     }
// }

function sizeBalanceWrap(val) {
    if( val.length >= 4) {
        balans.style.fontSize = '3em';
    }
}



// let h = [
    //     {
    //         id: Math.floor(Math.random()* 1000),
    //         amound: 0,
    //         msg: '',
    //         type: "income"
    //     },
    
    //     {
    //         id: Math.floor(Math.random()* 1000),
    //         amound: 0,
    //         msg: '',
    //         type: "expenses"
    //     }
    // ]
