import { useState } from 'react'

export default function Experience() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("Starbucks");
  const [title, setTitle] = useState("Brewer");
  const [jobDesc, setJobDesc] = useState("Make a mean brew of coffee.");
  const [dateStart, setDateStart] = useState("2020-05-18");
  const [dateEnd, setDateEnd] = useState("2023-07-22");

  const d = new Date();
  const today = `${d.getFullYear()}-${d.getMonth().toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;

  return (
    <>
      <p>Experience</p>
      <div className="container">
        Company Name: {submitted ? name : <input type="text" onChange={e => setName(e.target.value)} value={name} />}
        Title: {submitted ? title : <input type="text" onChange={e => setTitle(e.target.value)} value={title} />}
        Job Description: {submitted ? jobDesc : <input type="text" onChange={e => setJobDesc(e.target.value)} value={jobDesc} />}
        Date Start: {submitted ? dateStart : <input type="date" onChange={e => setDateStart(e.target.value)} value={dateStart} />}
        Date End: {submitted ? dateEnd : <input type="date" onChange={e => setDateEnd(e.target.value)} min={dateStart} max={today} value={dateEnd} />}
      </div>
      <button onClick={() => setSubmitted(!submitted)}>{submitted ? "Edit" : "Submit"}</button>
    </>
  )
}