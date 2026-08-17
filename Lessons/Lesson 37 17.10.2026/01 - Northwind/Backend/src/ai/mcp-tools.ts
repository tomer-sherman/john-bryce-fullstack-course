// Tools - what MCP server do?
// Tools to be used by the mcp server.

import { CallToolResult } from "@modelcontextprotocol/sdk/types";
import { orderService } from "../services/order-service";

class McpTools {

    public async getAllOrdersTool(): Promise<CallToolResult> {

        console.log("using tool: getAllOrdersTool");
        const orders = await orderService.getAllOrders();
        const result: CallToolResult = { // You have to use this protocol to send the MCP , this way cause only this way MCP servers work with AI.
            content: [{
                type: "text",
                text: JSON.stringify(orders)
            }]
        };
        return result;
    }



    public async getOneOrderTool(args: { id: number }): Promise<CallToolResult> {
        console.log("using tool: get one order");

        const order = await orderService.getOneOrder(args.id);
        const result: CallToolResult = {
            content: [{
                type: "text",
                text: JSON.stringify(order)
            }]
        };
        return result;
    }



    public async getOrdersByYearTool(args: { year: number }): Promise<CallToolResult> {
        console.log("using tool: getOrdersByYear!");

        const orders = await orderService.getOrdersByYear(args.year);
        const result: CallToolResult = {
            content: [{
                type: "text",
                text: JSON.stringify(orders)
            }]
        };

        return result;
    }

    
}

export const mcpTools = new McpTools()