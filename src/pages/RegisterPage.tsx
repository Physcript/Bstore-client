import React, { useState } from 'react'
import check from '../img/check.png'
import { Container } from 'react-bootstrap'

interface IRegister {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
}

export function RegisterPage() {

  const [ userInput,setUserInput ] = useState<IRegister>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [ error,setError ] = useState({})
  const [ success,setSuccess ] = useState<boolean>(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name,value } = e.target
    setUserInput((val) => ({
      ...val,
      [name]: value
    }))
  }

  const createHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const body = JSON.stringify(userInput)
    const method = "POST"
    const url = 'http://localhost:1337/api/u/create'
    const _request = new Request(url, { body, method, headers: { "Content-Type": "application/json" } }) 

    fetch(_request)
    .then((res) => {
      if(res.status === 200)
        {
          res.json().then((val) => {
            setError({})
            setUserInput({
              firstName: '',
              lastName: '',
              email: '',
              confirmPassword: '',
              password: ''
            })
            setSuccess(true)
          })
        }
      else 
        {
          res.json().then((val) => {
            setError(val.error)
          })
        }
    })
    .catch((err) => {

    })
    .finally(() => {

    })
  }
  
  if(success) {
    return (
      <>
        <Container>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '80vh', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <img width="250" src = { check } />
            <label>Account created</label>
          </section>
        </Container>
      </>
    )
  }

  return (
    <>
      <Container>
        { Object.keys(error).length >= 1 ? (

          <section className="error-section d-flex" style = {{ flexDirection: 'column' }}>
            {
              Object.values(error).map((value) =>{
                return (
                  <label>{ value }</label>
                )
              })
            }
          </section>
          ) :
          (
            console.log("")
          )
        }
        <label>Register</label>
        <i class="fa-solid fa-check"></i>
        <section className="d-flex f-column">
          <input onChange={ onChange } name="firstName" value={ userInput.firstName } placeholder="Firstname" />
          <input onChange={ onChange } name="lastName" value={ userInput.lastName }  placeholder="Lastname" />
          <input onChange={ onChange } name="email" value={ userInput.email} placeholder="Email" />
          <input onChange={ onChange } name="password" value={ userInput.password } type="password" placeholder="Password" />
          <input onChange={ onChange } name="confirmPassword" value={ userInput.confirmPassword } type="password" placeholder="Confirm Password" />
        </section>
        <section>
          <button onClick={ createHandler } >Create</button>
        </section>
      </Container>
    </>
  ) 

}
