import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    // content wrapper
    <div className="flex flex-col">
      <div className="bg-blue-400 py-3 text-center">
        <p className="text-white font-bold text-lg uppercase">taskify</p>
      </div>
      <div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
    </div>
  );
};

export default App;
