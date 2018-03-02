import moment from 'moment';

// GET VISIBLE EXPENSES
// const getVisibleExpenses = (expenses, filters) => {
    const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
        return expenses.filter((expense) => {
            const createdAtMoment = moment(expense.createdAt);

            // Aqui as datas eram em números e por isso faziamos comparações apenas com os operadores
            // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            // const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;

            // Nova forma de comparação das datas utilizando a biblioteca moment
            const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
            const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
            
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    
            return startDateMatch && endDateMatch && textMatch;
        }).sort((a, b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1 //b comes first in the list
            }
        });
    };

    export default getVisibleExpenses;