import React from 'react';
import { Grid } from '@mui/material';

const innerCardWrapper = {
  width: '80%',
  margin: 'auto',
  paddingBottom: 20,
  marginBottom: 20,
  zIndex:100
};

const title = {
  fontSize: 30,
  fontWeight: 500,
  textAlign: 'center',
};

const descriptionRow = {
  fontSize: 18,
  fontWeight: 500,
  lineHeight: '15px',
};

export const Instructions = ({ description }) => {
  return (
    <div style={innerCardWrapper}>
      <h2 style={title}>{description.title}</h2>
      <div>
        <Grid container spacing={2}>
          {description.points &&
            description.points.map((item, index) => (
              <><Grid item xs={1}>
                <span style={descriptionRow}>{index + 1}.</span>
              </Grid>
                <Grid item xs={11}>
                  <span style={descriptionRow}>{item}</span>
                </Grid></>
              // <p key={index} style={descriptionRow}>
              //   {index + 1}. {item}
              // </p>
            ))}
        </Grid>
      </div>
    </div>
  );
};
