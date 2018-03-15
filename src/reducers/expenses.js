import expenses from "../tests/fixtures/expenses";

// EXPENSES REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            // return state.filter(( { id } ) => {
            //     return id !== action.id;
            // });
            // Metodo antigo ES5 utilizando callback function
            // return state.filter(function ({id}) {
            //     return id !== action.id;
            // });
             return state.filter(( { id } )=>  id !== action.id );
            // if the function filter returns true the item will be kept in the array
            // if returns false it will remove from the array.
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        case 'SET_EXPENSES': 
            return action.expenses;
        default:
            return state;
    }
};

export default expensesReducer;