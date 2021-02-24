import React, { useState } from 'react'

function DeleteComposer(params) {
    const [deleteInputText, setDeleteInputText] = useState("");

    function removeComposer() {
        let updated_composers = params.composers.filter(composer => composer.nombre !== deleteInputText);

        params.setComposers(updated_composers);
        params.setListItems(updated_composers.map(composer => <li>{composer.nombre}</li>));

        setDeleteInputText("");
    }

    function changeDeleteInput(event) {
        setDeleteInputText(event.target.value);
    }

    return (
        <div className="group">
            <input type="text" id="delete_input" value={deleteInputText} onInput={changeDeleteInput} />
            <button onClick={removeComposer}>Eliminar</button>
        </div>
    )
}

export default DeleteComposer;