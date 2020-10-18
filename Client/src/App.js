import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const App = () => {
const [hello, setHello] = useState(null)

const axiosInstance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})

  //automatically gets called when component renders
  useEffect(()=>{
    axiosInstance.get('/posts')
    .then((res)=>{
      console.log(res.data)
      // setHello(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }) 
   
  return (
    <div>
      {hello}
    </div>
  )
}


export default App;
