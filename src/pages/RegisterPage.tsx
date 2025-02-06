import { useRef, useState } from 'react'

import classes from './Pages.module.css'

export const RegisterPage = () => {
  const [error, setError] = useState('')

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())

    if (data.password != data.confirmPassword) {
      setError('Пароли не совпадают')
      return
    }
    setError('')

    //fetch
  }

  return (
    <div className={classes.Container}>
      <form ref={formRef} onSubmit={handleSubmit} className={classes.AuthForm}>
        <div className={classes.field}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Введите email'
            required
          />
        </div>

        <div className={classes.field}>
          <label htmlFor='password'>Пароль</label>
          <input
            id='password'
            type='password'
            name='password'
            placeholder='Введите пароль'
            required
          />
        </div>

        <div className={classes.field}>
          <label htmlFor='confirmPassword'>Повторите пароль</label>
          <input
            id='confirmPassword'
            type='password'
            name='confirmPassword'
            placeholder='Повторите пароль'
            required
          />
        </div>
        <button type='submit'>Зарегистрироваться</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  )
}
