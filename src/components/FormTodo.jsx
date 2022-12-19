import React, { useState } from "react";//useState para el manejo de estados

const FormTodo = props => {
    const { handleAddItem } = props; //  parametro que tiene unas caracteristicas 
    const [description, setDescription] = useState(""); //va a ser un etsado vacio 

    // handleSubmit va a escuchar un evento donde recibira parametros 
    const handleSubmit = e => {
        e.preventDefault(); //que la pagina no se este recargando
        // se le asignan las caracteristicas que debe llevar
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        setDescription(""); 
    };
    return (
        // estructura html y llama el evento handleSubmit
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="button pink"
                        disabled={description ? "" : "disabled"}
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};
export default FormTodo;
