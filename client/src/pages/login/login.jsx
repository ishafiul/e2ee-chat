
import {Form, Input, Card, Button, Checkbox} from 'antd';
import { UserOutlined , LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

export function Login() {
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
                        <Form.Item>
                            <div className="flex justify-between">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item>
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='w-full'>Sign In</Button>
                            Or <Link to="/register">register now!</Link>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    );
}