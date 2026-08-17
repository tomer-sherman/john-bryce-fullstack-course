import { io, Socket } from "socket.io-client";
import "./chat.css";

import { appConfig } from "../../../utils/app-config";

import { useForm } from "react-hook-form";
import { ChatModel } from "../../../models/chat-model";
import { useState } from "react";
import { notify } from "../../../utils/notify";



let socket: Socket = null!;

export function Chat() {
    const { register, handleSubmit } = useForm<ChatModel>();
    const [chatList, setChatList] = useState<ChatModel[]>([]);



    // Connect once to the socket server:
    function connect(): void {
        socket = io(appConfig.serverUrl);


        socket.on("server-welcome", (msg: string) => {
            notify.success(msg);
        })



        socket.on("server-message", (chat: ChatModel) => {

            setChatList(chatList => [...chatList, chat]);

        })
    }


    //Send message to server:
    function send(chat: ChatModel): void {

        chat.id = crypto.randomUUID();
        socket.emit("client-message", chat);
    }


    // Connect to server:
    function disconnect(): void {
        socket.disconnect();
    }


    return (
        <div className="Chat">

            <button onClick={connect} >Connect</button>
            <hr />



            <form onSubmit={handleSubmit(send)} >
                <label>NickName:</label>
                <input type="text" {...register("nickname")}></input>
                <label>Select Color:</label>
                <input type="color" {...register("color")} />
                <label>Message: </label>
                <input type="text" {...register("message")} />
                <button>Send</button>
            </form>

            <button onClick={disconnect}>Disconnect</button>
            <hr />


            <div className="chat-list">
                {chatList.map(chat => (
                    <div key={chat.id} className="chat-message" style={{ color: chat.color }}>


                        <p>{chat.nickname}</p>
                        <p>{chat.message}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
