import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="container">
      {/* Form Section */}
      <div className="form-section">
        <h1>AI Resume Builder</h1>

        <input
          type="text"
          placeholder="Enter Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Education"
          onChange={(e) => setEducation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Skills"
          onChange={(e) => setSkills(e.target.value)}
        />

        <textarea
          placeholder="Enter Professional Summary"
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
      </div>

      {/* Preview Section */}
      <div className="preview-section">
        <h2>Resume Preview</h2>

        <div className="resume-card">
          <h3>{name || "Your Name"}</h3>

          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Phone:</strong> {phone}
          </p>

          <p>
            <strong>Education:</strong> {education}
          </p>

          <p>
            <strong>Skills:</strong> {skills}
          </p>

          <p>
            <strong>Summary:</strong>
          </p>

          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default App;