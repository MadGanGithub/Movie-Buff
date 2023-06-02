import React from 'react'
import { useNavigate } from 'react-router-dom';


const Card = ({id,title,lan,image}) => {
      const navigate=useNavigate()

      const handleClick=()=>{
        navigate(`/${id}`)
      }
  return (
    <div style={{paddingTop:100}}>
      <div className="card sm" style={{borderRadius:20,backgroundColor:"#303030"}}>
        <img className="card-img-top" src={image} alt="Card image cap" style={{borderRadius:20}}/>
        <div className="card-body" style={{color:"white"}}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text"> {lan}</p>
          <a onClick={handleClick} className="btn" style={{backgroundColor:"#F5E41E",color:"black"}}>Show Details</a>
        </div>
</div>
<br></br>

    </div>
  )
}

export default Card
