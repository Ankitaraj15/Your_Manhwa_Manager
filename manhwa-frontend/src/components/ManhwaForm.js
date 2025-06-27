import axios from 'axios';
import React, { useState } from 'react';

function ManhwaForm({ refresh }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('Ongoing');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/manhwas', {
      title,
      author,
      status,
    });
    setTitle('');
    setAuthor('');
    setStatus('Ongoing');
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Manhwa Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option value="Ongoing">Ongoing</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Manhwa</button>
    </form>
  );
}

export default ManhwaForm;
