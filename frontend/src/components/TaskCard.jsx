import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import useTodoContext from '../hooks/useTodoContext';
import toast from 'react-hot-toast'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskCard = ({ task, expired }) => {

      const { dispatch } = useTodoContext()

      const handleDelete = async () => {
            const resp = await fetch(`http://localhost:4000/api/todo/${task._id}`, {
                  method: 'DELETE',
            })
            const json = await resp.json()

            if (resp.ok) {
                  dispatch({
                        type: 'DELETE_TODO',
                        payload: json
                  })
                  toast.success('Task Deleted')
            }
      }


      return (
            <div className='w-full shadow-lg p-4 border-2 border-yellow-400 bg-white rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg transition-all ease-in-out'>


                  <div className='flex justify-between items-start'>
                        <div className='flex'>
                              <p className='font-medium mb-1'>{task.date.slice(0, 10)}</p>
                              {expired && <p className='expired-text'>(Expired)</p>}
                        </div>

                        <div className='flex justify-center items-start gap-2'>

                              <button >
                                    <MdEdit />
                              </button>


                              <button onClick={handleDelete}>
                                    <MdDelete color='red' />
                              </button>

                        </div>

                  </div>



                  <div>
                        <h1 className='text-2xl font-semibold mb-2 capitalize'>{task.title}</h1>
                        <p className='capitalize text-lg'>{task.task}</p>
                        <p className='font-light'>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
                  </div>

            </div>
      )
}

export default TaskCard
