import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BokingRow from "./BokingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = id =>{
    const proceed = confirm('Are You sure You want to delete');
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`, {
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount>0){
          alert('Deleted successful')
          const remaining = bookings.filter(booking => booking._id !== id)
          setBookings(remaining)
        }
      })
    }
  }
  const handleBookingConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`, {
      method:'PATCH',
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        // update state
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining]
        setBookings(newBookings)
      }
    })
  }

  return (
    <div>
      <h1>Bookings: {bookings.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <td>Photo</td>
              <td>Name</td>
              <td>Service</td>
              <td>Favorite Color</td>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking =><BokingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
                ></BokingRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
