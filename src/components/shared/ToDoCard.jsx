

const ToDoCard = ({toDo,is_completed,onClick,onChange}) => {

    return(

        <div style={{borderRadius:"0.5rem", padding:"1rem",boxShadow:"0.8px 0.8px 0.8px 0.8px #E5E4E2" }} >
        
        <form action="">
            <div style={{display:"flex", justifyContent:"space-between"}} >
                <div style={{display:"flex", columnGap:"1rem" }} >
                <input checked={is_completed} onChange={onChange} type="checkbox"  />

                <p>{toDo}</p>
                </div>
                <p  >{is_completed === false? "Not complete": "complete"}</p>
                <button type="button" onClick={onClick} style={{borderRadius: "0.5rem", color: "white", padding: " 1rem", background:"red",border:"none"}} >Delete</button>

            </div>
        </form>

        </div>
    )
}

export default ToDoCard