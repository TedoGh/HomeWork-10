import ProfileImage from "../assets/img/profile-card.jpg";

const ProfileCard = () => {
  return (
    <div className="portfolio">
      <img src={ProfileImage} className="profile-image" />
      <h1>Tedo Ghachava</h1>
      <div className="content">
        <p>
          I'm a front end web developer passionate about creating awesome web
          applications.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
