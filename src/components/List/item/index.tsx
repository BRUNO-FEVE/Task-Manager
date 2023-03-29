import style from '../List.module.scss'

export default function Item({tarefa, tempo, progresso}: { tarefa: string, tempo: string, progresso: string }) {
    return (
        <li className={style.item}>
            <div className={style.left}>
                <h3> {tarefa} </h3>
                <span> Tempo: {tempo} </span>
            </div>
            <div className={style.right}>
                <p>Progresso</p>
                <p>{progresso}/100</p>
            </div>
        </li>
    )
}