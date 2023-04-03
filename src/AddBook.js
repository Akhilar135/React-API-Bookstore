import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const AddProduct = ({onAdd}) => {
    const[pname,setName]= useState('')
    const[price,setPrice]= useState('')
    const[img,setImage]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log('Submit Clicked');
        onAdd({pname,price,img})

        setName('')
        setPrice(0)
        setImage('')
    }

  return (
    <div>
        <Card style={{width:'50%' , display:''}}>
            <Card.Body>
                <Card.Title>
                    Add Book
                </Card.Title>
                
        <form onSubmit={onSubmit}>
            <label>Book Name: </label><br></br>
            <input type='text' placeholder='Enter Book Name' value = {pname} onChange={(e)=>setName(e.target.value)} ></input><br></br>
            <label>Price:</label><br></br>
            <input type='number' value = {price} onChange={(e)=>setPrice(e.target.value)}></input><br></br>
            <label>Image:</label><br></br>
            <input type='file' value={img} onChange={(e)=>setImage(e.target.value)}></input>
            <input type='submit' value='Add'></input>
        </form>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default AddProduct