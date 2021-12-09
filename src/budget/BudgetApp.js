import Footer from "../Footer";
import Budget from "./Budget";
import Remaining from "./Remaining";
import Spent from "./Spent";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import { AppProvider } from "./Content/AppContext";
const BudgetApp = ({ handleReturn }) => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Budget Manage Application</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>
        <h1 className="mt-3">Expenses</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h1 className="mt-3">Add Expense</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
        <Footer handleReturn={handleReturn} />
      </div>
    </AppProvider>
  );
};

export default BudgetApp;
