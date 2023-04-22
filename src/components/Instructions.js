import React from 'react';

const innerCardWrapper = {
  width: '80%',
  margin: 'auto',
  paddingBottom: 20,
  marginBottom: 20,
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
        {description.points &&
          description.points.map((item, index) => (
            <p key={index} style={descriptionRow}>
              {index + 1}. {item}
            </p>
          ))}
      </div>
    </div>
  );
};
