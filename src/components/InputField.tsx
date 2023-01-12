import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form onSubmit={handleAdd}>
      <div className="shadow rounded-lg bg-gray-50 flex flex-row justify-center py-4">
        <div>
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            id="todo"
            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter a task"
          />
        </div>
        <div className="mx-1">
          <button
            type="submit"
            className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputField;
