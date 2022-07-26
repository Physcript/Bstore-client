
import React , { useState,useEffect, useContext } from 'react'
import { AuthContext } from '../context/auth/context'


export function useAuth () {

  const [ data,setData ] = useState(null)
  const [ error,setError ] = useState(null)
  const [ pending,setPending ] = useState(true)
  

  useEffect(() => {
    fetch('http://localhost:1337/api/u/auth', {
      method: 'POST',
      headers: { "Content-type": "application.json",
        "token": localStorage.getItem('user') 
      }
    }).then((res)=> {
      if(res.status === 200)
        {
          res.json().then((response) => {
            setData(response.message.user)
          })
        }
      else 
        {
          res.json().then((response) => {
            setError(response.error)
          })
        }
    })
    .catch((error) => {
      setError(error)
    })
    .finally(() => {
      setPending(false)
    })

  },[])
  
  return { data,error,pending }

}
