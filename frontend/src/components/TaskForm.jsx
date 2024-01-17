
import useTodoContext from '../hooks/useTodoContext'
import { useState } from 'react'

const TaskForm = () => {
      const { dispatch } = useTodoContext()
      const [title, setTitle] = useState('')
      const [task, setTask] = useState('')
      const [date, setDate] = useState('')
      const [err, setErr] = useState(null)

      const handleSubmit = async (e) => {
            e.preventDefault()

            const todo = { title, task, date }

            try {
                  const resp = await fetch('http://localhost:4000/api/todo', {
                        method: 'POST',
                        body: JSON.stringify(todo),
                        headers: { 'Content-Type': 'application/json' }
                  })

                  if (!resp.ok) {
                        const json = await resp.json()
                        setErr(json.error)
                  } else {
                        setErr(null)
                        setTitle('')
                        setTask('')
                        setDate('')
                        dispatch({
                              type: 'CREATE_TODO',
                              payload: await resp.json()
                        })
                  }
            } catch (error) {
                  console.error('Error:', error)
            }
      }

      return (
            <form onSubmit={handleSubmit} className='w-full px-8 py-4 border-2 border-yellow-400 shadow-lg bg-white rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg'>
                  <h1 className='text-2xl text-center font-bold'>Add Tasks</h1>

                  <div className='flex flex-col mb-3'>
                        <label htmlFor="title" className='text-lg font-medium'>Title</label>
                        <input
                              type="text"
                              id='title'
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              className='border p-2 rounded-xl bg-slate-100'
                        />
                  </div>

                  <div className='flex flex-col mb-3'>
                        <label htmlFor="task" className='text-lg font-medium'>Task</label>
                        <input
                              type="text"
                              id='task'
                              value={task}
                              onChange={(e) => setTask(e.target.value)}
                              className='border p-2 rounded-xl bg-slate-100'
                        />
                  </div>

                  <div className='flex flex-col mb-3'>
                        <label htmlFor="date" className='text-lg font-medium'>Date</label>
                        <input
                              type="date"
                              id='date'
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className='border p-2 rounded-xl bg-slate-100'
                        />
                  </div>

                  <button className='block m-auto bg-purple-500 py-2 px-4 text-white rounded-xl'>Submit</button>
            </form>
      )
}

export default TaskForm