import React from "react";
import Button from "../Button";
import style from './Forms.module.scss';
import StopWacth from "./StopWacth";

class Formulario extends React.Component {
    render () {
        return (
            <form className={style.formsCard}>
                <div className={style.topCircle}/>
                <StopWacth />
                <div className={style.inputContainer}>
                    <input type="text" id={style.tarefa} placeholder="Nome da tarefa: " required/>
                </div>
                <div className={style.inputContainer}>
                    <input type="time" step="1" id={style.tempo} placeholder="Tempo estimado: " min={"00:00:00"} max={"01:30:00"} required/>
                </div>
                <Button texto="Adicionar"/>
            </form>
        )
    }
}

export default Formulario;