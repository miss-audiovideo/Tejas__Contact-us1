import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-one">
        <div>
          {" "}
          <h1 className="Login-title">
            <span>Name:</span>
          </h1>
          <input
            type="text"
            // placeholder="   Username"
            //  onChange={e => setFName(e.target.value)}
            //   value={fname}
          ></input>
          <br />
          <h1 className="Login-title">
            <span>Email:</span>
          </h1>
          <input
            type="email"
            // placeholder="    Enter Your Email"
          ></input>
          <br />
          <h1 className="Login-title">
            <span>Contact Number:</span>
          </h1>
          <input
            type="Number"
            // placeholder="  Enter Your Number"
          ></input>
          <br />
          <center>
            <br />
            <Dropdown
              color="lightBlue"
              placement="bottom-start"
              buttonText="Select A Country"
              buttonType="filled"
              size="lg"
              rounded={false}
              block={false}
              ripple="light"
            >
              <DropdownItem color="lightBlue" ripple="light">
                India
              </DropdownItem>
              <DropdownLink
                href="#"
                //   color={color}
                ripple="light"
                onClick={(e) => e.preventDefault()}
              >
                America
              </DropdownLink>
              <DropdownItem color="lightBlue" ripple="light">
                United Kingdom
              </DropdownItem>
            </Dropdown>
            <br />
          </center>
        </div>
      </div>
      <div className="Login-two">
        <center>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae
          exercitationem nihil at neque perspiciatis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quasi possimus quaerat debitis soluta
          eius? Hic enim vel alias voluptatem, beatae in voluptatum error
          reprehenderit nesciunt dolorem voluptate praesentium labore dolorum
        </center>
      </div>
    </div>
  );
};

export default Login;
