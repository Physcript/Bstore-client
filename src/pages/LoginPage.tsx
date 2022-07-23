import react, { useState,useContext } from 'react'
import { AuthContext } from '../context/auth/context'
import { useNavigate } from 'react-router-dom'

import image from "../img/01.jpg"

export function LoginPage() {
  
  
  const authContext = useContext( AuthContext )  
  const navigate = useNavigate()
  const [ userInput,setUserInput ] = useState({
    email: '',
    password: ''
  })

  const [ error,setError ] = useState('')



  const loginHandler = () => {
    const url = 'http://localhost:1337/api/u/login'
    const method = 'POST'
    const body = JSON.stringify(userInput)
    const _request = new Request(url, {
      body,
      method,
      headers: { 'Content-Type':'application/json' }
    })
    fetch(_request)
      .then((res) => {
        if(res.status === 200) 
          {
            res.json().then((response) => {
              setError('')
              const { USER,TOKEN } = response.message
              authContext.userDispatch({ TYPE: 'LOGIN', PAYLOAD: { USER,TOKEN } })
              navigate('/')
              
            })     
          }
        else
          {
            res.json().then((response) => {
              setError(response.message)
            })
          }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
      })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name,value } = e.target
    setUserInput((val) => ({
      ...val,
      [name]: value
    }))
  }

  return (
    <div className="container">
      <div className="d-md-flex login-parent"
      >
        <div className="left-col d-none d-md-block d-lg-block"
        >
          <img className="image" src={ image } 
          />
        </div>
        <div className="right-col"
          style={{ flex:1 }}
        >
          <div className="login">
            <label className='error' >{ error }</label>
            <label>Login</label>
            <input 
              placeholder="Email"
              name="email"
              value={ userInput.email }
              onChange={ onChange }
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={ userInput.password }
              onChange={ onChange }
            />
            <div className="">
              <a href="#">Forgot password</a>
            </div>
            <button onClick = { loginHandler }>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
