import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    numOfppl: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      numOfppl: 0,
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <h1>Booking a Table</h1>
          <div className="input">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="input">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="numOfppl">Number of guests:</label>
            <select name="numOfppl" id="numOfppl" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="time">Time:</label>
            <select name="time" id="time" required>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>

          <button type="submit">submit</button>
        </form>
      )}

      {submitted && <PrintForm />}
    </div>
  );
}

export default App;

function PrintForm() {
  return (
    <>
      <h2>Your Booking is confirmed!</h2>
    </>
  );
}
