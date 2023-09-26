import React,{useState} from 'react'

//import styles for page
import './Home.css';

//import components below
import Box from '../Components/Box.js'

//import users data below
import usersData from '../Static/user.js'

function Home() {
  const [users,setUsers] =useState(usersData);
  const [searchValue,setSearchValue]=useState("")

  const handleFilter = (e) =>{
    const result = usersData.filter((user)=>user.name.toLowerCase().includes(e.target.value.toLowerCase()));
    console.log("result", result)
    setUsers(result)
  }
  
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',marginTop:30}}>
      <input placeholder='search...' className='input_box' onChange={handleFilter}/>
    </div>
    <div className='user_wrapper'>
      <div className='box_wrapper_upper'>
        {
          users&&users.map((user) => (
            <Box name={user.name} role={user.role} admin={user.isAdmin} />
          ))
        }
        {
          (users.length==0)&&<p>No users found</p>
        }
      </div>
      {/* <Box/> */}
    </div>
    </>
  )
}

export default Home