import React from 'react';

function Website() {
  return (
    <div className="website">
      <h1>Website Plans</h1>
      <div className="website-plans">
        <p>In Dr. Coady's lab we have been using a videoconferencing platform that allows for spatial collaborations.
          Each individual has a video bubble that they can move around on the canvas to hear only those participants that they are next to.
          This has allowed for images and documents to appear on the website surface, but we have ideas for how to incoporate maps and satellite imagery to create an interaction space specifically tailored to interactive briefings on geospatial topics.
          This development work has started on top of the Agora videoconferencing platform.</p>
        <ul>
          <li>Secure videoconferencing</li>
          <li>Integrated mapping tools for annotations and analytics</li>
          <li>Persistent spaces and transient event spaces</li>
          <li>Mobile optimized views</li>
        </ul>
      </div>
      
      <div className="image-placeholders">
        <img src="/photos/spatialchat.png" alt="Spatial Chat" width="400" />
      </div>
    </div>
  );
}

export default Website;