// import Mom from "./mom";

// const Kichen = () => {
//   return (
//     <div>
//       {/* <Mom /> */}

//     </div>
//   );
// };
// export default Kichen;


// import React, { useState, useMemo } from 'react';
  
// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Buy groceries' },
//     { id: 2, text: 'Walk the dog' },
//     { id: 3, text: 'Do laundry' },
//   ]);
  
//   const [searchValue, setSearchValue] = useState('');
//   const [newTask, setNewTask] = useState('');
  
//   const filteredTodos = useMemo(() => {
//     if (searchValue.trim() === '') {
//       return todos;
//     }
  
//     return todos.filter((todo) =>todo.text.toLowerCase().includes(searchValue.toLowerCase())
//     );
//   }, [searchValue, todos]);
  
//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       const newTodo = {
//         id: Date.now(),
//         text: newTask.trim(),
//       };
  
//       setTodos((prevTodos) => [...prevTodos, newTodo]);
//       setNewTask('');
//     }
//   };
  
//   return (
//     <div>
//       <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
//       <TodoList todos={filteredTodos} />
//       <div>
//         <input
//           type="text"
//           placeholder="Add task..."
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//     </div>
//   );
// };
  
// export default App; 