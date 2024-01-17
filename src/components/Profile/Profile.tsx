import { Typography } from '@mui/material';
import './Profile.css';

import Tilt from 'react-parallax-tilt';

export interface IProfileProps {
  profileData: any
  theme: any
}

export default function Profile({ profileData, theme }: IProfileProps) {
  const shareUrl = profileData.url;
  const title = profileData.title;
  return (
    <div className="wrapperProfile">
 <Tilt
        className="parallax-effect-glare-scale inner"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
    >
      <Typography className="text-title-name" variant="h1" component="h1" noWrap={true}>{profileData.name}</Typography>
      <Typography className=" inner text-title-label blue" variant="h2" component="h2" noWrap={true}>{profileData.label}</Typography>
        <div className="inner-element">
          <img
            role="presentation"
            className="full-block"
            src={profileData.picture}
            width="100%"
            alt="profile pic"
          />
        </div>
      </Tilt>


    <div className="banner" style={{ backgroundColor: theme.palette.primary }}>
      <div className="line">
        <span>John Marczak</span>
      </div>
      <div className="line">
        <span>Full Stack</span>
      </div>
      <div className="line">
        <span>Web Developer</span>
      </div>
      <div className="line">
        <span>For Hire</span>
      </div>
    </div>
  </div>);
}
