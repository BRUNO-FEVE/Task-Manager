import { ITarefa } from "../types/tarefa";
import Item from "./item";
import style from './List.module.scss'

function Lista ({tarefas}: {tarefas: ITarefa[]} ) {
    return ( 
            <aside className={style.listaTarefas}>
                <h1>Tarefas:</h1>
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