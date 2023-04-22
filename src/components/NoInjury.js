import React from 'react';
import { Card } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const cardStyle = {
  marginTop: 20,
  marginBottom: 10,
};

export const NoInjury = () => {
  return (
    <Card style={cardStyle}>
      <SentimentSatisfiedAltIcon
        sx={{ fontSize: 70 }}
        style={{ color: 'green' }}
      />
      <h1>You are Good!</h1>
    </Card>
  );
};
