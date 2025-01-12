import React from 'react';

function Members() {
  const members = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="members">
      <h1>Our Members</h1>
      <div className="member-list">
        {members.map(member => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;