import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseGraph from './components/ExpenseGraph';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './b3.jpeg';

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    return (
        <div 
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh', 
                width: '100vw',  
                overflow: 'auto', 
            }}
        >
            <h1 className="mt-4" style={{ fontSize: '80px', color: '#ffffff', fontFamily: 'Times New Roman' }}>
                Student Expense Tracker🤑
            </h1>
            <br />
            <InputForm addExpense={addExpense} />
            <br />
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
            <ExpenseSummary expenses={expenses} />
            <ExpenseGraph expenses={expenses} />
        </div>
    );
};

export default App;

