import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import ManhwaForm from './components/ManhwaForm';
import ManhwaList from './components/ManhwaList';

function App() {
  const [manhwas, setManhwas] = useState([]);

  const fetchManhwas = async () => {
    const res = await axios.get('http://localhost:5000/api/manhwas');
    

    setManhwas(res.data);
  };

  useEffect(() => {
    fetchManhwas();
  }, []);

  return (
    <div className="container">
      <h1>📚 Manhwa Manager</h1>
      <ManhwaForm refresh={fetchManhwas} />
      <ManhwaList manhwas={manhwas} refresh={fetchManhwas} />
    </div>
  );
}

export default App;
