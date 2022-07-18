

import React ,{ useState,useEffect } from 'react'

  

export function useProduct() {
  
  const [ data,setData ] = useState(null) 
  const [ isPending,setIsPending ] = useState(true)
  const [ error,setError ] = useState(null)

  useEffect(()=> {
  
    fetch('http://localhost:1337/api/b/book')
      .then((val) => {
        if(val.status === 200)
          {
            val.json().then((res) => {
              setData(res.books)
            })
          }
        else 
          {
            val.json().then((res) => {
              setError(res.error)
            })
          }
      })
      .finally(() => {
        setIsPending(false)
      })


  },[])

  
  return { data,isPending,error }

}


