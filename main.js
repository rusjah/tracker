
const incomeForm = document.getElementById('form-income');
const expensesForm = document.getElementById('form-expenses');

const incomeHistory = document.getElementById('in-history');
const expensesHistory = document.getElementById('ex-history')

const totalIncome = document.getElementById('tl-income');
const totalExpenses = document.getElementById('tl-expenses')
const balans = document.getElementById('balans');

let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : { sumIncome: 0, sumExpenses: 0,sum: 0
}

// localStorage.clear()


let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];

displayHistory(history, 'history')
totalIncome.innerText = data.sumIncome;
totalExpenses.innerText = data.sumExpenses;
balans.innerText = data.sum;

incomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    history.push({
        id: Math.floor(Math.random()* 1000),
        amount: e.target.income.value,
        msg: e.target.inresource.value,
        type: 'income'
    })

    localStorage.setItem('history', JSON.stringify(history));

    // data  = JSON.parse(localStorage.getItem('data'));
    data.sumIncome += Number(e.target.income.value);
    data.sum += Number(e.target.income.value);
    localStorage.setItem('data', JSON.stringify(data));

   
    totalIncome.innerText = data.sumIncome;
    balans.innerText = data.sum;

    sizeBalanceWrap(String(data.sum));
    displayHistory(history, 'history')
    
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

    // data  = JSON.parse(localStorage.getItem('data'));
    data.sumExpenses += Number(expenses.value);
    data.sum -= Number(expenses.value);
    localStorage.setItem('data', JSON.stringify(data));


    totalExpenses.innerText = data.sumExpenses;
    balans.innerText = data.sum;

    sizeBalanceWrap(String(data.sum));
    displayHistory(history, 'history')
    
    e.target.expenses.value = "";
    e.target.exresource.value = "";

})

function displayHistory(arr, nameArr) {
    incomeHistory.textContent = ""
    expensesHistory.textContent = ""

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
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
            arr = arr.filter(it => it.id != removeItem.id);
            localStorage.setItem(nameArr, JSON.stringify(arr));
        
            displayHistory(arr, nameArr);
        })
    }
}

function sizeBalanceWrap(val) {
    if( val.length >= 4) {
        balans.style.fontSize = '3em';
    }
}
