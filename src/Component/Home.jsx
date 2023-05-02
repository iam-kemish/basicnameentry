import React, { useState } from "react";


const Home = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contactnumber: "",
  });
  const [table, setTable] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.contactnumber) {
      alert("Please fill all the required details.");
    } else {
      setTable([...table, input]);
    }
  };

  const RemoveItem = (index)=>{
   const filter = table.filter((tabl, i)=> i !== index)
   setTable(filter)
  }
  return (
    <div>
      <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          First name:
        </label>
        <input
          type="text"
          value={input.name}

          className="form-control"
          id="name"
          name="name"
          placeholder="type your name"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address:
        </label>
        <input
          type="email"
          value={input.email}
          name="email"
          className="form-control"
          id="email"
          placeholder="type your valid email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Contact number:
        </label>
        <input
          type="number"
          value={input.contactnumber}
          name="contactnumber"
          className="form-control"
          id=" contactnumber"
          placeholder="type your Contact number"
          onChange={(e) =>
            setInput({ ...input, contactnumber: e.target.value })
          }
        />
        <button
          className="my-3 form-control btn btn-success"
          htmlFor="exampleFormControlInput1"
          type="submit"
          id="exampleFormControlInput1"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>

      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Remove item</th>
          </tr>
        </thead>
      <tbody>
      {table.map((tabl, i) => {
          return (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{tabl.name}</td>
              <td>{tabl.email}</td>
              <td>{tabl.contactnumber}</td>
              <td><button className="btn btn-danger" onClick={()=> RemoveItem(i)}>Removeitem</button></td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
};

export default Home;
