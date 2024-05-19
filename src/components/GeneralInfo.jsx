import { useState } from 'react'

export default function GeneralInfo() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("Clark Kent");
  const [email, setEmail] = useState("notsuperman@gmail.com");
  const [phone, setPhone] = useState("123-4567");

  return (
    <>
      <h2>General Info</h2>
      <div className={submitted ? "container one-column" : "container"}>
        {submitted ? <div>{"Name: " + name}</div> : (
          <>
            <label htmlFor="infoName">Name: </label>
            <input id="infoName" type="text" onChange={e => setName(e.target.value)} value={name} />
          </>
        )}
        {submitted ? <div>{"Email: " + email}</div> : (
          <>
            <label htmlFor="infoEmail">Email: </label>
            <input id="infoEmail" type="email" onChange={e => setEmail(e.target.value)} value={email} />
          </>
        )}
        {submitted ? <div>{"Phone #: " + phone}</div> : (
          <>
            <label htmlFor="infoPhone">Phone #: </label>
            <input id="infoPhone" type="tel" onChange={e => setPhone(e.target.value)} value={phone} />
          </>
        )}
      </div>
      <button className={submitted && "edit"} onClick={() => setSubmitted(!submitted)}>{submitted ? "Edit" : "Submit"}</button>
    </>
  )
}