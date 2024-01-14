import React from 'react'

const TaskCard = ({ task }) => {
      return (
            <div className='w-1/4 shadow-lg p-4  bg-white rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg'>
                  <h1 className='text-2xl font-semibold mb-2 capitalize text-center'>{task.title}</h1>
                  <p className='capitalize text-lg'>{task.task}</p>
                  <p className='font-medium'>{task.date.slice(0, 10)}</p>

            </div>
      )
}

export default TaskCard
