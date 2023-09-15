import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const {user} = useContext(AuthContext)
 
  const handeleCheckout = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;

    const bookings = {
        customerName: name,
        email,
        img,
        date,
        service:title,
        service_id:_id,
        price:price
    }
    console.log(bookings);
    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookings)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    form.reset()

  }


  return (
    <div>

      
      <div className="card-body">
      <h2 className="text-3xl text-orange-400 text-center">Book service: {title} </h2>
            <form onSubmit={handeleCheckout}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={`$` + price}
                  className="input input-bordered"
                />
              </div>
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Order Confirm" />
              </div>
              </form>
            </div>
          </div>
  );
};

export default Checkout;
