import {Layout, Card, Avatar, Menu, Dropdown, Space, Divider, Input} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {
    DownOutlined,
    HomeOutlined,
    MessageOutlined,
    SettingOutlined,
    SmileOutlined,
    UserOutlined
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import {ChatList} from "../../components/chatList";
import TextArea from "antd/es/input/TextArea";
import {MessageInputBox} from "../../components/messageInputBox/messageInputBox";
const menu = (
    <Menu
        items={[
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                ),
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item (disabled)
                    </a>
                ),
                icon: <SmileOutlined />,
                disabled: true,
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item (disabled)
                    </a>
                ),
                disabled: true,
            },
            {
                danger: true,
                label: 'a danger item',
            },
        ]}
    />
);

export function ChatLayout({message}){
    return(
        <>
            <div className="container mx-auto">
                <Card className="h-screen">
                    <div className="flex justify-center items-center pb-6">
                        Hola Chat
                    </div>
                    <div className="grid grid-cols-12 h-[calc(100vh-100px)] border">
                        <div className="col-span-1 border-r p-6 pt-6 h-[calc(100vh-100px)]">
                           <div className="space-y-4 flex flex-col justify-center items-center">
                               <Avatar size="large"  src="https://joeschmoe.io/api/v1/random"  />
                               <div className="">
                                   <Dropdown overlay={menu}>
                                       <a onClick={e => e.preventDefault()}>
                                           <Space>
                                               Name
                                               <DownOutlined />
                                           </Space>
                                       </a>
                                   </Dropdown>
                               </div>
                           </div>
                            <Divider />
                            <div className="flex flex-col justify-center items-center gap-12">
                                <div>
                                    <HomeOutlined className="text-4xl" />
                                </div>
                                <div>
                                    <UserOutlined className="text-4xl" />
                                </div>
                                <div>
                                    <MessageOutlined className="text-4xl" />
                                </div>
                                <div>
                                    <SettingOutlined className="text-4xl" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 border-r p-6 h-[calc(100vh-100px)] space-y-6">
                            <Search size='large' placeholder="input search text" allowClear/>
                            <div className="overflow-y-scroll h-[calc(100vh-215px)]">
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                                <ChatList/>
                            </div>

                        </div>
                        <div className="col-span-7">
                            <div className="border-b p-6">
                                User Name
                            </div>
                            <div id='messageArea' className=" p-6 h-[calc(100vh-292px)] flex flex-col gap-3 overflow-y-scroll">
                                <div className="flex justify-start">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-[#1890ff] rounded-2xl text-white" style={{wordWrap:"break-word"}}>
                                        hi
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-[#1890ff] rounded-2xl text-white" style={{wordWrap:"break-word"}}>
                                        hola ppppp ppppppppppppp pppppppppp
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aspernatur cumque cupiditate debitis dolorem esse eum fuga illo illum iusto minus necessitatibus, officia ratione repellat reprehenderit sit ut vitae!
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-gray-300 rounded-2xl" style={{wordWrap:"break-word"}}>
                                        hola ppppp ppppppppppppp pppppppppp
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aspernatur cumque cupiditate debitis dolorem esse eum fuga illo illum iusto minus necessitatibus, officia ratione repellat reprehenderit sit ut vitae!
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-[#1890ff] rounded-2xl text-white" style={{wordWrap:"break-word"}}>
                                        hi
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-gray-300 rounded-2xl" style={{wordWrap:"break-word"}}>
                                        hola ppppp ppppppppppppp pppppppppp
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aspernatur cumque cupiditate debitis dolorem esse eum fuga illo illum iusto minus necessitatibus, officia ratione repellat reprehenderit sit ut vitae!
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-gray-300 rounded-2xl" style={{wordWrap:"break-word"}}>
                                        hola ppppp ppppppppppppp pppppppppp
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aspernatur cumque cupiditate debitis dolorem esse eum fuga illo illum iusto minus necessitatibus, officia ratione repellat reprehenderit sit ut vitae!
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-[#1890ff] rounded-2xl text-white" style={{wordWrap:"break-word"}}>
                                        hi
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-[#1890ff] rounded-2xl text-white" style={{wordWrap:"break-word"}}>
                                        hi
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-[#1890ff] rounded-2xl text-white" style={{wordWrap:"break-word"}}>
                                        hi
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="p-3 w-fit max-w-[calc(100%-87px)] bg-gray-300 rounded-2xl" style={{wordWrap:"break-word"}}>
                                        hola ppppp ppppppppppppp pppppppppp</div>
                                </div>
                            </div>
                            <MessageInputBox/>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}