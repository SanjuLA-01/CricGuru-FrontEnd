import React from 'react';
import { Card } from '@mui/material';

const innerCardWrapper = {
  margin: 'auto',
  paddingBottom: 20,
  marginBottom: 20,
  textAlign: 'left',
  marginTop: 20,
};

const title = {
  fontSize: 25,
  fontWeight: 500,
  textAlign: 'center',
};

const descriptionRow = {
  fontSize: 18,
  fontWeight: 500,
  lineHeight: '15px',
  marginLeft: 10,
};

export const Injuries = ({ injuries }) => {
  return (
    <Card style={innerCardWrapper}>
      <h2 style={title}>Injuries</h2>
      <div>
        {injuries &&
          injuries.map((item, index) => (
            <p key={index} style={descriptionRow}>
              {index + 1}. {item}
            </p>
          ))}
      </div>
    </Card>
  );
};
