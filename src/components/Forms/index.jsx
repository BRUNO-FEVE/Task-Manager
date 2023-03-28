import React from "react";
import Button from "../Button";
import './styles.scss';

class Formulario extends React.Component {
    render () {
        return (
            <form className="formsCard">
                <div className="topCircle"/>
                <h1 className="title position">Cronômetro</h1>
                <h1 className="stopWatch position">00:00:00</h1>
                <div className="inputContainer">
                    <input type="text" nome="tarefa" id="tarefa" placeholder="Nome da tarefa: " required/>
                </div>
                <div className="inputContainer">
                    <input type="text" id="tempo" placeholder="Tempo estimado: " required/>
                </div>
                <Button />
            </form>
        )
    }
}

export default Formulario;