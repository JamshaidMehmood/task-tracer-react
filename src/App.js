import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  
  const [showForm, setShowForm]=useState (false)
  
  const [tasks, setTask] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
      },
    ]
  )



  //add Task functionality
  const addTask = (task) => {
        console.log(task)
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTask([...tasks, newTask])

  }

  //deleting an item
  const deleteTask = (id) => {
    console.log("DEL button clicked ", id)
    setTask(tasks.filter((task) => task.id !== id))
  }

  // for toggeling purpose
  const toggleReminder = (id) => {
    console.log("Reminder button clicked ", id)
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }  



  return (
    <Router>
      <div className="container">
        <Header  onAdd={()=> setShowForm (!showForm)} showContentAndColor={showForm}/>
        <Routes>
        <Route
            path='/'
            element={
              <>

        {showForm &&< AddTask  addTask={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggle={toggleReminder} /> : "NO TASK EXSIST"}
        </>
        }
        />
         <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
