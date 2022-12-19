import React from "react";
import Checkbox from "./Checkbox";

// TaskList recibe los parametros de 'list' y 'setList'
const TaskList = props => {

    const { list, setList } = props;
    // onChangeStatus va a obtener dos valores 'name' y 'checked'
    const onChangeStatus = e => {
        const { name, checked } = e.target;
        /* la funcion toma la lista 'list' y la recorre con el metodo '.map()'. crea un objeto nuevo con la propiedades del original y le incluye la propiedad 'done'
        si el elemento coincide con el valor 'name' */
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };
    // onClickRemoveItem esta devolviendo una lista con los elementos que no son iguales a done 
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    // recorre la lista y la actualiza 
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return (
        <div className="todo-list">
            {/* ternary operator evalua las condiciones  */}
            {list.length ? chk : "No tasks"}
            {list.length ? (
                <p>
                    <button className="button blue" onClick={onClickRemoveItem}>
                        Delete all done
                    </button>
                </p>
            ) : null}
        </div>
    );
};
export default TaskList;
