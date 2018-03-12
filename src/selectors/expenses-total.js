// const selectExpensesTotal = (expenses) => {
//     let total = 0;
//     for (let i=0 ; i < expenses.length ; i++) {
//         total += expenses[i].amount;
//     }
//     return total;
// };

// const selectExpensesTotal = (expenses) => {
//     let total = 0;
//     expenses.map((expense) => {
//         total += expense.amount
//     });
//     return total;
// };

// const selectExpensesTotal = (expenses) => {
//     if (expenses.length === 0) {
//         return 0;
//     } else {
//         return expenses
//             .map((expense) => expense.amount)
//             .reduce((sum, value) => sum + value, 0);
//     }
// };

const selectExpensesTotal = (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};

export default selectExpensesTotal;