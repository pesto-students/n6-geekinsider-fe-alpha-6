import React, { useState } from "react";
import { Form, Input, Button, Alert, Modal, Tabs, notification } from "antd";
import axios from "axios";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import makeRequest from "../../utils/makeRequest";
import { setUserType, StateTypes, setIsAuth } from "../../redux";
import {
  SignupTypes,
  SignupTabsType,
  ConfirmSignInFormValueTypes,
  ConfirmSignUpTypes,
} from "./types";
import { UserDetailTypes } from "./types";
import { UserTypeTypes } from "../../routes";

import "./Signup.scss";

const { TabPane } = Tabs;

const Signup: React.FC<SignupTypes> = (props) => {
  const history = useHistory();
  const { userType, setUserType, setIsAuth } = props;
  const [activeTab, setActiveTab] = useState<UserTypeTypes>("candidate");
  const [loading, setLoading] = useState<boolean>(false);
  const [userDetail, setUserDetail] = useState<UserDetailTypes>({
    email: "",
    password: "`",
  });

  const signUpApi = async ({ username, password }) => {
    const result = await makeRequest.auth("signup", {
      email: username,
      password: password,
      role: getCandidateNamesForApi(activeTab),
    });
    return result;
  };

  const signUp = async (values: UserDetailTypes) => {
    const { email, password } = values;
    try {
      setLoading(true);
      const resp = await signUpApi({ username: email, password });
      // setActiveTab("emailVerification");
      notification.success({
        message: "Successfully created account",
        description: email,
      });
      const type =
        resp.user.role === "userCandidate" ? "candidate" : "recruiter";
      localStorage.setItem("access_token", resp.token);
      localStorage.setItem("user", JSON.stringify(resp.user));
      setLoading(false);
      setIsAuth(true);
      history.push(`/${type}/onboarding`);
    } catch (error: any) {
      setLoading(false);
      if (error?.code === "UsernameExistsException") {
        notification.error({
          message: error?.message,
        });
      }
    }
  };

  const onActiveKeyChange = (val: any) => setActiveTab(val);

  const openSignInModal = () => history.push("/login");

  // const handleConfirmSignup = async (val: ConfirmSignInFormValueTypes) => {
  //   confirmSignup({ ...val, email: userDetail.email });
  // };

  const getCandidateNamesForApi = (type: UserTypeTypes | undefined) => {
    switch (type) {
      case "candidate":
        return "userCandidate";
      case "recruiter":
        return "userRecruiter";
      default:
        return "userCandidate";
    }
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
      <Tabs activeKey={activeTab} onChange={onActiveKeyChange} centered>
        <TabPane tab="Candidate" key="candidate">
          <Form
            name="basic"
            onFinish={(val) => {
              signUp(val);
              setUserDetail({ ...val });
              setUserType("candidate");
            }}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                Sign up
              </Button>
            </Form.Item>
            <Form.Item>
              <div className="signup__otherlinks">
                <Button type="link" onClick={openSignInModal}>
                  Sign in
                </Button>
              </div>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Recruiter" key="recruiter">
          <Form
            name="basic"
            onFinish={(val) => {
              signUp(val);
              setUserDetail({ ...val });
              setUserType("recruiter");
            }}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                Sign up
              </Button>
            </Form.Item>
            <Form.Item>
              <div className="signup__otherlinks">
                <Button type="link" onClick={openSignInModal}>
                  Sign in
                </Button>
              </div>
            </Form.Item>
          </Form>
        </TabPane>
        {/* <TabPane key="emailVerification">
          <Form name="Email verification" onFinish={handleConfirmSignup}>
            <Form.Item>
              <Alert
                message="Verification pin successfully sent to your email"
                type="success"
                showIcon
              />
            </Form.Item>
            <Form.Item
              name="authCode"
              rules={[
                {
                  required: true,
                  message: "Please input pin sent on your email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="PIN"
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                Confirm sign up
              </Button>
            </Form.Item>
          </Form>
        </TabPane> */}
      </Tabs>
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
