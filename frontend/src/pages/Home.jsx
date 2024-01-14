import React, { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'
import axios from "axios";

const Home = () => {

      const [tasks, setTasks] = useState(null)

      useEffect(() => {
            const fetchTasks = async () => {
                  const resp = await fetch('http://localhost:4000/api/todo')
                  const json = await resp.json()

                  if (resp.ok) {
                        setTasks(json)
                  }
            }

            fetchTasks()
      }, [])

      return (
            <>
                  <main className=' w-full min-h-screen p-12'>

                        <div className='w-full flex flex-wrap justify-center items-center gap-3'>
                              {
                                    tasks && tasks.map((task) => (
                                          <TaskCard key={task._id} task={task} />
                                    ))
                              }

                        </div>

                  </main >
            </>
      )
}

export default Home