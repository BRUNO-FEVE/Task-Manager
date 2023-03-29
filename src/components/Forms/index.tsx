import React from "react";
import Button from "../Button";
import { ITarefa } from "../types/tarefa";
import style from './Forms.module.scss';
import StopWacth from "./StopWacth";
import {v4 as uuidv4} from "uuid"

class Formulario extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00",
        progresso: "00",
    }

    adicionarTarefa (evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {
            ...this.state, 
            completado: false,
            selecionado: false,
            id: uuidv4()
            }])
        this.setState({
            tarefa: "",
            tempo: "00:00",
            progresso: "",
        })
    }
    render () {
        return (
            <form className={style.formsCard} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.topCircle}/>
                <StopWacth />
                <div className={style.inputContainer}>
                    <input type="text" 
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    id={style.tarefa} 
                    placeholder="Nome da tarefa: " 
                    required/>
                </div>
                <div className={style.inputContainer} id={style.timeContainer}>
                    <input 
                    type="time" 
                    value={this.state.tempo} 
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    step="1" id={style.tempo} 
                    placeholder="Tempo estimado: " 
                    min={"00:00:00"} 
                    max={"01:30:00"} 
                    required/>
                </div>
                <Button type="submit" texto="Adicionar"/>
            </form>
        )
    }
}

export default Formulario;