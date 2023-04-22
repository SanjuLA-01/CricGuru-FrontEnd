import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '@mui/material';
import { Instructions } from '../components/Instructions';

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
};

const buttonWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const description = {
  title: 'About the application',
  points: [
    'This is a tempory descripton. Please replace',
    'This is a tempory descripton. Please replace',
    'This is a tempory descripton. Please replace',
    'This is a tempory descripton. Please replace',
  ],
};

export const LandingPage = () => {
  return (
    <div style={outerWrapper}>
      <Card style={outerCardWrapper}>
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
