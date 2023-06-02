import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = () => {
  const [each, setEach] = useState({});
  const [name, setName] = useState('');
  const [tickets, setTickets] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

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
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const userDetails = {
      name: name,
      tickets: tickets,
      movie: each.name,
      showId: id,
    };
    sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
    toast.success(`Ticket Booked Successfully by ${name}`)
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: '#1A1A1A', paddingTop: 200, display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
      <div class="card" style={{ backgroundColor: '#303030', width: 400, height: 240, padding: 10 }}>
        <h5 class="card-title" style={{ color: '#F5E41E' }}>Ticket Booking</h5>
        <div class="card-body">
          <form onSubmit={handleClick}>
            <div className='container'>
              <div class="row">
                <div class="col">
                  <label style={{ color: 'white' }}>Movie: </label>
                </div>
                <div class="col">
                  <input type='text' value={each.name} disabled />
                </div>
                <div class="w-100"></div>
                <div class="col">
                  <label style={{ color: 'white' }}>Name:</label>
                </div>
                <div class="col">
                  <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="w-100"></div>
                <div class="col">
                  <label style={{ color: 'white' }}>No Of Tickets: </label>
                </div>
                <div class="col">
                  <input type='number' value={tickets} onChange={(e) => setTickets(e.target.value)} required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div class="col">
                  <input type='submit' value='Done' style={{ backgroundColor: '#F5E41E', borderRadius: 20, width: '50%', marginLeft:80 }} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
