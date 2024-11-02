// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Add your own CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Student Portal</h1>
        <p>Your one-stop solution for managing your academic journey.</p>
      </header>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Course Management</h3>
            <p>View and manage your courses.</p>
            <Link to="/courses" className="feature-link">Go to Courses</Link>
          </div>
          <div className="feature-item">
            <h3>Timetable</h3>
            <p>Check your class schedule and events.</p>
            <Link to="/timetable" className="feature-link">View Timetable</Link>
          </div>
          <div className="feature-item">
            <h3>Student Profile</h3>
            <p>Update your personal information and view your grades.</p>
            <Link to="/student" className="feature-link">Go to Profile</Link>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Student Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;