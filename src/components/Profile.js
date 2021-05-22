import avatar from '../images/avatar.jpg';

const Profile = () => {
  return (
    <div className="Profile pt-3">
      <div className="container-md">
        <div className="Profile__content">
          <img className="Profile__avatar Avatar" src={avatar} alt="Аватар" />
          <div className="Profile__name">Дмитрий Бердников</div>
          <div className="Profile__city">Белгород</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
