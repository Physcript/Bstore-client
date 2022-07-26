
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useProduct } from '../hooks/useProduct'
import { Cards } from '../components/Cards'

export function LandingPage() {

const { data,isPending,error } = useProduct()

return (
    <div className="LandingPage">
        <Container>
            <div className="Card-Holder">
                { error && <div> { error } </div> } 
                { isPending && <div>Loading ...</div> }
                { data && data.map((book, index) => {
                    return (
                        <Cards key = { index } { ...book }/> 
                    )
                }) } 
            </div>
        </Container>
    </div>
  )
}
