import './Experience.css';

import * as React from 'react';

import { Timeline } from '@mui/lab';
import {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { useTheme } from '@mui/material';

import ExperienceItem from '../ExperienceItem';

export interface IExperienceProps {
  workData: any
  showDateStats: boolean
}

export default function Experience({ workData, showDateStats = true }: IExperienceProps) {
  const theme = useTheme()

  return (
    <div className="wrapper">
      <div className="border" style={{ border: '0.44rem double ' + theme.palette.primary.contrastText, backgroundColor: theme.palette.primary.paperBG }}>
        <Timeline
          position="alternate"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2
            },
            marginTop: '0px',
            paddingTop: '0px'
          }}
        >
          {workData.map((val: any, index: any) => (
            <ExperienceItem key={index} workItemData={val} showDateStats={showDateStats} />
          ))}
        </Timeline>
      </div>
    </div>
  )
}
