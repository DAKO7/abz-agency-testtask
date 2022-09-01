import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Card from './components/Card';

import {
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  FormControl,
  TextField,
  CircularProgress,
  Tooltip,
} from '@mui/material';

function App() {
  const [users, setUsers] = React.useState([]);
  const [positions, setPositions] = React.useState([]);

  const [usersToShow, setUsersToShow] = React.useState(6);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');

  const inputFileRef = React.useRef(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [usersResponse, positionsResponse] = await Promise.all([
          axios.get('https://630e5cbb37925634187c3500.mockapi.io/users'),
          axios.get('https://630e5cbb37925634187c3500.mockapi.io/positions'),
        ]);

        setIsLoading(false);

        setUsers(usersResponse.data);
        setPositions(positionsResponse.data);
      } catch (err) {
        alert('Error fetching data');
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const onSignUp = async (obj) => {
    try {
      const worker = { username, email, phone, position, imageUrl };
      setUsers((prev) => [...prev, worker]);
      const {} = await axios.post('https://630e5cbb37925634187c3500.mockapi.io/users', worker);
      setUsers((prev) =>
        prev.map((users) => {
          return {
            ...users,
          };
        }),
      );
      axios.get('https://630e5cbb37925634187c3500.mockapi.io/users');
      setIsSubmitted(true);
    } catch (err) {
      alert('Unable to sign up');
      console.log(err);
    }
  };

  const showMore = () => {
    if (usersToShow === 6) {
      setUsersToShow(users.length);
      setIsExpanded(true);
    } else {
      setUsersToShow(6);
      setIsExpanded(false);
    }
    // usersToShow === 3 ? ( setUsersToShow(users.length), setIsExpanded(true) ) : (setUsersToShow(3), setIsExpanded(false))
  };

  const usersRef = React.useRef(null);
  const signUpRef = React.useRef(null);

  const executeScrollUsers = () => {
    usersRef.current.scrollIntoView({ behavior: 'smooth' });
  }; // run this function from an event handler or pass it to useEffect to execute scroll

  const executeScrollSignUp = () => {
    signUpRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const handleChangeFile = async (event) => {
  //   try {
  //     const formData = new FormData();
  //     const file = event.target.files[0];
  //     formData.append('image', file);
  //     const { data } = await axios.post('', formData);
  //     console.log(data.url);
  //     setImageUrl(data.url);
  //   } catch (err) {
  //     alert('Unable to add an image');
  //     console.warn(err);
  //   }
  // };

  return (
    <div className="App clear">
      <Header scrollToUsers={executeScrollUsers} scrollToSignUp={executeScrollSignUp} />

      <div className="info-section">
        <div className="card-overlay">
          <img
            src="/img/pexels-alexandr-podvalny-1227513.jpeg"
            alt="pexels-alexandr-podvalny"></img>
        </div>
        <div className="info-section-content d-flex flex-column align-center">
          <h1>Test assignment for front-end developer</h1>
          <p>
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they'll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
          <button onClick={executeScrollSignUp} className="btn-primary">
            Sign up
          </button>
        </div>
      </div>

      <div className="cards-section d-flex flex-column align-center" ref={usersRef}>
        <h1 className="mb-50">Working with GET request</h1>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <ul className="cards d-flex justify-between flex-wrap">
            {[...users]
              .reverse()
              .slice(0, usersToShow)
              .map((obj) => (
                <Card
                  username={obj.username}
                  position={obj.position}
                  email={obj.email}
                  phone={obj.phone}
                  imageUrl={obj.imageUrl}
                />
              ))}
          </ul>
        )}
        {users.length > 6 ? (
          <button className="btn-primary" onClick={showMore}>
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        ) : (
          ''
        )}
      </div>

      <div className="form-section d-flex flex-column align-center" ref={signUpRef}>
        {isSubmitted ? <h1>User successfully registered</h1> : <h1>Working with POST request</h1>}
        {isSubmitted ? (
          <img className="mt-50" src="img/success-image.svg" alt="Success" />
        ) : (
          <div className="job-form d-flex flex-column" onSubmit={onSignUp}>
            <TextField
              id="outlined-name"
              label="Your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              className="input-email"
              id="outlined-name"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              helperText="+38 (XXX) XXX - XX - XX"
              id="demo-helper-text-aligned"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {isLoading ? (
              <CircularProgress className="loading" />
            ) : (
              <FormControl className="position">
                <FormLabel id="demo-controlled-radio-buttons-group">Select your position</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  // value={value}
                  // onChange={handleChange}
                >
                  {positions.map((obj) => (
                    <FormControlLabel
                      control={<Radio />}
                      label={obj.name}
                      value={obj.name}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
            <TextField
              ref={inputFileRef}
              onChange={(e) => setImageUrl(e.target.value)}
              // onChange={handleChangeFile}
              className="photo-uploader"
              name="upload-photo"
              type="file"
            />
            {/* <input ref={inputFileRef} type="file" onChange={handleChangeFile} /> */}
            {/* <img src={`http://localhost:3000${imageUrl}`} alt="upd" /> */}
            <button
              onClick={onSignUp}
              className="btn-primary btn-form"
              type="submit"
              value="submit">
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
