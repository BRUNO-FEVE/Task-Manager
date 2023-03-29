import style from '../Forms.module.scss'

export default function StopWacth () {
    return (
        <>
            <h1 className={`${style.title} ${style.position}`}>Cronômetro</h1>
            {/* Last StopWacth = <h1 className={`${style.stopWatch} ${style.position}`}>00:00:00</h1> */}
            <div className={`${style.spans} ${style.position}`}>
                <span className={`${style.stopWatch}`}>0</span>
                <span className={`${style.stopWatch} ${style.position}`}>0</span>
                <span className={`${style.stopWatch} ${style.position}`}>:</span>
                <span className={`${style.stopWatch} ${style.position}`}>0</span>
                <span className={`${style.stopWatch} ${style.position}`}>0</span>
                <span className={`${style.stopWatch} ${style.position}`}>:</span>
                <span className={`${style.stopWatch} ${style.position}`}>0</span>
                <span className={`${style.stopWatch} ${style.position}`}>0</span>
            </div>
        </>
    )
}