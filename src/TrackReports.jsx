import { useEffect, useState } from "react";

function TrackReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedReports = JSON.parse(
      localStorage.getItem("disasterReports") || "[]"
    );
    setReports(savedReports);
  }, []);

  return (
    <div className="report-container">
      <h1>Track Disaster Reports</h1>

      {reports.length === 0 ? (
        <p>No disaster reports submitted yet.</p>
      ) : (
        reports.map((report) => (
          <div className="card" key={report.id}>
            <h3>{report.type}</h3>
            <p><strong>Location:</strong> {report.location}</p>
            <p><strong>Description:</strong> {report.description}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <p><strong>Status:</strong> {report.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default TrackReports;