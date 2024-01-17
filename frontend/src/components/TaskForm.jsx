
import useTodoContext from '../hooks/useTodoContext'
import { useState } from 'react'
import toast from 'react-hot-toast'

const TaskForm = () => {
      const { dispatch } = useTodoContext()
      const [title, setTitle] = useState('')
      const [task, setTask] = useState('')
      const [date, setDate] = useState('')

      const handleSubmit = async (e) => {
            e.preventDefault()

            const todo = { title, task, date }

            const resp = await fetch('http://localhost:4000/api/todo', {
                  method: 'POST',
                  body: JSON.stringify(todo),
                  headers: { 'Content-Type': 'application/json' }
            })
            const json = await resp.json()

            if (resp.ok) {
                  toast.success('Task Saved!')
                  setTitle('')
                  setTask('')
                  setDate('')
                  dispatch({ type: 'CREATE_TODO', payload: json })
            } else {
                  toast.error('Please fill all the fields!')
            }
      }

      const currentDate = new Date().toISOString().split('T')[0];

      return (
            <form onSubmit={handleSubmit} className='w-full px-6 py-4 border-2 border-yellow-400 shadow-lg bg-white rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg'>
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
                        <textarea
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
                              min={currentDate}
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