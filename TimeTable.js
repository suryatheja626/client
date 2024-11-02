// src/components/TimeTable.js
import React, { useEffect, useState } from 'react';
import './TimeTable.css'; // Optional: Add your own CSS for styling

const TimeTable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/timetable');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTimetableData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTimetable();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="timetable-container">
      <h1>Weekly Timetable</h1>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>Classes</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.classes.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;