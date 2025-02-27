import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="page profile-page">
      <h1>User Profile</h1>
      <p>This is a protected route. You can only see this if you are authenticated.</p>
      
      <div className="profile-info">
        <div className="profile-avatar">👤</div>
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Email: john.doe@example.com</p>
          <p>Member since: January 1, 2023</p>
        </div>
      </div>
      
      <div className="navigation">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Profile;
