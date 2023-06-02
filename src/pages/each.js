import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Each = () => {
  const [each, setEach] = useState({});
  const [stripped,setStripped]=useState("")
  const { id } = useParams();
  const navigate=useNavigate()

  const stripTags = (html) => {
    if (!html || typeof html !== 'string') {
      return '';
    }
    return html.replace(/<[^>]*>/g, '');
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setEach(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    console.log(each); 
    setStripped(stripTags(each.summary))
  }, [each]);

  const handleClick=()=>{
    navigate(`/book/${id}`)
  }

  return (
    <div style={{ paddingTop: 100, paddingRight: 100, paddingLeft: 100, paddingBottom: 80, backgroundColor: '#1A1A1A' }}>
      {each && each.image && each.image.original ? (
        <div className="card" style={{ backgroundColor: '#212121', borderRadius: 50 }}>
          
          <div className="card-body" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${each.image.original})` }}>
          <div className='card-title' style={{ color: 'yellow',fontSize:40}}>{each.name}</div>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Language: {each.language}</p>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Type: {each.type}</p>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Summary: {stripped}</p>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Status: {each.status}</p>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Genres: {each.genres}</p>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Runtime: {each.runtime}</p>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Average Runtime: {each.averageRuntime}</p>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Premiered: {each.premiered}</p>
            <p className="card-text" style={{ color: 'whitesmoke' }}>Official Website:  <a href={each.officialSite}>{each.officialSite}</a></p>
          </div>
          <a onClick={handleClick} className="btn" style={{backgroundColor:"#F5E41E",color:"black"}}>Book</a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Each;
