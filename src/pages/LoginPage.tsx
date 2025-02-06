import { useRef, useState } from "react"
import classes from  "./Pages.module.css"
import { Link } from "react-router"

export const LoginPage = () => {
  const [error, setError] = useState('')

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())

    //fetch

  }


  return <div className={classes.Container}>
    <form ref={formRef} className={classes.AuthForm} onSubmit={handleSubmit}>
      <div className={classes.field}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="email"/>
      </div>
      <div className={classes.field}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="password"/>
      </div>
      <button>Войти</button>
    </form>
    <div className={classes.ToDiffAuth}>
      <p>Если у вас ещё нет аккаунта можно <Link to="/register">зарегистрироваться</Link></p> 
    </div>
  </div>
  
}
