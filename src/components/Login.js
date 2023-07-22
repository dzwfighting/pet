import React, { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { checkExitByEmail } from "../manipulate/checkValid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../manipulate/action";

const Login = (args) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccessLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let errorMessage = "";
  const handleLogin = () => {
    if (!checkExitByEmail(email)) {
      console.log("in");
      errorMessage =
        "this email is not exit or the email or password input wrong, please try again";
      navigate(`/error/${errorMessage}`);
    }
    let curUser = { email, password };
    dispatch(login(curUser));
    setSuccessLogin(true);
    navigate("/");
  };
  const toggle = () => {
    setSuccessLogin(!successLogin);
    navigate("/");
  };
  return (
    <div>
      {successLogin && (
        <Modal isOpen={successLogin} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle} style={{ fontFamily: "cursive" }}>
            Login success, enjoy~
          </ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Ok
            </Button>{" "}
          </ModalFooter>
        </Modal>
      )}
      <div
        style={{ marginLeft: "40px", marginRight: "100px", marginTop: "60px" }}
      >
        <Form>
          <FormGroup>
            <Label
              for="exampleEmail"
              style={{ fontSize: "2rem", fontFamily: "cursive" }}
            >
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="input your email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ height: "45px", marginBottom: "60px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label
              for="examplePassword"
              style={{ fontSize: "2rem", fontFamily: "cursive" }}
            >
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="input your email"
              type="password"
              style={{ height: "45px", marginBottom: "50px" }}
            />
          </FormGroup>
          <Button onClick={handleLogin}>Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
