// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const ExpenseGraph = ({ expenses }) => {
//     // Helper function to calculate weekly spending
//     const calculateWeeklySpending = () => {
//         const categories = ['Food & Drink', 'Accommodation', 'Entertainment', 'Stationery'];
//         const weeklyData = Array(categories.length).fill(0);

//         expenses.forEach((expense) => {
//             const categoryIndex = categories.indexOf(expense.category);
//             if (categoryIndex !== -1) {
//                 weeklyData[categoryIndex] += expense.amount;
//             }
//         });

//         return {
//             labels: categories,
//             datasets: [
//                 {
//                     data: weeklyData,
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.6)',
//                         'rgba(54, 162, 235, 0.6)',
//                         'rgba(255, 206, 86, 0.6)',
//                         'rgba(75, 192, 192, 0.6)',
//                     ],
//                     hoverBackgroundColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                     ],
//                 },
//             ],
//         };
//     };

//     // Helper function to calculate monthly spending
//     const calculateMonthlySpending = () => {
//         const categories = ['Food & Drink', 'Accommodation', 'Entertainment', 'Stationery'];
//         const monthlyData = Array(categories.length).fill(0);

//         expenses.forEach((expense) => {
//             const categoryIndex = categories.indexOf(expense.category);
//             if (categoryIndex !== -1) {
//                 monthlyData[categoryIndex] += expense.amount;
//             }
//         });

//         return {
//             labels: categories,
//             datasets: [
//                 {
//                     data: monthlyData,
//                     backgroundColor: [
//                         'rgba(255, 159, 64, 0.6)',
//                         'rgba(153, 102, 255, 0.6)',
//                         'rgba(255, 205, 86, 0.6)',
//                         'rgba(75, 192, 192, 0.6)',
//                     ],
//                     hoverBackgroundColor: [
//                         'rgba(255, 159, 64, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 205, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                     ],
//                 },
//             ],
//         };
//     };

//     // Check for expenses
//     if (!expenses || expenses.length === 0) {
//         return <div>No expenses recorded.</div>;
//     }

//     // Log expenses for debugging
//     console.log(expenses);

//     const pieChartOptions = {
//         responsive: true,
//         maintainAspectRatio: false, // Allow flexible size
//     };

//     return (
//         <div className="mt-4">
//             <h3 style={{ color: '#ffffff', fontFamily: 'Times New Roman' }}>Weekly Spending by Category</h3>
//             <div style={{ height: '500px' }}> {/* Set a specific height for the chart container */}
//                 <Pie data={calculateWeeklySpending()} options={pieChartOptions} />
//             </div>

//             <h3 className="mt-4" style={{ color: '#ffffff', fontFamily: 'Times New Roman' }}>Monthly Spending by Category</h3>
//             <div style={{ height: '500px' }}> {/* Set a specific height for the chart container */}
//                 <Pie data={calculateMonthlySpending()} options={pieChartOptions} />
//             </div>
//         </div>
//     );
// };

// export default ExpenseGraph;

import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import moment from 'moment'; // Make sure to install moment.js

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseGraph = ({ expenses }) => {
    // Helper function to calculate weekly spending
    const calculateWeeklySpending = () => {
        const categories = ['Food & Drink', 'Accommodation', 'Entertainment', 'Stationery'];
        const weeklyData = Array(categories.length).fill(0);

        // Get the start of the current week
        const startOfWeek = moment().startOf('week');

        expenses.forEach((expense) => {
            const expenseDate = moment(expense.date); // Assume each expense has a date property
            const categoryIndex = categories.indexOf(expense.category);
            if (categoryIndex !== -1 && expenseDate.isSame(startOfWeek, 'week')) {
                weeklyData[categoryIndex] += expense.amount;
            }
        });

        return {
            labels: categories,
            datasets: [
                {
                    data: weeklyData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                },
            ],
        };
    };

    // Helper function to calculate monthly spending
    const calculateMonthlySpending = () => {
        const categories = ['Food & Drink', 'Accommodation', 'Entertainment', 'Stationery'];
        const monthlyData = Array(categories.length).fill(0);

        // Get the start of the current month
        const startOfMonth = moment().startOf('month');

        expenses.forEach((expense) => {
            const expenseDate = moment(expense.date);
            const categoryIndex = categories.indexOf(expense.category);
            if (categoryIndex !== -1 && expenseDate.isSame(startOfMonth, 'month')) {
                monthlyData[categoryIndex] += expense.amount;
            }
        });

        return {
            labels: categories,
            datasets: [
                {
                    data: monthlyData,
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 205, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 159, 64, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                },
            ],
        };
    };

    // Check for expenses
    if (!expenses || expenses.length === 0) {
        return <div>No expenses recorded.</div>;
    }

    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Allow flexible size
    };

    return (
        <div className="mt-4">
            <h3 style={{ color: '#000000', fontFamily: 'Times New Roman' }}>Weekly Spending by Category</h3>
            <div style={{ height: '500px' }}>
                <Pie data={calculateWeeklySpending()} options={pieChartOptions} />
            </div>

            <h3 className="mt-4" style={{ color: '#000000', fontFamily: 'Times New Roman' }}>Monthly Spending by Category</h3>
            <div style={{ height: '500px' }}>
                <Pie data={calculateMonthlySpending()} options={pieChartOptions} />
            </div>
        </div>
    );
};

export default ExpenseGraph;
