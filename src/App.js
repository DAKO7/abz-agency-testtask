import * as React from 'react';
import Button from '@mui/material/Button';

import {
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  FormControl,
  FilledInput,
  FormHelperText,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

function App() {
  return (
    <div className="App clear">
      <header className="d-flex justify-between align-center">
        <div className="headerLeft">
          <img src="/img/Logo.svg" alt="Logo"></img>
        </div>
        <ul className="d-flex headerRight">
          <li className="mr-10">
            <button className="btn-primary">Users</button>
          </li>
          <li>
            <button className="btn-primary">Sign up</button>
          </li>
        </ul>
      </header>

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
          <button className="btn-primary">Sign up</button>
        </div>
      </div>

      <div className="cards-section d-flex flex-column align-center">
        <h1>Working with GET request</h1>
        <div className="cards d-flex justify-between">
          <div className="card d-flex flex-column align-center">
            <img width={70} height={70} src="/img/photo-cover.svg" alt="avatar"></img>
            <p className="card-name">Takamaru Ayako Jurrien</p>
            <div className="card-info">
              <p className="card-info-job">Lead Independent Director</p>
              <p className="card-info-email">Takamuru@gmail.com</p>
              <p className="card-info-phone">+38 (098) 278 90 24</p>
            </div>
          </div>
          <div className="card d-flex flex-column align-center">
            <img width={70} height={70} src="/img/photo-cover.svg" alt="avatar"></img>
            <p className="card-name">Takamaru Ayako Jurrien</p>
            <div className="card-info">
              <p className="card-info-job">Lead Independent Director</p>
              <p className="card-info-email">Takamuru@gmail.com</p>
              <p className="card-info-phone">+38 (098) 278 90 24</p>
            </div>
          </div>
          <div className="card d-flex flex-column align-center">
            <img width={70} height={70} src="/img/photo-cover.svg" alt="avatar"></img>
            <p className="card-name">Takamaru Ayako Jurrien</p>
            <div className="card-info">
              <p className="card-info-job">Lead Independent Director</p>
              <p className="card-info-email">Takamuru@gmail.com</p>
              <p className="card-info-phone">+38 (098) 278 90 24</p>
            </div>
          </div>
        </div>
        <button className="btn-primary">Show more</button>
      </div>

      <div className="form-section d-flex flex-column align-center">
        <h1>Working with POST request</h1>
        <div className="job-form d-flex flex-column">
          <TextField id="outlined-name" label="Your name" />
          <TextField className="input-email" id="outlined-name" label="Email" />
          <TextField
            helperText="+38 (XXX) XXX - XX - XX"
            id="demo-helper-text-aligned"
            label="Phone"
          />
          <FormControl className="position">
            <FormLabel id="demo-controlled-radio-buttons-group">Select your position</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel
                value="frontenddev"
                control={<Radio />}
                label="Frontend developer"
              />
              <FormControlLabel value="backenddev" control={<Radio />} label="Backend developer" />
              <FormControlLabel value="designer" control={<Radio />} label="Designer" />
              <FormControlLabel value="qa" control={<Radio />} label="QA" />
            </RadioGroup>
          </FormControl>
          <TextField className="photo-uploader" name="upload-photo" type="file" />
        </div>
      </div>
    </div>
  );
}

export default App;
