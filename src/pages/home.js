import React, { useEffect, useState } from 'react';
import Card from '../components/card.js';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: '#1A1A1A',overflowX: 'hidden'}}>
      <div className="row" style={{paddingLeft:220,paddingRight:220}}>
        {data.map((each) => (
          <div className="col-md-6 col-sm-12" key={each.show.id}>
            <Card id={each.show.id} title={each.show.name} lan={each.show.language} image={each.show.image.original} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
