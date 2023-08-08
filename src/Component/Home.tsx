import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormSubmission = {
  FullName: string;
  EmailAddress: string;
  contactnumber: string;
};

const Home = () => {
  const { register, handleSubmit, formState, setValue } =
    useForm<FormSubmission>();
  const { errors } = formState;

  const [table, setTable] = useState<FormSubmission[]>([]);

  const onSubmit = (data: FormSubmission) => {
    setTable([...table, data]);

    setValue("FullName", "");
    setValue("EmailAddress", "");
    setValue("contactnumber", "");
  };

  const RemoveItem = (index: number) => {
    const filteredTable = table.filter((_, i) => i !== index);
    setTable(filteredTable);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 mt-5">
          <label
            htmlFor="name"
            className="form-label "
            style={{ fontWeight: "bold" }}
          >
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Type your name"
            {...register("FullName", {
              required: "User's name is required.",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Invalid name format.",
              },
            })}
          />
          <p className="showError">{errors.FullName?.message}</p>

          <label
            htmlFor="email"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Type your valid email"
            {...register("EmailAddress", {
              required: "Email address is required.",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email format.",
              },
            })}
          />
          <p className="showError">{errors.EmailAddress?.message}</p>

          <label
            htmlFor="contactnumber"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            Contact number:
          </label>
          <input
            type="number"
            className="form-control"
            id="contactnumber"
            placeholder="Type your Contact number"
            {...register("contactnumber", {
              required: "Phone number is required.",
              pattern: {
                value: /^[\+]?[+]?[977]{3}[-]?[0-9]{10}$/,
                message: "Invalid phone number. Please start with nepali code.",
              },
            })}
          />
          {<p className="showError">{errors.contactnumber?.message}</p>}
          <button type="submit" className="my-3 form-control btn btn-success">
            Submit
          </button>
        </div>
      </form>

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
          {table.map((tabl, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{tabl.FullName}</td>
              <td>{tabl.EmailAddress}</td>
              <td>{tabl.contactnumber}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => RemoveItem(i)}
                >
                  Remove Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
