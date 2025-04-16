import Counter from "./components/Counter"
import {Provider} from 'react-redux'
import { counterStore } from './app/counterStore'
import { todoStore } from './app/todoStore'
import Todo from "./components/Todo"
import { themeStore } from './app/themeStore'
import Theme from "./components/Theme"


function App() {

  return (
    <div>
      <Provider store={counterStore}>
        <Counter />
      </Provider>
      <Provider store={todoStore}>
        <Todo />
      </Provider>
      <Provider store={themeStore}>
        <Theme />
      </Provider>
    </div>

  )
}

export default App
