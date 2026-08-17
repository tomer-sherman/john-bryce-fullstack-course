import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { mcpTools } from "./mcp-tools";
import z from "zod";

// Here you need too explain each tool for the Ai to use cause he doesn't read the code he reads this messages we write NOW.
class McpRegister {

    public registerGetAllOrders(mcpServer: McpServer): void {
        const uniqueName = "get_all_orders";
        const config = {
            description: "Get all data base orders."
        }
        mcpServer.registerTool(uniqueName, config, mcpTools.getAllOrdersTool);
    }

    public registerGetOneOrder(mcpServer: McpServer) {
        const uniqueName = "get_one_order";
        const config = {
            description: "Get data base order by id.",
            inputSchema: z.object({ id: z.number() })
        }

        mcpServer.registerTool(uniqueName, config, mcpTools.getOneOrderTool);

    }

    public registerGetOrdersByYear(mcpServer: McpServer) {

        const uniqueName = "get_orders_by_year";
        const config = {
            description: "Get data base orders filtered by year.",
            inputSchema: z.object({ year: z.number() })
        }

        mcpServer.registerTool(uniqueName, config, mcpTools.getOrdersByYearTool);

    }



}

export const mcpRegister = new McpRegister();