import { useEffect, useState } from "react";

function AdminDashboard() {
  const [reports, setReports] = useState([]);

  function loadReports() {
    const savedReports = JSON.parse(
      localStorage.getItem("disasterReports") || "[]"
    );
    setReports(savedReports);
  }

  useEffect(() => {
    loadReports();
  }, []);

  function updateStatus(id, newStatus) {
    const updatedReports = reports.map((report) =>
      report.id === id
        ? { ...report, status: newStatus }
        : report
    );

    localStorage.setItem(
      "disasterReports",
      JSON.stringify(updatedReports)
    );

    setReports(updatedReports);
  }

  return (
    <div>
      <h1>Welcome Admin</h1>
      <h2>All Disaster Reports</h2>

      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        reports.map((report) => (
          <div key={report.id} className="card">
            <h3>{report.type}</h3>
            <p>Location: {report.location}</p>
            <p>Description: {report.description}</p>
            <p>Date: {report.date}</p>
            <p>Status: {report.status}</p>

            <label>Update Status: </label>

            <select
              value={report.status}
              onChange={(e) =>
                updateStatus(report.id, e.target.value)
              }
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;