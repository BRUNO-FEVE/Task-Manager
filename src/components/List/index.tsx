import React from "react";
import './styles.scss'

function Lista () {
    const tarefas = [{
        tarefa: 'React',
        tempo: '1:30:00',
        progresso: '100/100',
      }, {
        tarefa: 'JavaScript',
        tempo: '1:00:00',
        progresso: '100/100',
      }, {
        tarefa: 'Typescript',
        tempo: '2:00:00',
        progresso: '100/100',
      }, {
        tarefa: 'Java',
        tempo: '2:00:00',
        progresso: '100/100',
      }]
    return ( 
            <aside className="listaTarefas">
                <h1>Tarefas:</h1>
                <ul>
                    {tarefas.map((item, index) => (
                        <li key={index} className="item">
                            <div className="left">
                                <h3> {item.tarefa} </h3>
                                <span> Tempo: {item.tempo} </span>
                            </div>
                            <div className="right">
                                <p>Progresso</p>
                                <p>{item.progresso}</p>
                            </div>
                        </li>
                    ))}
                </ul> 
                <div className="bottom">
                    <div className="smallCircles">
                        <div className="circle" id="green"/>
                        <p className="ready">Atividade Completa</p>
                        <div className="circle" id="yellow"/>
                        <p className="notReady">Atividade em Andamento</p>
                    </div>
                </div>
                <div className="semiCircle"/>
            </aside>
    )
}

export default Lista;