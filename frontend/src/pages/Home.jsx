import React, { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'
import axios from "axios";
import TaskForm from '../components/TaskForm';

const Home = () => {

      const [tasks, setTasks] = useState(null)

      useEffect(() => {
            const fetchTasks = async () => {
                  const resp = await axios.get('http://localhost:4000/api/todo')
                  setTasks(resp.data)
            }

            fetchTasks()
      }, [])

      return (
            <>
                  <main className=' w-full min-h-screen p-12'>

                        <div className='w-full grid grid-cols-7 m-auto gap-4'>
                              <div className='w-full flex flex-wrap justify-center items-start gap-3 col-span-5 '>
                                    {
                                          tasks && tasks.map((task) => (
                                                <TaskCard key={task._id} task={task} />
                                          ))
                                    }

                              </div>

                              <div className='w-4/5 col-span-2 '>
                                    <TaskForm />
                              </div>
                        </div>

                  </main >
            </>
      )
}

export default Home