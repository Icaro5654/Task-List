import {useState} from 'react'

const Form = ({addTodo})=> {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState(""); //vai ser prenchido pelo input

  //função submit do form
  const handleSubmit = (e) => {
    e.preventDefault();
    //validação pra tarefa com dados nulos:
    if (!value || !category) return;
    //adcionar todo
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return <div className="todo-form">
    <h2>Criar tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o titulo' value={value}
         onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
    </form>

  </div>

}

export default Form