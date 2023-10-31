import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const listOfYears = ['All', '2023', '2022', '2021', '2020', '2019'];

    const dropdownChangeHandler = (event) => {
        props.onFilterExpenses(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {listOfYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;