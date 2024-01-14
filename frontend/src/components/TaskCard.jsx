import React from 'react'

const TaskCard = ({ task }) => {
      return (
            <div className='w-1/5 shadow-lg p-4 text-center bg-white rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg'>
                  <h1 className='text-2xl font-semibold mb-2'>{task.title}</h1>
                  <p className='capitalize'>{task.task}</p>
                  <p>{task.date.slice(0, 10)}</p>

            </div>
      )
}

export default TaskCard
