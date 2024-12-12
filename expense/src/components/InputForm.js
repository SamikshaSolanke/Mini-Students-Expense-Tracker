import React, { useState } from 'react';

const InputForm = ({ addExpense }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [category, setCategory] = useState('Food & Drink');

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            date,
            category,
        });
        setDescription('');
        setAmount('');
        setDate(new Date().toISOString().split('T')[0]);
        setCategory('Food & Drink');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-2">
                    <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group">
                <select
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Food & Drink</option>
                    <option>Accommodation</option>
                    <option>Entertainment</option>
                    <option>Stationery</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{color: '#000000', fontFamily: 'Times New Roman' }}>Add Expense</button>
        </form>
    );
};

export default InputForm;
