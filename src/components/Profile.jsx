import React from 'react';

const Profile = () => {
  return (
    <>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="John Doe"
        age={30}
        greeting={
          <div>
            <strong>Hi! My Name Is Faraz</strong>
          </div>
        }
      >
        <p>Hobbies: Cricket, Travelling</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
};

export default Profile;

const ProfileCard = (props) => {
  const { name, age, greeting, children } = props;
  return (
    <div className="profile-card">
      <h1>{name}</h1>
      <h2>{age}</h2>
      {greeting}
      {children}
    </div>
  );
};
