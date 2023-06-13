import cn from 'classnames';

import './styles.scss';

type Props = {
  typing: boolean;
  profileAvatar?: string;
}

function Loader({ typing, profileAvatar }: Props) {
  return (
    <div className={cn('loader', { active: typing }) + " rcw-message"}>
      {profileAvatar ? <img
        src={profileAvatar}
        className={`rcw-avatar rcw-avatar-client`}
        alt="profile"
      /> : ""}
      <div className='rcw-response'>
        <div className='rcw-message-text'>
          <span className="loader-dots"></span>
          <span className="loader-dots"></span>
          <span className="loader-dots"></span>
        </div>
    </div>
    
    </div>
  );
}

export default Loader;
