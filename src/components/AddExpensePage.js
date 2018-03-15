import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// este export é para fazer o teste com ele desconectado
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render () {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubmit: (expense) => {
//             dispatch(addExpense(expense));
//         };
//     };
// };

const mapDispatchToProps = (dispatch) => ({ 
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
//  primeira função do connect é mapToStates