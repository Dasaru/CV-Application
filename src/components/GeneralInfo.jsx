import { useState } from 'react'

export default function GeneralInfo() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("Clark Kent");
  const [email, setEmail] = useState("notsuperman@gmail.com");
  const [phone, setPhone] = useState("123-4567");

  return (
    <>
      <p>General Info</p>
      <div className="container">
        Name: {submitted ? name : <input type="text" onChange={e => setName(e.target.value)} value={name} />}
        Email: {submitted ? email : <input type="email" onChange={e => setEmail(e.target.value)} value={email} />}
        Phone #: {submitted ? phone : <input type="tel" onChange={e => setPhone(e.target.value)} value={phone} />}
      </div>
      <button onClick={() => setSubmitted(!submitted)}>{submitted ? "Edit" : "Submit"}</button>
    </>
  )
}