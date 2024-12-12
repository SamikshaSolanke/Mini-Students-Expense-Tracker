import React from 'react';

const ExpenseSummary = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    
    return (
        <div className="mt-4">
            <h3 style={{color: '#000000', fontFamily: 'Times New Roman' }}>Total Expenses: ₹{total.toFixed(2)}</h3>
        </div>
    );
};

export default ExpenseSummary;
