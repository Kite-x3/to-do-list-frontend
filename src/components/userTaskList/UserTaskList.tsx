import { useEffect, useState } from 'react'
import { Task } from '../task/Task'
import classes from './UserTaskList.module.css'

export const UserTaskList = () => {
  const API_BASE_URL = import.meta.env.VITE_API_URL || window.location.origin
  const API_URL = `${API_BASE_URL}${window.location.pathname}`

  const [tasks, setTasks] = useState<
    { title: string; status: string; description: string }[]
  >([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error('Ошибка загрузки задач:', err))
  }, [])
  return (
    <section className={classes.UserTaskList}>
      {tasks?.length > 0 ? (
        tasks.map((task, index) => <Task key={index} {...task} />)
      ) : (
        <p>Задачи не найдены</p>
      )}
    </section>
  )
}
