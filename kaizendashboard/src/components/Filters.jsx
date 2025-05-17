import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [campaign, setCampaign] = useState('');
  const [score, setScore] = useState('');

  const handleChange = () => {
    onFilterChange({ dateRange, campaign, score });
  };

  return (
    <div className="filters">
      <input
        type="date"
        value={dateRange.start}
        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
      />
      <input
        type="date"
        value={dateRange.end}
        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
      />
      <input
        type="text"
        placeholder="Campaign"
        value={campaign}
        onChange={(e) => setCampaign(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Lead Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={handleChange}>Apply Filters</button>
    </div>
  );
};

export default Filters;