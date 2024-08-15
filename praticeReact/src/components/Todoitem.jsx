

export const Todoitem = ({ todoitem , deleteitem , toggleItem}) => {
    var style = {
        display: "flex",
        alignItems:"center",
        gap: "20px"
    }
    

    return (
        <div >
            {
                todoitem.map((item, index) => (
                    <div key={index} style={style}>
                    <h2> {item.title} </h2>
                    <h3 style={{ color: item.status ? "green" : "red" }}>
                         {item.status ? "completed" : "pending"}
                    </h3>
                    <button onClick={()=>{toggleItem(index)}}>Toggle</button>
                    <button onClick={()=>{deleteitem(index)}} >delete</button>

                    </div>
                ))
            }
        </div>
    );
};
 