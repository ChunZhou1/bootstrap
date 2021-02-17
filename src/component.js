import React from "react";
import "./bootstrap/js/bootstrap.bundle.min.js";
import "./bootstrap/css/bootstrap.min.css";

/* */

function Gird1() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-6 col-md-3"
          style={{
            backgroundColor: "#dedef8",
            boxShadow: "inset 1px -1px 1px #444, inset -1px 1px 1px #444"
          }}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div
          className="col-sm-6 col-md-3"
          style={{
            backgroundColor: "#dedef8",
            boxShadow: "inset 1px -1px 1px #444, inset -1px 1px 1px #444"
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>

        <div
          className="col-sm-6 col-md-3"
          style={{
            backgroundColor: "#dedef8",
            boxShadow: "inset 1px -1px 1px #444, inset -1px 1px 1px #444"
          }}
        >
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div
          className="col-sm-6 col-md-3"
          style={{
            backgroundColor: "#dedef8",
            boxShadow: "inset 1px -1px 1px #444, inset -1px 1px 1px #444"
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>
        </div>

        <div style={{ clear: "both" }}></div>
      </div>
    </div>
  );
}

export default Gird1;

export function Gird_v() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 order-5">align-self-start</div>

        <div className="col-6 order-1">align-self-end</div>
      </div>
    </div>
  );
}

export function Gird_h() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          row justify-content-center
        </div>
        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          row justify-content-center
        </div>
      </div>

      <div className="row justify-content-end">
        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          justify-content-end
        </div>
        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          justify-content-end
        </div>
      </div>

      <div className="row justify-content-around">
        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          justify-content-around
        </div>
        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          justify-content-around
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          justify-content-between
        </div>
        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          justify-content-between
        </div>
      </div>
    </div>
  );
}

export function Gird_break() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-4" style={{ backgroundColor: "yellow" }}>
          .col-6 .col-sm-4
        </div>
        <div className="col-6 col-sm-4" style={{ backgroundColor: "yellow" }}>
          .col-6 .col-sm-4
        </div>

        <div className="w-100 d-none d-xl-block"></div>

        <div className="col-6 col-sm-4" style={{ backgroundColor: "yellow" }}>
          .col-6 .col-sm-4
        </div>
        <div className="col-6 col-sm-4" style={{ backgroundColor: "yellow" }}>
          .col-6 .col-sm-4
        </div>
      </div>
    </div>
  );
}

export function Gutter() {
  return (
    <div
      className="container overflow-hidden"
      style={{ backgroundColor: "yellow" }}
    >
      <div className="row gx-3">
        <div className="col">
          <div className="p-3 border bg-light">Custom column padding</div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">Custom column padding</div>
        </div>
      </div>
    </div>
  );
}

export function Gutter_v() {
  return (
    <div
      className="container overflow-hidden"
      style={{ backgroundColor: "yellow" }}
    >
      <div className="row gy-5">
        <div className="col-6">
          <div className="p-3 border bd-highlight">Custom column padding</div>
        </div>
        <div className="col-6">
          <div className="p-3 border bg-light">Custom column padding</div>
        </div>
        <div className="col-6">
          <div className="p-3 border bg-light">Custom column padding</div>
        </div>
        <div className="col-6">
          <div className="p-3 border bg-light">Custom column padding</div>
        </div>
      </div>
    </div>
  );
}

export function Gird_offset() {
  return (
    <div className="container">
      <h1>Hello, world!</h1>

      <div className="row">
        <div
          className="col-md-6 offset-3 p-2 border"
          style={{
            backgroundColor: "#dedef8"
          }}
        >
          <p>col-md-6 offset-3 border</p>
        </div>
      </div>
    </div>
  );
}

export function Gird_by_gird() {
  return (
    <div className="container">
      <h1>Hello, world!</h1>

      <div className="row">
        <div className="col-md-3" style={{ backgroundColor: "#dedef8" }}>
          <h4>第一列</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="col-md-9" style={{ backgroundColor: "#dedef8" }}>
          <h4>第二列 - 分为四个盒子</h4>
          <div className="row">
            <div className="col-md-4" style={{ backgroundColor: "#B18904" }}>
              <p>
                Consectetur art party Tonx culpa semiotics. Pinterest assumenda
                minim organic quis.
              </p>
            </div>
            <div className="col-md-8" style={{ backgroundColor: "#B18904" }}>
              <p>
                {" "}
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4" style={{ backgroundColor: "#B18904" }}>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div className="col-md-8" style={{ backgroundColor: "#B18904" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Print_address() {
  return (
    <div className="container">
      <address>
        <strong>Some Company, Inc.</strong>
        <br></br>
        007 street<br></br> Some City, State XXXXX<br></br>
        <abbr title="Phone">P:</abbr> (123) 456-7890
      </address>
      <address>
        <strong>Full Name</strong>
        <br></br>
        <a href="mailto:#">mailto@somedomain.com</a>
      </address>
    </div>
  );
}

export function Table_responsive() {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <caption>响应式表格布局</caption>
          <thead>
            <tr>
              <th>产品</th>
              <th>付款日期</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody style={{ color: "red" }}>
            <tr>
              <td>产品1</td>
              <td>23/11/2013</td>
              <td>待发货</td>
            </tr>
            <tr>
              <td>产品2</td>
              <td>10/11/2013</td>
              <td>发货中</td>
            </tr>
            <tr>
              <td>产品3</td>
              <td>20/10/2013</td>
              <td>待确认</td>
            </tr>
            <tr className="table-active">
              <td>产品4</td>
              <td>20/10/2013</td>
              <td>已退货</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Form_horizonta() {
  return (
    <div className="container">
      <form role="form">
        <div className="form-group row mb-3">
          <label htmlFor="firstname" className="col-sm-2 control-label">
            名字
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="请输入名字"
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="lastname" className="col-sm-2 control-label">
            姓
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="请输入姓"
            />
          </div>
        </div>

        <div className="form-group ">
          <div className="col-sm-offset-2 col-sm-10">
            <label>
              <input type="checkbox" />
              请记住我
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-10 col-sm-offset-2">
            <button type="submit" className="btn btn-default">
              登录
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Flex_1() {
  return (
    <div className="container">
      <div className="d-flex flex-column border bd-highlight mt-3">
        <div className="p-2 bd-highlight">Flex item 1</div>
        <div className="p-2 bd-highlight">Flex item 2</div>
        <div className="p-2 bd-highlight">Flex item 3</div>
      </div>
      <div className="d-flex flex-column-reverse bd-highlight border">
        <div className="p-2 bd-highlight">Flex item 1</div>
        <div className="p-2 bd-highlight">Flex item 2</div>
        <div className="p-2 bd-highlight">Flex item 3</div>
      </div>
    </div>
  );
}

export function Flex_align() {
  return (
    <div className="d-flex bd-highlight">
      <div className="p-2 flex-fill bd-highlight border bg-info">
        Flex item with a lot of content
      </div>
      <div className="p-2 flex-fill bd-highlight border">Flex item</div>
      <div className="p-2 flex-fill bd-highlight border">Flex item</div>
    </div>
  );
}

export function Position() {
  return (
    <div className="container">
      <button type="button" className="btn btn-primary position-relative mx-5">
        Mails
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          +99 <span className="visually-hidden">unread messages</span>
        </span>
      </button>

      <button type="button" className="btn btn-dark position-relative  mx-5">
        Marker
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill"
          fill="#212529"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>

      <button type="button" className="btn btn-primary position-relative mx-5">
        Alerts
        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  );
}

export function Table_1() {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
