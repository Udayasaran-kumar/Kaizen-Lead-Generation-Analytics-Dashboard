import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Filters from '../components/Filters';
import LeadChart from '../components/LeadChart';
import LeadTable from '../components/LeadTable';
import '../components/App.css'; // Ensure CSS is applied

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase();
    const leadsRef = ref(db, 'leads');
    onValue(leadsRef, (snapshot) => {
      const data = snapshot.val();
      const leadsList = Object.entries(data || {}).map(([id, lead]) => ({ id, ...lead }));
      setLeads(leadsList);
      setFilteredLeads(leadsList);
    });
  }, []);

  const applyFilters = ({ dateRange, campaign, score }) => {
    let result = [...leads];

    if (dateRange.start && dateRange.end) {
      const start = new Date(dateRange.start).getTime();
      const end = new Date(dateRange.end).getTime();
      result = result.filter((lead) => {
        const leadTime = new Date(lead.timestamp).getTime();
        return leadTime >= start && leadTime <= end;
      });
    }

    if (campaign) {
      result = result.filter((lead) =>
        lead.campaign.toLowerCase().includes(campaign.toLowerCase())
      );
    }

    if (score) {
      result = result.filter((lead) => lead.score >= parseInt(score));
    }

    setFilteredLeads(result);
  };

  const clearFilters = () => {
    setFilteredLeads(leads);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="dashboard-container" style={{width:'100%'}}>
      <div className="dashboard-header" style={{width:'100%'}}>
        <h2>Lead Analytics Dashboard</h2>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Filters and Clear */}
      <div style={{ marginBottom: '20px' }}>
        <Filters onFilterChange={applyFilters} />
        <br/>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>

      {/* Charts */}
      <div className="charts">
        <LeadChart leads={filteredLeads} type="quality" />
        <LeadChart leads={filteredLeads} type="source" />
        <LeadChart leads={filteredLeads} type="campaign" />
      </div>

      {/* Lead Table */}
      <LeadTable leads={filteredLeads} />
    </div>
  );
};

export default Dashboard;
