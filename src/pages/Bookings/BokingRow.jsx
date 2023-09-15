import React from "react";

const BokingRow = ({ booking, handleDelete, handleBookingConfirm}) => {
  const { _id, customerName, email, service, price, img, status } = booking;
  


  
  return (
    <div className="items-center table">
      <tr>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
          </div>
        </td>
        <td>{customerName}</td>
        <td>{service}</td>
        <td>{email}</td>
        <td>${price}</td>
        <td>
          {
            status === 'confirm' ? <span className="text-lg text-orange-200">Confirmed</span>:
            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
        </td>
      </tr>
    </div>
  );
};

export default BokingRow;
