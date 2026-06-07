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
  const [experience,setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [otherSkill, setOtherSkill] = useState("");
  const downloadPDF = async () => {
    const doc = new jsPDF();

    let imageData = "";

      if (photo) {
        imageData = await new Promise((resolve) => {
          const reader = new FileReader();

          reader.onload = () => {
            resolve(reader.result);
          };

          reader.readAsDataURL(photo);
        });
      }

    doc.setFontSize(20);
    if (imageData) {
       doc.addImage(imageData, "JPEG", 150, 10, 40, 40);
    }
    doc.text("AI Resume Builder", 10, 10);

    doc.text(`Name:${name}`,10,30);
    doc.text(`Email: ${email}`, 10, 40);
    doc.text(`Phone: ${phone}`, 10, 50);
    doc.text(`Education: ${education}`, 10, 60);
    doc.text(`Skills: ${skills}`, 10, 70);
    doc.text(`Summary: ${summary}`, 10, 80);
    doc.text(`GitHub: ${github}`, 10, 90);
    doc.text(`LinkedIn: ${linkedin}`, 10, 100);
    doc.text(`Experience: ${experience}`,10,110);
    doc.text(`Projects: ${projects}`, 10, 120);
    doc.text(
       `Technical Skills: ${technicalSkills.join(", ")} ${otherSkill}`,
       10,130
    );

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

        <input 
          type="text"
          placeholder="Enter Experience"
          onChange={(e) => setExperience(e.target.value)} />

        <input 
        type="text"
        placeholder="Enter Your projects"
        onChange={(e) => setProjects(e.target.value)}
         />

         <label>
          <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setTechnicalSkills([...technicalSkills, "React JS"]);
          }
        }}
      />   
           React JS
         </label>

         <label>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setTechnicalSkills([...technicalSkills, "Java"]);
              }
            }}
          />
            Java
        </label>

        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setTechnicalSkills([...technicalSkills, "Spring Boot"]);
              }
            }}
          />
          Spring Boot
        </label>

        <label>
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setTechnicalSkills([...technicalSkills, "MySQL"]);
                }
              }}
            />
            MySQL
        </label>

        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setTechnicalSkills([...technicalSkills, "Git & GitHub"]);
              }
            }}
          />
          Git & GitHub
        </label>

        <input
          type="text"
          placeholder="Other Skill"
          onChange={(e) => setOtherSkill(e.target.value)}
        />



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

          <p>
            <strong>Experience:</strong>{experience}
          </p>

          <p>
            <strong>Projects:</strong>{projects}
          </p>

          <p>
            <strong>Technical Skills:</strong>{" "}
            {technicalSkills.join(", ")}
            {otherSkill && `,${otherSkill}`}
          </p>

        </div>
      </div>
    </div>
  );
}

export default App;