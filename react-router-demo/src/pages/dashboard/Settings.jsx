const DashboardSettings = () => {
  return (
    <div className="dashboard-settings">
      <h2>Dashboard Settings</h2>
      <p>This is the settings page, a nested route within the Dashboard.</p>
      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="notifications">Email Notifications</label>
          <input type="checkbox" id="notifications" defaultChecked />
        </div>
        <div className="form-group">
          <label htmlFor="theme">Theme</label>
          <select id="theme" defaultValue="light">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select id="language" defaultValue="en">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <button type="button" className="btn">Save Settings</button>
      </form>
    </div>
  );
};

export default DashboardSettings;
