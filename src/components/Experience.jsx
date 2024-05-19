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
      <h2>Experience</h2>
      <div className={submitted ? "container one-column" : "container"}>
        {submitted ? <div>{"Company Name: " + name}</div> : (
          <>
            <label htmlFor="expName">Company Name: </label>
            <input id="expName" type="text" onChange={e => setName(e.target.value)} value={name} />
          </>
        )}
        {submitted ? <div>{"Title: " + title}</div> : (
          <>
            <label htmlFor="expTitle">Title: </label>
            <input id="expTitle" type="text" onChange={e => setTitle(e.target.value)} value={title} />
          </>
        )}
        {submitted ? <div>{"Job Description: " + jobDesc}</div> : (
          <>
            <label htmlFor="expDesc">Job Description: </label>
            <input id="expDesc" type="text" onChange={e => setJobDesc(e.target.value)} value={jobDesc} />
          </>
        )}
        {submitted ? <div>{"Date Start: " + dateStart}</div> : (
          <>
            <label htmlFor="expDateStart">Date Start: </label>
            <input id="expDateStart" type="date" onChange={e => setDateStart(e.target.value)} value={dateStart} />
          </>
        )}
        {submitted ? <div>{"Date End: " + dateEnd}</div> : (
          <>
            <label htmlFor="expDateEnd">Date End: </label>
            <input id="expDateEnd" type="date" onChange={e => setDateEnd(e.target.value)} min={dateStart} max={today} value={dateEnd} />
          </>
        )}
      </div>
      <button className={submitted && "edit"} onClick={() => setSubmitted(!submitted)}>{submitted ? "Edit" : "Submit"}</button>
    </>
  )
}