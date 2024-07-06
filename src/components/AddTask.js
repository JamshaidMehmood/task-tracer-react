import { useState } from "react"

const AddTask = (props) => {
  
    const [text,setText]=useState("")
    const [day,setDay]=useState("")
    const [reminder,setRemainder]=useState("")
  
    const localOnSubmit= (e)=>
    {
        e.preventDefault()
        if (!text)
        {
            alert("Please add a task")
            return
        }

        props.addTask({text,day,reminder})
        
        setText("")
        setDay("")
        setRemainder(false)

    }


    return (
     <form className="add-form" onSubmit={localOnSubmit}>
      <div className="form-control">
       <label>ADD TASK</label>
       <input type="text" placeholder="ADD TASK"  value={text}  onChange={(e) => setText (
           e.target.value
       )}/>
      </div>

      <div className="form-control">
       <label>Day & Time</label>
       <input type="text" placeholder="Day & Time" value={day}  onChange={(e) => setDay (
           e.target.value
       )} />
      </div>

      <div className="form-control form-control-check">
       <label>Remainder</label>
       <input type="checkbox" checked={reminder}  value={reminder}  onChange={(e) => setRemainder (
           e.currentTarget.checked
       )}/>
      </div>

      <input type="submit" value="Add Task"  className="btn btn-block"/>
     </form>
  )
}

export default AddTask
