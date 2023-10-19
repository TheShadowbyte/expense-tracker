import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    // return a form
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}

export default NewExpense;