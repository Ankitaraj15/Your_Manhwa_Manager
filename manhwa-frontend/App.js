import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManhwaForm from './components/ManhwaForm';
import ManhwaList from './components/ManhwaList';

function App() {
  const [manhwas, setManhwas] = useState([]);

  const fetchManhwas = async () => {
    const res = await axios.get('http://localhost:5000/manhwas'); // Adjust your port
    setManhwas(res.data);
  };

  useEffect(() => {
    fetchManhwas();
  }, []);

  return (
    <div>
      <h1>📚 Manhwa Manager</h1>
      <ManhwaForm refresh={fetchManhwas} />
      <ManhwaList manhwas={manhwas} refresh={fetchManhwas} />
    </div>
  );
}

export default App;

