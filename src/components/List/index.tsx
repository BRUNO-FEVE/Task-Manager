import React from "react";
import Item from "./item";
import style from './List.module.scss'

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
            <aside className={style.listaTarefas}>
                <h1>Tarefas:</h1>
                <ul>
                    {tarefas.map((item, index) => (
                        <Item {...item} key={index} />
                    ))} 
                </ul> 
                <div className={style.bottom}>
                    <div className={style.smallCircles}>
                        <div className={style.circle} id={style.green}/>
                        <p className={style.ready}>Atividade Completa</p>
                        <div className={style.circle} id={style.yellow}/>
                        <p className={style.notReady}>Atividade em Andamento</p>
                    </div>
                </div>
                <div className={style.semiCircle}/>
            </aside>
    )
}

export default Lista;