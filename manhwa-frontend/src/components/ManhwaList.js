import axios from 'axios';
import React from 'react';

function ManhwaList({ manhwas, refresh }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/manhwas/${id}`);
    refresh();
  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {manhwas.map((m) => (
        <li key={m._id} style={{
          border: '1px solid #ddd',
          padding: '16px',
          marginBottom: '12px',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{m.title}</div>
          <div style={{ color: '#555' }}>By: {m.author}</div>
          <div>Status: <strong>{m.status}</strong></div>

          <button
            onClick={() => handleDelete(m._id)}
            style={{
              marginTop: '10px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ManhwaList;
