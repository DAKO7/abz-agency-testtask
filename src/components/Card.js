import React from 'react';

export default function Card({ username, position, email, phone, imageUrl }) {
  return (
    <li className="card d-flex flex-column align-center">
      <img width={70} height={70} src={false ? imageUrl : 'img/photo-cover.svg'} alt="avatar"></img>
      <p className="card-name">{username}</p>
      <div className="card-info">
        <p className="card-info-job">{position}</p>
        <p className="card-info-email">{email}</p>
        <p className="card-info-phone">{phone}</p>
      </div>
    </li>
  );
}
