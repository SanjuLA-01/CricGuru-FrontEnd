import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '@mui/material';
import { Instructions } from '../components/Instructions';
import cricketer from '../assets/images/cricketer.png'

const outerWrapper = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const outerCardWrapper = {
  width: '80%',
  height: '80vh',
  margin: 'auto',
};

const title = {
  fontSize: 50,
  textAlign: 'center',
  lineHeight: '45px',
  color:'#2196f3'
};

const buttonWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const description = {
  title: 'About the application',
  points: [
    'Welcome you to the CricGuru',
    'This system provides the solution to analyze the correctness of the cricket batting techniques and movements and aware about the injuries that can occur due to incorrect batting techniques and movements.',
    'Currently this sytem is only effective for single person batting drills.',
    'Defense strikes only.',
  ],
};

export const LandingPage = () => {
  return (
    <div style={outerWrapper}>
      <Card className='landing-card' style={outerCardWrapper}>
        <img src={cricketer}></img>
        <h1 style={title}>CricGuru</h1>
        <Instructions description={description} />
        <div style={buttonWrapper}>
          <Link to='/video-processor'>
            <Button variant='contained'>Get Started</Button>
          </Link>
        </div>
       
      </Card>
    </div>
  );
};
