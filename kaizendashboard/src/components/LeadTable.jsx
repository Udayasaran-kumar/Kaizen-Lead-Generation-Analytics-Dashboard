import React, { useState } from 'react';

const LeadTable = ({ leads }) => {
  const [page, setPage] = useState(1);
  const leadsPerPage = 10;

  const paginated = leads.slice((page - 1) * leadsPerPage, page * leadsPerPage);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Campaign</th>
            <th>Source</th>
            <th>Score</th>
            <th>Quality</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.campaign}</td>
              <td>{lead.source}</td>
              <td>{lead.score}</td>
              <td>{lead.quality}</td>
              <td>{new Date(lead.timestamp).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeadTable;
