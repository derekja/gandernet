import React from 'react';

function Website() {
  return (
    <div className="website">
      <h1>Website Plans</h1>
      <div className="website-plans">
        <p>Our website will feature a modern, responsive design with:</p>
        <ul>
          <li>Interactive elements</li>
          <li>Real-time updates</li>
          <li>Secure user authentication</li>
          <li>Mobile optimization</li>
        </ul>
      </div>
      
      <div className="image-placeholders">
        <img src="https://via.placeholder.com/600x400" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/600x400" alt="Placeholder 2" />
      </div>
    </div>
  );
}

export default Website;