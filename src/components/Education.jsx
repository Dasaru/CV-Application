import { useState } from 'react'

export default function Education() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("Waterfall High");
  const [major, setMajor] = useState("Underwater Basket Weaving");
  const [date, setDate] = useState("2024-02-14");

  return (
    <>
      <h2>Education</h2>
      <div className={submitted ? "container one-column" : "container"}>
        {submitted ? <div>{"School Name: " + name}</div> : (
          <>
            <label htmlFor="eduName">School Name: </label>
            <input id="eduName" type="text" onChange={e => setName(e.target.value)} value={name} />
          </>
        )}
        {submitted ? <div>{"Major: " + major}</div> : (
          <>
            <label htmlFor="eduMajor">Major: </label>
            <input id="eduMajor" type="text" onChange={e => setMajor(e.target.value)} value={major} />
          </>
        )}
        {submitted ? <div>{"Date: " + date}</div> : (
          <>
            <label htmlFor="eduDate">Date: </label>
            <input id="eduDate" type="date" onChange={e => setDate(e.target.value)} value={date} />
          </>
        )}
      </div>
      <button className={submitted && "edit"} onClick={() => setSubmitted(!submitted)}>{submitted ? "Edit" : "Submit"}</button>
    </>
  )
}