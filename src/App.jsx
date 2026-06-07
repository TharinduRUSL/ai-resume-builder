import { useState } from "react";
import "./App.css";
import { jsPDF } from "jspdf";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [summary, setSummary] = useState("");
  const [photo, setPhoto] = useState(null);
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin ] = useState("");
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("AI Resume Builder", 10, 10);

    doc.text(`Name:${name}`,10,20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Phone: ${phone}`, 10, 40);
    doc.text(`Education: ${education}`, 10, 50);
    doc.text(`Skills: ${skills}`, 10, 60);
    doc.text(`Summary: ${summary}`, 10, 70);
    doc.text(`GitHub: ${github}`, 10, 80);
    doc.text(`LinkedIn: ${linkedin}`, 10, 90);

    doc.save("resume.pdf");
  };

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

        <input type="text"
          placeholder="Enter GitHub Profile Link"
          onChange={(e) => setGithub(e.target.value)} />

        <input type="text"
          placeholder="Enter LinkedIn Profile Link" 
          onChange={(e) => setLinkedin(e.target.value)}/>

        <textarea
          placeholder="Enter Professional Summary"
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>

        <button onClick={downloadPDF}>
          Download PDF
        </button>


      </div>

      
      <div className="preview-section">
        <h2>Resume Preview</h2>

        <div className="resume-card">
          {photo && (
            <img
              src={URL.createObjectURL(photo)}
              alt="Profile"
              className="profile-photo"
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

          <p>
            <strong>Github:</strong>{github}
          </p>

          <p>
            <strong>Linkedin:</strong>{linkedin}
          </p>

        </div>
      </div>
    </div>
  );
}

export default App;