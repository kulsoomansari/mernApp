import { useEffect, useState } from "react";
import axios from 'axios';
import Editable from "../materialTable/Editable";
function Users() {
  const [state, setstate] = useState([]);
  const [cols, setcols] = useState([
    {title: 'Title', field: 'title'},
    { title: 'Email', field: 'email' }
  ])
  useEffect(() => {
   async function fetchusers(){
     const users = await axios.get('http://localhost:4000/api/users')
     console.log(users.data.data);
      setstate(users.data.data)
   }
   fetchusers()
  }, [])


  // const handleDelete = (id) =>{
  //   axios.delete("http://localhost:4000/api/users/" + id)
  //   .then((res) => {
  //     console.log(res.data);
  //     setmsg(`${id} is deleted successfully`);
  //   }) 
  //   .catch((err) => console.log(err));
  //   window.location = '/users'
  // }  
  return (
   <Editable users={state} cols={cols}/>
  );
  }
  export default Users;

