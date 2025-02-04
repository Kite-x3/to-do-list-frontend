import classes from './Task.module.css'

export const Task = ({
  title,
  status,
  description,
}: {
  title: string
  status: string
  description: string
}) => {
  return (
    <div className={classes.TaskBox}>
      <h3>{title}</h3>
      <h5>{status}</h5>
      <div>{description}</div>
    </div>
  )
}
