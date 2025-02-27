const DashboardStats = () => {
  return (
    <div className="dashboard-stats">
      <h2>Dashboard Stats</h2>
      <p>This is the stats page, a nested route within the Dashboard.</p>
      <div className="stats-container">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daily Users</td>
              <td>245</td>
              <td className="positive">+12%</td>
            </tr>
            <tr>
              <td>Weekly Revenue</td>
              <td>$2,345</td>
              <td className="positive">+8%</td>
            </tr>
            <tr>
              <td>Conversion Rate</td>
              <td>3.2%</td>
              <td className="negative">-0.5%</td>
            </tr>
            <tr>
              <td>Bounce Rate</td>
              <td>42%</td>
              <td className="positive">-3%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardStats;
