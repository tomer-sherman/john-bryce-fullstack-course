import { OpenAIEmbedding } from "@llamaindex/openai";
import { Settings, storageContextFromDefaults, VectorStoreIndex } from "llamaindex";
import { appConfig } from "../utils/app-config";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import path from "node:path";


// Here we run the embeding of the knowledge base. too tokens!!! for the Ai too understand.
class RagEmbedding {


    public constructor() {
        this.embed()
    }

    private async embed(): Promise<void> {


        Settings.embedModel = new OpenAIEmbedding({ apiKey: appConfig.openaiKey }) // This is the key that needs for the embedding. cause it needs computing power too embed.
        Settings.chunkSize = 512 // The size of each chunk in tokens (default is 1024);
        Settings.chunkOverlap = 128 // Over lap of chunks on top of each other;

        //Read the knowledge-base:

        const reader = new SimpleDirectoryReader();
        const docsFolder = path.join(__dirname, "..", "assets", "docs");
        const documents = await reader.loadData({ directoryPath: docsFolder });

        // Define the vector-db storage:
        const vectorDbFolder = path.join(__dirname, "..", "assets", "vector-db");
        const vectorDbStorage = await storageContextFromDefaults({ persistDir: vectorDbFolder });

        //Create the vector-db files in that folder:
        const vectorStore = await VectorStoreIndex.fromDocuments(documents, { storageContext: vectorDbStorage });

        //Display total chunks created:
        const nodes = vectorStore.indexStruct.nodesDict;
        console.log("Total chunks created" + Object.keys(nodes).length);

    }



}

export const ragEmbedding = new RagEmbedding();