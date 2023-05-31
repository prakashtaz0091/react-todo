import React from 'react';
import './App.css';
import Item from './components/item/Item';
function App() {

  const [inputText, setInputText] = React.useState("")
  const [todos, setTodos] = React.useState([])
  const [selectedDate, setSelectedDate] = React.useState('');

  const handleDateChange = (e) => {
    const { value } = e.target;
    setSelectedDate(value);
  };

  const addTodo = () => {

    if (inputText.length !== 0) {

      const updatedTodos = [...todos, {
        title: inputText,
        datetime: selectedDate
      }]
      console.log(todos);
      const sortedTodos = updatedTodos.sort((a, b) => {
        const datetimeA = new Date(a.datetime);
        const datetimeB = new Date(b.datetime);
        return datetimeA - datetimeB;
      });
      console.log(sortedTodos);
      setTodos(sortedTodos);


      setInputText("")
      setSelectedDate('')
    }


  }


  const remove = (todoText) => {
    const updatedTodos = todos.filter((todo) => todo !== todoText);
    setTodos(updatedTodos);
  };

  const moveItemToLast = (itemText) => {
    const updatedTodos = todos.filter((todo) => todo !== itemText).concat(itemText);
    setTodos(updatedTodos);
  };



  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          placeholder='what you need to do ?'
          value={inputText}
          onChange={(e) => setInputText(e.currentTarget.value)}
        />
        <input
          type="datetime-local"
          name=""
          id="datetime"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <button
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="todo-items">
        <h1>TODOS</h1>
        {
          todos && todos.map((todo) => {
            return (
              <Item key={todo.title} todo={todo} remove={remove} arrange={moveItemToLast} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
