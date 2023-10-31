import { useState } from 'react'

import './App.css'

import Todo from './components/Todo'
import Form from './components/Form'
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, 
      text: "Criar funcionalidade X no sistema", 
      category: "Trabalho",
      isCompleted: false,
    }, 
    {
      id: 2, 
      text: "Ir pra academia", 
      category: "Pessoal", 
      isCompleted: false,
    }, 
    {
      id: 3, 
      text: "Estudar React", 
      category: "Estudos", 
      isCompleted: false,
    },
    
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = 
    [...todos, {
      //gerando numero aleatorio
      id: Math.floor(Math.random() * 10000), 
      text, 
      category,
      isCompleted: false, 
      

    },
  ];
  //atualizando o estado dos omponentes:
  setTodos(newTodos);

  };

  const removeTodo =(id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo: null
      );
      setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => 
    todo.id === id ? todo.isCompleted = !todo.isCompleted: todo
    );

    setTodos(newTodos);
  };


  return <div className="app">

    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter  filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="todo-list">
      {/* JAVA SCRIPT "{}" */}
      {todos
      .filter((todo)=> 
      filter === "All" 
      ? true 
      : filter ==="Completed" 
      ? todo.isCompleted 
      : !todo.isCompleted
      )

      .filter((todo) => 
      todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => 
      sort === "Asc" 
      ? a.text.localeCompare(b.text) 
      : b.text.localeCompare(a.text))
      
      .map((todo) => (
        //passando props no component pra funcionar:
        <Todo 
        key={todo.id} 
        todo={todo} 
        removeTodo={removeTodo } 
        completeTodo={completeTodo} />
        //key: chave unica para cada um dos componentes
        //nesse caso sera o "id"   pq nao se repete
      ))}
    </div>
    <Form addTodo={addTodo} />

  </div>
}

export default App;
