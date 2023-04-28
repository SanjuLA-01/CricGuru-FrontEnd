import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Instructions } from '../components/Instructions';
import { useDispatch, useSelector } from 'react-redux';
import { processVideo, uploadFile } from '../actions/actions';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Card,
  Grid,
  Stack,
  Backdrop,
  CircularProgress,
} from '@mui/material';

import UploadIcon from '@mui/icons-material/Upload';
import MemoryIcon from '@mui/icons-material/Memory';
import { CustomAlert } from '../components/CustomAlert';

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
  padding: 40,
};

const innerCardWrapper = {
  width: '80%',
  margin: 'auto',
  paddingBottom: 20,
  marginBottom: 20,
};

const title = {
  fontSize: 50,
  textAlign: 'center',
  lineHeight: '45px',
};

const buttonWrapper = {
  marginTop: 20,
};

const description = {
  title: 'Instructions and Requirements for the Video',
  points: [
    "Video should be less than 5 seconds and should cover the batsman's sideview.",
    'Video quality should be 4k 30fps or more.',
    'Video file format should be in .MOV format.',
    'Select the played areas as indoor/outdoor.',
    'Select the playing hand as left/right.',
  ],
};

export const VideoProcessor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { uploadProcessing, data, error } = useSelector(
    (state) => state.fileUpload
  );
  const { processing, processedData, processError } = useSelector(
    (state) => state.processVideo
  );

  useEffect(() => {
    if (processedData) {
      navigate('/results-view');
    }
  }, [processedData, navigate]);

  const [area, setArea] = useState('In');
  const [hand, setHand] = useState('Right');

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  const handleHandChange = (event) => {
    setHand(event.target.value);
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    dispatch(uploadFile(selectedFile));
  };

  const handleVideoProcessing = (event) => {
    dispatch(processVideo(hand, area));
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={processing || uploadProcessing}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <div style={outerWrapper}>
        <Card style={outerCardWrapper}>
          <Instructions description={description} />
          <div style={innerCardWrapper}>
            <Grid item container>
              <Grid item xs={6}>
                <FormControl>
                  <FormLabel>Area</FormLabel>
                  <RadioGroup
                    row
                    name='controlled-radio-buttons-group'
                    value={area}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value='In'
                      control={<Radio />}
                      label='Indoor'
                    />
                    <FormControlLabel
                      value='Out'
                      control={<Radio />}
                      label='Outdoor'
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <FormLabel>Hand</FormLabel>
                  <RadioGroup
                    row
                    name='controlled-radio-buttons-group'
                    value={hand}
                    onChange={handleHandChange}
                  >
                    <FormControlLabel
                      value='Right'
                      control={<Radio />}
                      label='Right Hand'
                    />
                    <FormControlLabel
                      value='Left'
                      control={<Radio />}
                      label='Left Hand'
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <div style={{ marginTop: 10 }}>
              {data && (
                <CustomAlert
                  message={`File ${data.name} has been successfully uploaded!`}
                  type={'success'}
                />
              )}
              {error && (
                <CustomAlert
                  message={`File uploading has been failed!`}
                  type={'error'}
                />
              )}
              {processError && (
                <CustomAlert
                  message={`Process ${data.name} video has been failed!`}
                  type={'error'}
                />
              )}
            </div>
            <Stack
              style={buttonWrapper}
              direction='row'
              alignItems='center'
              spacing={2}
            >
              <Button
                variant='contained'
                component='label'
                startIcon={<UploadIcon />}
              >
                {data ? 'Change' : 'Upload'}
                <input
                  hidden
                  multiple
                  type='file'
                  onChange={handleFileUpload}
                />
              </Button>
              <Button
                disabled={!data}
                variant='contained'
                component='label'
                onClick={handleVideoProcessing}
                endIcon={<MemoryIcon />}
              >
                Process
              </Button>
            </Stack>
          </div>
        </Card>
      </div>
    </>
  );
};
