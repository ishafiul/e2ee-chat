import {Avatar} from "antd";

export function ChatList(){
    return (
        <div className="flex items-center gap-6 mt-6">
            <Avatar size="large"  src="https://joeschmoe.io/api/v1/random"  />
            <div className="space-y-0">
                <h2 className="text-lg m-0 p-0">Name</h2>
                <p>lat message</p>
            </div>
        </div>
    )
}