import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.date}</td>
                        <td>{expense.category}</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteExpense(expense.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
