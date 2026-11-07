import { useState } from "react";

function ReportDisaster() {
  const [type, setType] = useState("Flood");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const report = {
      id: Date.now(),
      type,
      location,
      description,
      date,
      status: "Pending",
    };

    const reports = JSON.parse(
      localStorage.getItem("disasterReports") || "[]"
    );

    reports.push(report);

    localStorage.setItem(
      "disasterReports",
      JSON.stringify(reports)
    );

    alert("Disaster Report Submitted Successfully!");

    setLocation("");
    setDescription("");
    setDate("");
  }

  return (
    <div className="report-container">
      <h1>Report Disaster</h1>

      <form onSubmit={handleSubmit}>
        <label>Disaster Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Flood</option>
          <option>Earthquake</option>
          <option>Fire</option>
          <option>Cyclone</option>
          <option>Landslide</option>
        </select>

        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter disaster location"
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the disaster"
          required
        />

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportDisaster;