const income = document.getElementById('income');
const couseIncome = document.getElementById('in-resource');
const incomeBtn = document.getElementById('in-btn');
const incomeHistory = document.getElementById('in-history');

const expenses = document.getElementById('expenses');
const couseExpenses = document.getElementById('ex-resource');
const expensesBtn = document.getElementById('ex-btn');
const expensesHistory = document.getElementById('ex-history')

const totalIncome = document.getElementById('tl-income');
const totalExpenses = document.getElementById('tl-expenses')
const balans = document.getElementById('balans');

let sumIncome = 0;
let sumExpenses = 0;
let sum = 0;


incomeBtn.addEventListener('click', () => {
    if (income.value.length != 0) {
        const li = document.createElement('li');
        const text = document.createElement('p');
        const removeItem = document.createElement('button');
    
        const msg = `${income.value} ${couseIncome.value}`;
        sumIncome += Number(income.value);
        sum += Number(income.value);
    
        li.classList.add('row');
        text.classList.add('text');
        removeItem.classList.add('delete-btn');
    
        text.textContent = msg;
        removeItem.textContent = "X";
        totalIncome.innerText = sumIncome;
        balans.innerText = sum;
    
        li.appendChild(text);
        li.appendChild(removeItem);
        incomeHistory.appendChild(li);
        
        income.value = "";
        couseIncome.value = "";

        removeItem.addEventListener('click',() => {
            removeItem.parentElement.remove();
        })
    }
})

expensesBtn.addEventListener('click', () => {
    if (expenses.value.length != 0) {
        const li = document.createElement('li');
        const text = document.createElement('p');
        const removeItem = document.createElement('button');
    
        const msg = `${expenses.value} ${couseExpenses.value}`;
        sumExpenses += Number(expenses.value);
        sum -= Number(expenses.value);
    
        li.classList.add('row');
        text.classList.add('text');
        removeItem.classList.add('delete-btn');
    
        text.textContent = msg;
        removeItem.textContent = "X";
        totalExpenses.innerText = sumExpenses;
        balans.innerText = sum;
    
        li.appendChild(text);
        li.appendChild(removeItem);
        expensesHistory.appendChild(li);
        
        expenses.value = "";
        couseExpenses.value = "";

        removeItem.addEventListener('click',() => {
            removeItem.parentElement.remove();
        })
    }
})

