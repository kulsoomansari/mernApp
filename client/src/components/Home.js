import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import PostUI from './PostUI';

export default function Home() {
  const [state, setstate] = useState([])
  const [msg, setmsg] = useState('')
  useEffect(() => {
    console.log('i am in useeffect of posts')        
          axios.get('http://localhost:4000/api/posts/')
          .then((res) => {
            console.log(res.data);
            setstate(res.data.data);
          })
          .catch((e) => console.log(e));
          setmsg('')
      }, []);
  return (
    <div>
      {state.map((item, index)=>(
        <>
        <PostUI item={item} index={index}/> 
        </>        
      ))}
      </div>
  )
}
