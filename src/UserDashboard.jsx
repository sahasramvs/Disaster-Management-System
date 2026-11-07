import { useState } from "react";
import ReportDisaster from "./ReportDisaster";
import TrackReports from "./TrackReports";
function UserDashboard() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>Welcome to User Dashboard</h1>
      <h2>Disaster Management System</h2>

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("report")}>
        Report Disaster
      </button>
      <button onClick={() => setPage("track")}>
  Track Reports
</button>

      {page === "home" && (
        <h3>Select Report Disaster to submit a report</h3>
      )}

      {page === "report" && <ReportDisaster />}
      {page === "track" && <TrackReports />}
    </div>
  );
}

export default UserDashboard;