
import {Form, Input, Card, Button} from 'antd';
import { UserOutlined , LockOutlined,MailOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

export function Register() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <Card className='w-[400px]'>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Username"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Email"
                                type='email'
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            name="re-password"
                            rules={[{ required: true, message: 'Please input Re Enter Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Enter Password Again"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='w-full'>Sign Up</Button>
                            Or <Link to="/login">Login</Link>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    );
}