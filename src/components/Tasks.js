import Task from "./Task"

const Tasks = (props) => {
    return (
    <>
      {props.tasks.map ((task) => (
      <Task key={task.id} id={task.id} task={task.text} day={task.day} reminder={task.reminder} onDelete={props.onDelete} toggle={props.toggle}/>
      )
      )}
    </>
  )
}

export default Tasks
