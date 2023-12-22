import Tilt from 'react-parallax-tilt';

export interface IProfileProps {
  profileData: any
}

export default function Profile({ profileData }: IProfileProps) {
  const shareUrl = profileData.url;
  const title = profileData.title;
  return (<div className="wrapper">
 <Tilt
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
      </Tilt>

      <h2 className=" inner text-center blue">{profileData.label}</h2>
  </div>);
}
