import { Provider } from 'react-redux'

import Counter from "./components/Counter"
import { counterStore } from './app/counterStore'
import { todoStore } from './app/todoStore'
import Todo from "./components/Todo"
import { themeStore } from './app/themeStore'
import Theme from "./components/Theme"
import { cartStore } from './app/cartStore'
import Cart from "./components/Cart"


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
      <Provider store={cartStore}>
        <Cart />
      </Provider>

    </div>

  )
}

export default App
