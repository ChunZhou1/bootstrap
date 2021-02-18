import React from "react";
import "./bootstrap/css/bootstrap.min.css";

function Form_control_all() {
  return (
    <div>
      <Form_H />
      <Form_normal />
      <Selector />
      <Chk_rad />
      <Range />
      <Form_group />
      <Form_float />
    </div>
  );
}

export default Form_control_all;

function Form_H() {
  return (
    <div className="mt-3">
      <form className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail2"
            value="email@example.com"
          />
        </div>

        <div className="col-auto">
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
    </div>
  );
}

function Form_normal() {
  return (
    <div className="mt-3">
      <form>
        <div className="mb-3 col-sm-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 col-sm-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

function Selector() {
  return (
    <div className="mt-3  col-sm-3">
      <select className="form-select">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}

function Chk_rad() {
  return (
    <div className="mt-3">
      <input
        type="checkbox"
        className="btn-check"
        id="btn-check-outlined"
        autoComplete="off"
      />
      <label
        className="btn btn-outline-primary mb-3"
        htmlFor="btn-check-outlined"
      >
        Single toggle
      </label>
      <br />

      <input
        type="checkbox"
        className="btn-check"
        id="btn-check-2-outlined"
        defaultChecked
        autoComplete="off"
      />
      <label
        className="btn btn-outline-secondary mb-3"
        htmlFor="btn-check-2-outlined"
      >
        Checked
      </label>
      <br />

      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id="success-outlined"
        autoComplete="off"
        defaultChecked
      />
      <label className="btn btn-outline-success " htmlFor="success-outlined">
        Checked success radio
      </label>

      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id="danger-outlined"
        autoComplete="off"
      />
      <label className="btn btn-outline-danger ms-2" htmlFor="danger-outlined">
        Danger radio
      </label>
    </div>
  );
}

function Range() {
  return (
    <div className="mt-3 col-sm-4">
      <label htmlFor="customRange3" className="form-label">
        Example range
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="5"
        step="0.5"
        id="customRange3"
      ></input>
    </div>
  );
}

function Form_group() {
  return (
    <div className="mt-3 col-6">
      <div className="input-group mb-3">
        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Action
        </button>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with segmented dropdown button"
        />
      </div>
    </div>
  );
}

function Form_float() {
  return (
    <div className="mt-3">
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              defaultValue="mdo@example.com"
            />
            <label htmlFor="floatingInputGrid">Email address</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option defaultValue="selected">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelectGrid">Works with selects</label>
          </div>
        </div>
      </div>
    </div>
  );
}
