import { Form, Input, Button, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { saveCandidateData } from '../../redux/actions';
import { CandidateOnboardingPropTypes, CandidateSubmitTypes } from './types';
import { StateTypes } from '../../redux/types';
import './onboarding.scss';

const { Option } = Select;

const CandidateOnboarding: React.FC<CandidateOnboardingPropTypes> = (props) => {
    const { history, saveCandidateData } = props;

    const cities = ['Banglore', 'Pune', 'Chennai', 'Kolkata', 'Mumbai', 'Delhi', 'Indore', 'Vadodara'];
    const skills = ['React', 'Angular', 'Vue', 'Ember', 'NodeJS', 'JavaScript', 'HTML', 'CSS', 'SASS'];

	const onFinish = (values: CandidateSubmitTypes) => {
        const tempValues = Object.assign({}, values);
        const skillsString = Object.assign([], tempValues.skills);
        tempValues.skills = skillsString.join(',');
        saveCandidateData(tempValues, history);
	};

	const onFinishFailed = (errorInfo: object) => {
		// console.log('Failed:', errorInfo);
	};

	return (
        <div className="onboarding">
            {/* <header className="App-header">Create your Candidate profile</header> */}
            <Form
                name="Candidate onboarding"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Full name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your full name!' }]}
                >
                    <Input placeholder="Please enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Job title"
                    name="jobTitle"
                    rules={[{ required: true, message: 'Please enter your current job title!' }]}
                >
                    <Input placeholder="Please enter your current job title" />
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please select your current location!' }]}
                >
                    <Select
                        showSearch
                        placeholder="Please select your current location"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {cities.map(itm => <Option value={itm} key={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Whatsapp number"
                    name="whatsappNumber"
                    rules={[
                        { 
                            required: true, 
                            message: 'Please add a valid whatsapp number!',
                            validator(_, value) {
                                if (value && value.length === 10) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }
                    ]}
                >
                    <Input placeholder="Please add your whatsapp number" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please enter an email address!' }]}
                >
                    <Input placeholder="Please enter an email address" />
                </Form.Item>

                <Form.Item
                    label="Years of experience"
                    name="exp"
                    rules={[{ required: true, message: 'Please select years of experience!' }]}
                >
                    <Input placeholder="i.e 3.5 years" />
                </Form.Item>

                <Form.Item
                    label="Skills"
                    name="skills"
                    rules={[
                        { 
                            required: true, 
                            message: 'Please select atleast three skills!',
                            validator(_, value) {
                                if (value && value.length>=3) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }
                    ]}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder="Please select atleast three skills"
                    >
                        {skills.map(itm => <Option value={itm} key={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Current ctc"
                    name="ctc"
                    rules={[{ required: true, message: 'Please add current ctc!' }]}
                >
                    <Input placeholder="i.e 4.5Lac" />
                </Form.Item>

                <Form.Item
                    label="About"
                    name="about"
                    rules={[{ required: false, message: 'Please enter a brief introduction about yourself!' }]}
                >
                    <Input.TextArea placeholder="A brief introduction about yourself" />
                </Form.Item>

                <Form.Item
                    label="Github"
                    name="githubUrl"
                    rules={[{ required: false, message: 'Please enter your github profile link!', type: 'url' }]}
                >
                    <Input placeholder="Github profile link" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    <Button type="primary" htmlType="submit">
                        Submit details
                    </Button>
                </Form.Item>
            </Form>
		</div>
	);
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    saveCandidateData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CandidateOnboarding);