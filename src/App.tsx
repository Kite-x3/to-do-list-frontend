import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { TasksPage } from './pages/TasksPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<RegisterPage />}></Route>
          <Route path='/tasks' element={<TasksPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
