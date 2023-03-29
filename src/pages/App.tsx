import {useState} from 'react';
import Formulario from '../components/Forms';
import Lista from '../components/List';
import { ITarefa } from '../components/types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  return (
    <div className={style.AppStyle}>
       <Formulario setTarefas={setTarefas}/>
       <Lista tarefas={tarefas}/>
    </div>
  );
}

export default App;
