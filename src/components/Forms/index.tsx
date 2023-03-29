import React from "react";
import Button from "../Button";
import style from './Forms.module.scss';

class Formulario extends React.Component {
    render () {
        return (
            <form className={style.formsCard}>
                <div className={style.topCircle}/>
                <h1 className={`${style.title} ${style.position}`}>Cronômetro</h1>
                <h1 className={`${style.stopWatch} ${style.position}`}>00:00:00</h1>
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