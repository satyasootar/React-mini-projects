import { Timer } from "./components/Timer/Timer"
import { Profile } from "./components/profile/profile"
import Count from './components/Counter'
import { TodoList } from './components/TodoList'
import { DOM } from "./components/DOM/DOM"
import Form from "./components/Form/Form"
import Countreducer from "./components/Counter/Countreducer"
import LocaStorageCounter from "./components/LocalStorageCounter/LocaStorageCounter"
function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"50px", textAlign:"center"}}>
      <Count />
      <TodoList />
      <Profile />
      <Timer />
      <DOM />
      <Form />
      <Countreducer />
      <LocaStorageCounter />
    </div>
  )
}

export default App
 