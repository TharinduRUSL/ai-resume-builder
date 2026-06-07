import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [summary, setSummary] = useState("");
  const [photo, setPhoto] = useState(null);

  return (
    <div className="container">
    
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

        <input type="file"
          accept="image/*" 
          onChange={(e) => setPhoto(e.target.files[0])}/>

        <textarea
          placeholder="Enter Professional Summary"
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
      </div>

      
      <div className="preview-section">
        <h2>Resume Preview</h2>

        <div className="resume-card">
          {photo && (
            <img
              src={URL.createObjectURL(photo)}
              alt="Profile"
              className="Profile-photo"
              />
          )}
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