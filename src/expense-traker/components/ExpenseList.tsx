import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <th>No.</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </thead>
        <tbody>
          {expenses.map((e, index) => (
            <tr key={e.id}>
              <td>{index + 1}</td>
              <td>{e.description}</td>
              <td>{e.amount}</td>
              <td>{e.category}</td>
              <td>
                <button
                  onClick={() => onDelete(e.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total : </td>
            <td className="text-danger">
              $
              {expenses
                .reduce((acc, expenses) => expenses.amount + acc, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
