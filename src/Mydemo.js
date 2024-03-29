import React from 'react'
import './Demo.css';
let user ={
    name:"Shivani Shinde",
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:90,
  
}
function MyButton(){
    return(
      <div>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
      </div>
      
    );
  }
export default function Mydemo() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} alt={'Photo of'+user.name} style={{width:user.imageSize,height:user.imageSize}} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda possimus, alias et omnis iure sint harum iusto. Voluptatum optio quibusdam voluptate expedita consequuntur eius suscipit repellendus soluta laudantium qui.</p>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
      <br />
      <div className="blank">  
        <h2>welcome to My app</h2>
        <MyButton/> 
      </div>
    </div>
  )
}
