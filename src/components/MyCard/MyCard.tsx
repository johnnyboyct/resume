import { SiReact } from '@icons-pack/react-simple-icons';
import { useTheme } from '@mui/material';

import Share from '../Share';

export interface IMyCardProps {
  profileData:any
}

export default function MyCard({ profileData }: IMyCardProps) {
  const theme = useTheme();

  return <div className="wrapper">

<SiReact title='My title' color='#61DAFB' size={24} />

    {/* <Tilt
      className="parallax-effect-glare-scale inner"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <div className="inner-element">
        <img
          role="presentation"
          className="full-block"
          src={profileData.picture}
          width="100%"
          alt="profile pic"
        />
        <h1 className="text-title-name">{profileData.name}</h1>

      </div>
    </Tilt> */}

    <h2 className=" inner text-center blue">{profileData.label}</h2>
    <Share />
  </div>;
}
