import React from 'react';

export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <div className="headerLeft">
        <img src="/img/Logo.svg" alt="Logo"></img>
      </div>
      <ul className="d-flex headerRight">
        <li className="mr-10">
          <button onClick={props.scrollTo} className="btn-primary">
            Users
          </button>
        </li>
        <li>
          <button className="btn-primary">Sign up</button>
        </li>
      </ul>
    </header>
  );
}
