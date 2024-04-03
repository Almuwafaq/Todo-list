import { useEffect, useState } from "react"
import ToDoCard from "../shared/ToDoCard"


const Todo = () => {

    const [allToDos, setAllToDos] = useState(() => {
        const storedValue = localStorage.getItem('myValue');
        return storedValue !== null ? JSON.parse(storedValue) : []; 
      });
    const [toDo, setToDos] = useState("")

function changeToDo(e){
    setToDos(e.target.value)
}

useEffect(() => {
    localStorage.setItem('myValue', JSON.stringify(allToDos));
  }, [allToDos]);

function submitTodo(e) {
        e.preventDefault()

        if(toDo !== ""){
            setAllToDos([...allToDos, {
                id: allToDos.length + 1,
                toDo: toDo,
                is_completed: false
            }])
    
            setToDos("")
            
        }
        else{
            alert("Cannot add empty ToDo")
        }


}
    
function deleteTodo(id) {

    setAllToDos(allToDos.filter((todo) => 
            todo.id !== id
    )); 
}

 const completeTodo = (id) => {
        setAllToDos(allToDos.map((todo) =>
            todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
          )
        );

      }

const filterByNotCompleted = allToDos.filter(data=> data.is_completed === false)
 const filterByCompleted = allToDos.filter(data=> data.is_completed === true)
    
const cardStyles = { display: "grid",  gridTemplateColumns: "auto auto auto auto", width: "100%", gap: "1rem", marginTop: "1rem" } 
return (

<div style={{  width: "100%", height:"100vh" }} >

    <div style={{display: "flex", justifyContent:"center", padding:"5rem"}} >
        <form onSubmit={submitTodo} >
            <div style={{ display: "flex", gap: "1rem" }} > 
            <input onChange={changeToDo} value={toDo} type="text" placeholder="Add your todo" style={{ borderRadius: "0.5rem", outline: "none", padding: "0.8rem 1rem", width: "20rem", border: "1px solid grey" }} />
            <button style={{borderRadius: "0.5rem", color: "white", padding: " 0.8rem 1rem", background:"blue",border:"none"}} >Submit</button>
            </div>
        </form>
    </div>

    <div style={{margin:"0 4rem" }} >
       

            <div>
                <h1 style={{textAlign:"center"}}>PENDING TODO</h1>
                <div style={cardStyles} >
                {
                    filterByNotCompleted.map( (allToDo) =>(<ToDoCard key={allToDo.id} {...allToDo} 
                        onClick={() => deleteTodo(allToDo.id)} 
                        onChange={() => completeTodo(allToDo.id)} />))
                }
                </div>
            </div>

<div style={{margin:"4rem 0"}}   >
<h1 style={{textAlign:"center"}} >COMPLETED TODO</h1>
<div style={cardStyles} >
                {
                    filterByCompleted.map( (allToDo) =>(<ToDoCard key={allToDo.id} allToDo={allToDo} 
                        onClick={() => deleteTodo(allToDo.id)} 
                        
                        />))
                }
            </div>
</div>
      
    </div>
   
{/* 
            <div style={{display:"flex"}} >


     

        

            </div> */}

</div>
    )
}
export default Todo