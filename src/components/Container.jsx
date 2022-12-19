import React, { useState } from "react";

// importamos al contenedor padre
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

// la funcion Container va a tener una variable 'list' con un arreglo vacio y la funcion para actualizar ese valor a la constante 'setList' 
const Container = () => {
    const [list, setList] = useState([]);
    // la funcion toma el parametro 'addItem' y lo agrega a la lista 
    const handleAddItem = addItem => {
        // crea una lista nueva incluyendo el elemento agregado 'addItem'. se almacena en 'list' reemplazando la version anterior de la lista
        // (...) para crear una nueva lista que incluye un elemto agregado
        setList([...list, addItem]); // (B-2)
    };
    return (
        <div>
            {/* llama los parametros de 'handleAddItem'  */}
            <FormTodo handleAddItem={handleAddItem} />
            <TaskList list={list} setList={setList} />
        </div>
    );
};
export default Container;
