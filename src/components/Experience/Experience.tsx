import './Experience.css';

import * as React from 'react';

import { Timeline } from '@mui/lab';
import {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import ExperienceItem from '../ExperienceItem';

export interface IExperienceProps {
  workData: any
}

export default function Experience({ workData }: IExperienceProps) {
  console.log(workData)

  return (
    <div className="wrapper">
      <div className="border">
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2
          }
        }}
      >
        {workData.map((val: any, index: any) => (
          <ExperienceItem key={index} workItemData={val} />
        ))}
        </Timeline>
      </div>
    </div>
  )
}
