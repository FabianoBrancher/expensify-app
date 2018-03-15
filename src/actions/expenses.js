import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// WITH ASYNCHRONOUS REDUX ACTIONS
// component calls action generator
// action generator returns FUNCTION
// component dispatches FUNCTION (?) - we need to install module to be able to dispatch functions
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE ACTION GENERATOR
// export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
export const addExpense = (expense) => ({    
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        
        return database.ref('expenses').push(expense).then((ref)=> {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ( { id: id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});