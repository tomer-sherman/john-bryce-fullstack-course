import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { mcpRegister } from "./mcp-register";

class NorthwindMcpServerMcpServer {


    public create(): McpServer {
        const mcpServer = new McpServer({
            name: "northwind-mcp-server",
            version: "1.0.0"
        });

        //Register tools:
        mcpRegister.registerGetAllOrders(mcpServer);
        mcpRegister.registerGetOneOrder(mcpServer);
        mcpRegister.registerGetOrdersByYear(mcpServer);

        return mcpServer;
    }


}

export const northwindMcpServer = new NorthwindMcpServerMcpServer();