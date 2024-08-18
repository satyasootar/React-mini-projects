import { Timer } from "./components/Timer/Timer"
import { Profile } from "./components/profile/profile"
import Count from './components/Counter'
import { TodoList } from './components/TodoList'
function App() {
  return (
    <div style={{textAlign: "center", padding:"20px"}}>
      {/* <Count />
      <TodoList />
      <Profile /> */}
      <Timer />
    </div>
  )
}

export default App
