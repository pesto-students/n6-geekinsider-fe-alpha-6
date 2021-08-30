import React from 'react';
import { Auth } from 'aws-amplify';
import { Row, Col, AutoComplete, Dropdown, Menu, Button } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import './Navbar.scss';
import { HistoryContext } from '../../routes/Routes';
import { NavBarPropTypes } from './types';

const NavBar: React.FC<NavBarPropTypes> = (props) => {

    const { history } = props;
    const signOut = async () => {
        await Auth.signOut();
        history.push('/login');
    }

    const handleSelect = (val: string) => {
        history.push(`/search?query=${val}`)
    }

    return (
        <>
            <header className="navbar-container">
                <Row>
                    <Col xs={{ span: 5 }} lg={{ span: 4 }} flex='none' className="geekinsider-logo" onClick={() => history.push('/home')}>
                        <h2 style={{ margin: '0 50px' }}>Geekinsider</h2>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} lg={{ span: 15, offset: 1 }}>
                        <AutoComplete
                            style={{ width: '100%' }}
                            options={[
                                { value: 'React' },
                                { value: 'JavaScript' },
                                { value: 'TypeScript' },
                            ]}
                            placeholder="Search jobs"
                            filterOption={(inputValue, option) =>
                                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            onSelect={handleSelect}
                        />
                    </Col>
                    <Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <div style={{ display: 'flex' }}>
                            <Dropdown 
                                trigger={['click']}
                                overlay={
                                    <Menu>
                                        <Menu.Item>
                                            <h2>Success</h2>
                                            <span>some description that you've notified for something</span>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <h2>Success</h2>
                                            <span>some description that you've notified for something</span>
                                        </Menu.Item>
                                    </Menu>
                                } 
                                placement="bottomRight" 
                                arrow
                            >
                                <Button 
                                    shape="circle" 
                                    size="large" 
                                    icon={<BellOutlined />} 
                                    style={{
                                        marginRight: '5px'
                                    }}
                                />
                            </Dropdown>
                            <HistoryContext.Consumer>
                                {(history: any) => <Dropdown 
                                    trigger={['click']}
                                    overlay={
                                        <Menu>
                                            <Menu.Item onClick={() => history.push('/profile')}>
                                                Profile
                                            </Menu.Item>
                                            <Menu.Item>
                                                Account Settings
                                            </Menu.Item>
                                            <Menu.Item onClick={signOut}>
                                                Logout
                                            </Menu.Item>
                                        </Menu>
                                    } 
                                    placement="bottomRight" 
                                    arrow
                                >
                                    <Button shape="circle" size="large" icon={<UserOutlined />} />
                                </Dropdown>}
                            </HistoryContext.Consumer>
                        </div>
                    </Col>
                </Row>
            </header>
        </>
    )
}

export default NavBar;