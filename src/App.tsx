import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-slate-400'>
      <div className='w-1/3 p-2 bg-slate-300 rounded' >
        <form action="">
          <input type="text" className='forAddNewTodoName' />
          <button className='forAddNewTodo'>add</button>
        </form>
        <ul className='for todos'>
          <li><span>task1</span> <button>delete</button></li>
          <li><span>task1</span> <button>delete</button></li>
          <li><span>task1</span> <button>delete</button></li>

        </ul>
        <div>
          <button>all</button>
          <button>completed</button>
          <button>uncompleted</button>
        </div>
      </div>
    </div>
  )
}

export default App


