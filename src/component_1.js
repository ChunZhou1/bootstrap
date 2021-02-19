import React from "react";

import "./bootstrap/js/bootstrap.bundle.js";

import P1 from "../pic/p1.jpg";
import P2 from "../pic/p2.jpg";
import P3 from "../pic/p3.jpg";

function Component_all() {
  return (
    <div>
      <div className="mt-3">
        <Accordion />
      </div>
      <div className="mt-3">
        <Breadcrumb />
      </div>
      <div className="mt-3">
        <Button />
      </div>
      <div className="mt-3">
        <Button_group />
      </div>

      <div className="mt-3">
        <Button_nested />
      </div>

      <div className="mt-3">
        <Carousel />
      </div>
    </div>
  );
}

export default Component_all;

// <h2 className="accordion-header collapsed" id="headingOne"> default not collapsed ,please add collapsed

function Accordion() {
  return (
    <div className="accordion " id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="flase" //true if expand
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Library
        </li>
      </ol>
    </nav>
  );
}

function Button() {
  return (
    <div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button">
          Button
        </button>
        <button className="btn btn-primary" type="button">
          Button
        </button>
      </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button
          type="button"
          className="btn btn-primary me-md-2"
          data-bs-toggle="button"
          autoComplete="off"
        >
          Toggle button
        </button>

        <button
          type="button"
          className="btn btn-primary me-md-2 active"
          data-bs-toggle="button"
          autoComplete="off"
          aria-pressed="true"
        >
          Active toggle button
        </button>

        <button
          type="button"
          className="btn me-md-2 btn-primary"
          disabled
          data-bs-toggle="button"
          autoComplete="off"
        >
          Disabled toggle button
        </button>
      </div>
    </div>
  );
}

function Button_group() {
  return (
    <div>
      <div
        className="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-3" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary">
            1
          </button>
          <button type="button" className="btn btn-outline-secondary">
            2
          </button>
          <button type="button" className="btn btn-outline-secondary">
            3
          </button>
          <button type="button" className="btn btn-outline-secondary">
            4
          </button>
        </div>
        <div className="input-group">
          <div className="input-group-text" id="btnGroupAddon">
            @
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </div>
      </div>

      <div
        className="btn-toolbar justify-content-end"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary">
            1
          </button>
          <button type="button" className="btn btn-outline-secondary">
            2
          </button>
          <button type="button" className="btn btn-outline-secondary">
            3
          </button>
          <button type="button" className="btn btn-outline-secondary">
            4
          </button>
        </div>
        <div className="input-group">
          <div className="input-group-text" id="btnGroupAddon2">
            @
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </div>
      </div>
    </div>
  );
}

function Button_nested() {
  return (
    <div className="mt-3">
      <div
        className="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" className="btn btn-outline-primary">
          1
        </button>
        <button type="button" className="btn btn-outline-primary">
          2
        </button>

        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-outline-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link 2
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-primary">
          3
        </button>
      </div>
    </div>
  );
}

function Carousel() {
  return (
    <div className="mt-3">
      <div
        id="carouselExampleInterval"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={P1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={P2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={P3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
