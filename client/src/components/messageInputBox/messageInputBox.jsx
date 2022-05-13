import './messageInputBox.css'
import {Button} from "antd";
import {SendOutlined} from "@ant-design/icons";

export function MessageInputBox(){
 return (
     <>
      <div className="relative w-full border-red-400">

          <textarea id='hola' className="absolute" />

          <button type="submit" className="send"><SendOutlined className="text-4xl"/></button>
      </div>
     </>
 )
}