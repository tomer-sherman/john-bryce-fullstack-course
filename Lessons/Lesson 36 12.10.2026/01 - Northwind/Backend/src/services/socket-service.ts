import { Server as httpServer } from "http";
import { ServerOptions, Socket, Server as socketServer } from "socket.io";
import { ChatModel } from "../models/chat-model";


class SocketService {


    // Socket server:
    private socketServer: socketServer = null!;




    // Start listening:
    public start(httpServer: httpServer): void {


        const options: Partial<ServerOptions> = { cors: { origin: "*" } };

        this.socketServer = new socketServer(httpServer, options);

        // Listen to new client connections:
        this.socketServer.sockets.on("connection", (socket: Socket) => {

            console.log("New client has been connected...");

            //Listen too client messages:
            socket.on("client-message", (chat: ChatModel) => {
                console.log("Client sent message: ", chat);
                this.socketServer.sockets.emit("server-message",chat);
            });

        
           setTimeout(()=>{

            socket.emit("server-welcome", "You have been successfully connected.");

           },1000)



            // Listen to client disconnect:
            socket.on("disconnect", () => {
                console.log("Client has been disconnected...");
            });




        })

    }


}

export const socketService = new SocketService();