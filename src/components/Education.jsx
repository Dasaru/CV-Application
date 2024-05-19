import { useState } from 'react'

export default function Education() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("Waterfall High");
  const [major, setMajor] = useState("Underwater Basket Weaving");
  const [date, setDate] = useState("2024-02-14");

  return (
    <>
      <p>Education</p>
      <div className="container">
        School Name: {submitted ? name : <input type="text" onChange={e => setName(e.target.value)} value={name} />}
        Major: {submitted ? major : <input type="text" onChange={e => setMajor(e.target.value)} value={major} />}
        Date: {submitted ? date : <input type="date" onChange={e => setDate(e.target.value)} value={date} />}
      </div>
      <button onClick={() => setSubmitted(!submitted)}>{submitted ? "Edit" : "Submit"}</button>
    </>
  )
}