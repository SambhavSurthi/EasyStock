import React, { useState, useEffect } from 'react';
import { adminApi } from "../../api/security/api";

function AdminDashboards() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminApi.getDashboard();
        setDashboardData(response.data);
      } catch (err) {
        setError(err.message || 'Failed to load dashboard');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
    </div>
  );
}

export default AdminDashboards;