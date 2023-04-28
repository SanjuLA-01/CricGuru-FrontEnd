import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Card, Stack, Button } from '@mui/material';
import { Injuries } from '../components/Injuries';
import { NoInjury } from '../components/NoInjury';
import HomeIcon from '@mui/icons-material/Home';

const outerWrapper = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const cardWrapper = {
  padding: 20,
};

const gridContainer = {
  marginTop: 10,
};

const imageCard = {
  marginTop: 10,
  marginBottom: 10,
  height: 280,
  width: '100%',
  border: 1,
  borderStyle: 'solid',
  borderColor: 'gray',
  borderRadius: 5,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
};

const buttonWrapper = {
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'right',
};

const topic = {
  fontSize: 22,
  fontWeight: 500,
};

const resultCard = {
  padding: 10,
};

const success = {
  ...resultCard,
  backgroundColor: '#4caf50',
};

const error = {
  ...resultCard,
  backgroundColor: '#ef5350',
};

const sampleInjuries = [
  'Ankle sprains',
  'Knee injuries',
  'Lower back pain',
  'Shoulder injuries',
];

const sampleInjuries1 = [
  'Ankle sprains',
  'knee inuries',
  'Hamstring strains',
  'Groin strains',
  'Lower back pain',
];

const sampleInjuries2 = [
  'Shoulder injuries',
  'Elbow injuries',
  'Hand and finger injuries',
  'Back injuries',
];

export const ResultsView = () => {
  const { processing, processedData, processError } = useSelector(
    (state) => state.processVideo
  );
  return (
    <>
      {!processing && (
        <div style={outerWrapper}>
          <Card style={cardWrapper}>
            <h1>Extracted Images</h1>
            <Grid style={gridContainer} item container spacing={2}>
              <Grid textAlign={'center'} item xs={4}>
                <Card style={topic}>Stance</Card>
                <img
                  style={imageCard}
                  src='http://localhost:5000/images/stance.jpg'
                  alt='Stance'
                ></img>
                <Card
                  style={processedData.stance === 'correct' ? success : error}
                >
                  {processedData.stance}
                </Card>
                {processedData.stance === 'correct' ? (
                  <NoInjury />
                ) : (
                  <Injuries injuries={sampleInjuries} />
                )}
              </Grid>
              <Grid textAlign={'center'} item xs={4}>
                <Card style={topic}>Leg Movement</Card>
                <img
                  style={imageCard}
                  src='http://localhost:5000/images/legMovement.jpg'
                  alt='legMovement'
                ></img>
                <Card style={processedData.leg === 'correct' ? success : error}>
                  {processedData.leg}
                </Card>
                {processedData.leg === 'correct' ? (
                  <NoInjury />
                ) : (
                  <Injuries injuries={sampleInjuries1} />
                )}
              </Grid>
              <Grid item textAlign={'center'} xs={4}>
                <Card style={topic}>Shot Execution</Card>
                <img
                  style={imageCard}
                  src='http://localhost:5000/images/shotExecution.jpg'
                  alt='shotExecution'
                ></img>
                <Card
                  style={processedData.shot === 'correct' ? success : error}
                >
                  {processedData.shot}
                </Card>
                {processedData.shot === 'correct' ? (
                  <NoInjury />
                ) : (
                  <Injuries injuries={sampleInjuries2} />
                )}
              </Grid>
            </Grid>
            <div style={buttonWrapper}>
              <Stack direction='row' textAlign={'right'} spacing={2}>
                <a href='/'>
                  <Button
                    variant='contained'
                    component='label'
                    endIcon={<HomeIcon />}
                  >
                    Home
                  </Button>
                </a>
              </Stack>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
