import React, { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm';
import useTodoContext from '../hooks/useTodoContext';
import Loader from '../components/Loader';

const Home = () => {
      const { todos, dispatch } = useTodoContext();

      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchTasks = async () => {

                  const resp = await fetch('http://localhost:4000/api/todo');
                  const json = await resp.json();

                  if (resp.ok) {
                        dispatch({ type: 'SET_TODO', payload: json })
                        setTimeout(() => {
                              setLoading(false);
                        }, 2000);
                  }
            };
            fetchTasks();
      }, [dispatch]);

      return (
            <main className='w-full min-h-screen p-12'>
                  <div className='w-full grid grid-cols-7 m-auto gap-4'>
                        <div className='col-span-5'>
                              {loading ? (
                                    <Loader />
                              ) : (
                                    <div className='w-full flex flex-wrap justify-start items-start gap-12'>
                                          {todos &&
                                                todos
                                                      .slice()
                                                      .sort((a, b) => new Date(a.date) - new Date(b.date))
                                                      .map((task) => (
                                                            <TaskCard
                                                                  key={task._id}
                                                                  task={task}
                                                                  expired={new Date(task.date) < new Date()}
                                                            />
                                                      ))
                                          }
                                    </div>
                              )}
                        </div>
                        <div className='w-4/5 col-span-2'>
                              <TaskForm />
                        </div>
                  </div>
            </main>
      );

};

export default Home