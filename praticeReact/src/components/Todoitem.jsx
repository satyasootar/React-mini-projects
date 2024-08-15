

export const Todoitem = ({ todoitem, deleteitem, toggleItem }) => {  
    const style = {  
        display: "flex",  
        alignItems: "center",  
        justifyContent: "center",  
        gap: "20px",  
        marginBottom: "10px", // Add some spacing between items  
    };  

    return (  
        <div className="container">  
            {todoitem.map((item, index) => (  
                <div key={index} style={style}>  
                    <h2>{item.title}</h2>  
                    <h3 style={{ color: item.status ? "green" : "red" }}>  
                        {item.status ? "Completed" : "Pending"}  
                    </h3>  
                    <button onClick={() => toggleItem(index)}>Toggle</button>  
                    <button onClick={() => deleteitem(index)}>Delete</button>  
                </div>  
            ))}  
        </div>  
    );  
};
