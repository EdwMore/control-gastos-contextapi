import type { Category, DraftExpense, Expense } from "../types";
import { v4 } from "uuid";

export type BudgetActions =
  | { type: "add-budget"; payload: { budget: number } }
  | { type: "modal"; payload: { show_close: boolean } }
  | { type: "add-expense"; payload: { expense: DraftExpense } }
  | { type: "remove-expense"; payload: { id: Expense["id"] } }
  | { type: "get-expense-id"; payload: { id: Expense["id"] } }
  | { type: "update-expense"; payload: { expense: Expense } }
  | { type: "reset-app" }
  | { type: "filter-by-category"; payload: { id: Category["id"] } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingId: Expense["id"];
  category: Category["id"];
};

const localStorageExpenses = (): Expense[] => {
  const expenses = localStorage.getItem("expenses");
  return expenses ? JSON.parse(expenses) : [];
};

const localStorageBudge = (): number => {
  const budge = localStorage.getItem("budge");
  return budge ? +budge : 0;
};

export const initialState: BudgetState = {
  budget: localStorageBudge(),
  modal: false,
  expenses: localStorageExpenses(),
  editingId: "",
  category: "",
};

const createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense,
    id: v4(),
  };
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions,
) => {
  if (action.type === "add-budget") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }

  if (action.type === "modal") {
    return {
      ...state,
      modal: action.payload.show_close,
      editingId: "",
    };
  }

  if (action.type === "add-expense") {
    const expense = createExpense(action.payload.expense);

    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false,
    };
  }

  if (action.type === "remove-expense") {
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload.id,
      ),
    };
  }

  if (action.type === "get-expense-id") {
    return {
      ...state,
      editingId: action.payload.id,
      modal: true,
    };
  }

  if (action.type === "update-expense") {
    return {
      ...state,
      expenses: state.expenses.map((expense) =>
        expense.id === action.payload.expense.id
          ? action.payload.expense
          : expense,
      ),
      editingId: "",
      modal: false,
    };
  }

  if (action.type === "reset-app") {
    return {
      ...state,
      budget: 0,
      expenses: [],
    };
  }

  if (action.type === "filter-by-category") {
    return {
      ...state,
      category: action.payload.id,
    };
  }

  return state;
};
