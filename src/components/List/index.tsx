import React from "react";
import Item from "./item";
import style from './List.module.scss'

function Lista () {
    let tarefas = [{
        tarefa: 'React',
        tempo: '1:30:00',
        progresso: '100',
      }, {
        tarefa: 'JavaScript',
        tempo: '1:00:00',
        progresso: '100',
      }, {
        tarefa: 'Typescript',
        tempo: '2:00:00',
        progresso: '100',
      }, ]
    return ( 
            <aside className={style.listaTarefas}>
                <h1 onClick={() => {
                  tarefas = [...tarefas, {tarefa: "Estudar estado", tempo: "01:00:00", progresso: "80"}]
                }}>Tarefas:</h1>
                <div className={style.field}>
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
                </div>
                <div className={style.semiCircle}/>
            </aside>
    )
}

export default Lista;