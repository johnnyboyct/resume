import './References.css';

import React from 'react';

import { useTheme } from '@emotion/react';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Box,
  Button,
  MobileStepper,
  Paper,
  Typography,
} from '@mui/material';

export interface IReferencesProps {
  references: any
}

export default function References({ references }: IReferencesProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = references.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


  return (
    <div className="wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>Reference:</Typography>
        </Paper>
        <Box sx={{ width: '100%', p: 2 }}>
          <div className="quote-box">
            <div className="quote">
              <blockquote>
                {references[activeStep].reference}
              </blockquote>
            </div>
            <div className="name">
              <Badge color="secondary"
                badgeContent={references[activeStep].name}
                className="badge"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}>

                <Avatar {...stringAvatar(references[activeStep].name)} />

                {/* {references[activeStep].name} */}
              </Badge>
            </div>
          </div>

        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Box>


    </div>);
}
