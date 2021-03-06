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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=> {
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

export const startRemoveExpense = ( { id: id } = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
     return (dispatch, getState) => {
         const uid = getState().auth.uid;
         return database.ref(`users/${uid}/expenses`)
            .once('value')
            .then((snapshot) => {
                const expensesArray = [];
                snapshot.forEach((childSnapshot) => {
                    expensesArray.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpenses(expensesArray));    
            });
     };
};

export const clearLocalExpenses = () => ({
    type: 'CLEAR_EXPENSES'
});