import React, { useState } from "react";
import { Form, Input, Button, Modal, notification } from "antd";
import { Auth } from "aws-amplify";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

import { setUserType, StateTypes, setIsAuth, setLoading } from "../../redux";
import { LoginPropsTypes, LoginFormSubmitTypes } from "./types";
import "./Login.scss";

const Login: React.FC<LoginPropsTypes> = (props) => {
  const { setUserType, setIsAuth } = props;
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const history = useHistory();

  const signInFunc = async (values: LoginFormSubmitTypes) => {
    const { username, password } = values;
    try {
      setLoginLoading(true);
      const resp = await Auth.signIn(username, password);
      const type =
        resp.signInUserSession.idToken.payload["cognito:groups"][0] ===
        "userCandidate"
          ? "candidate"
          : "recruiter";
      setUserType(type);
      setIsAuth(true);
      setLoginLoading(false);
      history.push("/home");
    } catch (e: any) {
      setLoginLoading(false);
      if (e?.code === "UserNotFoundException") {
        notification.error({
          message: e?.message,
        });
      }
    }
  };

  const setSignUpModalVisible = () => history.push("/signup");

  // const signInWithGoogle = () =>
  //   Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });

  const handleCandidateSubmit = (values: LoginFormSubmitTypes) => {
    signInFunc(values);
    setUserType("candidate");
  };

  return (
    <Modal
      visible={true}
      maskClosable={false}
      closable={false}
      bodyStyle={{ padding: "40px" }}
      width="420px"
      footer={null}
      centered
    >
      <Form onFinish={handleCandidateSubmit}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              type: "email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loginLoading}>
            Login
          </Button>
        </Form.Item>
        {/* <Form.Item>
          <Button htmlType="submit" block onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </Form.Item> */}
        <Form.Item>
          <div className="login__otherlinks">
            <Button type="link" onClick={setSignUpModalVisible}>
              Register
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  userType: state.userType,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setUserType,
      setIsAuth,
      setLoading
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
