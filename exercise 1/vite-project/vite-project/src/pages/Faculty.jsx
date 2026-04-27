const facultyMembers = [
  { id: 1, name: 'I Ravindra Kumar', role: 'Professor of Computer Science', specialization: 'Web Application Development' },
  { id: 2, name: 'A Sandhya', role: 'Assistant Professor', specialization: 'Intellectual Property Rights' },
  { id: 3, name: 'P Bharath Kumar Chowdary', role: 'Assistant Professor', specialization: 'Operating Systems' },
  { id: 4, name: 'K Haripriya', role: 'Assistant Professor', specialization: 'Software Engineering' },
  { id: 5, name: 'A Sireesha', role: 'Professor of Electronics and Communication', specialization: 'Computer Organization' },
  { id: 6, name: 'Pratap Joshi', role: 'Visiting Professor', specialization: 'Design and Analysis of AAlgorithms' }
];

const Faculty = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Our Esteemed Faculty</h1>
        <p>Learn from visionary leaders and industry experts who are dedicated to mentoring the next generation of innovators.</p>
      </div>

      <div className="grid-container">
        {facultyMembers.map(member => (
          <div key={member.id} className="card">
            <span className="faculty-role">{member.role}</span>
            <h3>{member.name}</h3>
            <p><strong>Specialization:</strong> {member.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
