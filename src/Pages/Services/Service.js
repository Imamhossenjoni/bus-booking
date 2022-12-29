import React, { useState } from "react";
import { Accordion } from "react-bootstrap-accordion";
import "./main.css";
import vectorImg from "../../../src/img/Vector.png";
import sits from "../../../src/sits.json";
import SingleSit from "./SingleSit";
import available from "../../../src/img/Vector.png";
import select from "../../../src/img/selected.png";
import booked from "../../../src/img/Vector (5).png";
import driver from '../../../src/img/driver.png'
const Service = ({ s }) => {
  console.log(sits);

  const [show, setShow] = useState(false);
  const [sitValue, setSitValue] = useState(null);
  const busType=s.busType;
  const pay=s.pay;
//   console.log(bus)
  console.log(show);
  const handleInfo = (event) => {
    event.preventDefault();
    const name = event.target?.name?.value;
    const email = event.target.email?.value;
    const phone = event.target.phone?.value;
    const boarding = event.target.boarding?.value;
    const droping = event.target.droping?.value;
    const info = { name, phone, email, boarding, droping, sitValue,busType,pay };
    console.log(info)
    localStorage.setItem("info", info);
    event.target.reset();
    alert('Your info successfully added in local Storage..')
  };

  console.log(sitValue);
  return (
    <div className="">
      <div className="card-item flex">
        <div className="img-info">
          <div className="">
            <img className="ml-5" src={s.img} alt="" />
          </div>
        </div>
        <div className=" bus-details">
          {/* <div>
            <img src={s.img} alt="" />
          </div> */}
          <h2 className="text-primary text-3xl">{s.title}</h2>
          <p>
            Route :<span className="text-secondary">{s.route}</span>
          </p>
          <p>
            Starting Point: <span className="text-primary">{s.starting}</span>
          </p>
          <p>
            Ending Point: <span className="text-primary">{s.ending}</span>
          </p>
        </div>
        <div className="bus-type">
          <h2 className="text-2xl ">{s.busType}</h2>
        </div>
        <div className="startTime flex">
          <p className="text-primary text-2xl">{s.startTime}</p>
          <p className="ml-3 mt-2 text-primary">{s.endTime}</p>
        </div>
        <div>
          <h2 className="text-3xl text-primary">ট {s.pay}</h2>
          <button
            onClick={() => setShow(!show)}
            className="btn btn-sm btn-primary mt-3"
          >
            view seats
          </button>
        </div>
      </div>
      {show ? (
        <div className="drowpdown">
          <div className="sit_dropdown">
            <div className="header my-5">
            <div className="available flex">
                <div>
                  {" "}
                  <img src={available} style={{ width: "40px" }} alt="" />
                </div>
                <div>
                  <p className="ml-2 text-xl">available</p>
                </div>
              </div>
              <div className="selectes flex">
                <div>
                  {" "}
                  <img src={booked} style={{ width: "40px" }} alt="" />
                </div>
                <div>
                  <p className="ml-2 text-xl">Booked</p>
                </div>
              </div>
              <div className="selectes flex">
                <div>
                  {" "}
                  <img src={select} style={{ width: "40px" }} alt="" />
                </div>
                <div>
                  <p className="ml-2 text-xl">Selectes</p>
                </div>
              </div>
            </div>
           <div className="driver"> <img src={driver} style={{ width: "40px" }} alt="" /></div>
            {/* {sits.map((sit) => (
              <SingleSit key={sit.id} sit={sit}></SingleSit>
            ))} */}
            <div className="row">
              {sits.map((item, i) => (
                <>
                  <div className="col-3 my-3">
                    <div class="tooltip ml-5">
                      <button onClick={() => setSitValue(item.sit)}>
                        <img src={vectorImg} style={{ width: "40px" }} alt="" />
                      </button>
                      <span class="tooltiptext">{item.sit}</span>
                    </div>
                    <h1>{item.site}</h1>
                  </div>
                </>
              ))}
            </div>
          </div>

          <form onSubmit={handleInfo}>
            <div className="form my-5 ml-5">
              <h3 className="text-secondary text-2xl">Passenger Name</h3>
              <input
                type="text"
                name="name"
                placeholder="Enter your name..."
              ></input>
              <h3 className="text-secondary text-2xl">Passenger Phone</h3>
              <input
                placeholder="Enter your phone..."
                type="number"
                name="phone"
              ></input>
              <h3 className="text-secondary text-2xl">Passenger Email</h3>
              <input
                placeholder="Enter Your Email..."
                type="email"
                name="email"
              ></input>
              <br />
              <div className="flex">
                <div>
                  <span className="text-secondary text-2xl">
                    {" "}
                    Boarding Point
                  </span>
                  <br />
                  <select name="boarding">
                    <option value="" selected>
                      Choose Boarding Point
                    </option>
                    <option value="Kallyanpur Bus Point">
                      Kallyanpur Bus Point
                    </option>
                    <option value="Abdullahput Bus Point">
                      Abdullahput Bus Point
                    </option>
                    <option value="Mohakhali Bus Point">
                      Mohakhali Bus Point
                    </option>
                    <option value="Azampur Bus Point">Azampur Bus Point</option>
                    <option value="Board Bazar">Board Bazar</option>
                  </select>
                </div>
                <div>
                  <span className="text-secondary text-2xl ml-5">
                    {" "}
                    Dropping Point
                  </span>
                  <br />
                  <select className="ml-3" name="droping">
                    <option value="" selected>
                      Choose Dropping Point
                    </option>
                    <option value="Bagura Bus Point">Bagura Bus Point</option>
                    <option value="Banani Bus Point">Banani Bus Point</option>
                    <option value="Thantania Bus Stand">
                      Thantania Bus Stand
                    </option>
                    <option value="Mahasthangarh Bus Point">
                      Mahasthangarh Bus Point
                    </option>
                  </select>
                </div>
              </div>

              <div className=" textareaa">
                <div className="ml-5 seats ">
                  Seats
                  <div className="">{<p>{sitValue}</p>}</div>
                </div>
                <div className="ml-5 fare">Pay
                <div className="">{<p>{s.pay}</p>}</div></div>
                <div className="ml-5 sitClass ">Class
                <div className="">{<p>{s.busType}</p>}</div>
                </div>
                {/* <div className="ml-5">{ <p>{sitValue}</p>}</div>
                <div className="ml-5"></div>
                <div className="ml-5"></div> */}
              </div>
            </div>
            <button class="btn btn-sm btn-primary ml-5" type="submit">
              Proceed to payment
            </button>
            <button
              onClick={() => setShow(!show)}
              className="btn btn-sm btn-primary px-4 ml-5"
            >
              X
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Service;
