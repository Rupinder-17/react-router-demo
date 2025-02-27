import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>This is the contact page of our React Router demo project.</p>
      <p>You can reach us at example@reactrouter.com</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Contact;
