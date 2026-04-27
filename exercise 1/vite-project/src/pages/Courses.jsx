const courses = [
  { id: 1, title: 'B.Tech in Computer Science', duration: '4 Years', department: 'Engineering' },
  { id: 2, title: 'M. Tech in VSLI ', duration: '2 Years', department: 'Engineering' },
  { id: 3, title: 'M.Sc in Data Analytics', duration: '2 Years', department: 'Computing' },
  { id: 4, title: 'B.Sc. in Applied Physics', duration: '3 Years', department: 'Physics' },
  { id: 5, title: 'B. Tech in Robotics & AI', duration: '4 Years', department: 'Engineering' },
  { id: 6, title: 'Master of Business Administration', duration: '2 Years', department: 'Management' }
];

const Courses = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Academic Programs</h1>
        <p>Discover our comprehensive range of programs designed to equip you with the knowledge and skills needed for success in your chosen field.</p>
      </div>

      <div className="grid-container">
        {courses.map(course => (
          <div key={course.id} className="card">
            <h3>{course.title}</h3>
            <p>A comprehensive program focusing on modern industry practices and theoretical foundations.</p>
            <div className="course-meta">
              <span>{course.department}</span>
              <span>{course.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
