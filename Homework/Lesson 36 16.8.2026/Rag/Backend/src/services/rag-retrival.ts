import { OpenAIEmbedding } from "@llamaindex/openai";
import { Settings, storageContextFromDefaults, TextNode, VectorStoreIndex } from "llamaindex";
import { appConfig } from "../utils/app-config";
import path from "node:path";



class RagRetrieval {

    private vectorStore: VectorStoreIndex = null!;

    // Load vector db - on construction run this:

    public constructor() {
        this.loadVectorDB();
    }


    private async loadVectorDB(): Promise<void> {

        Settings.embedModel = new OpenAIEmbedding({ apiKey: appConfig.openaiKey });

        const vectorDbFolder = path.join(__dirname, "..", "assets", "vector-db");
        const vectorDbStorage = await storageContextFromDefaults({ persistDir: vectorDbFolder });

        //Read the vector db files
        this.vectorStore = await VectorStoreIndex.init({ storageContext: vectorDbStorage });

    }

    public async retrieve(question: string, topResultsCount: number): Promise<string> {

        // Retrieve relevant chunks from the given question:
        const results = await this.vectorStore.asRetriever({ similarityTopK: topResultsCount }).retrieve(question);

        // Combine results into chunks:
        let chunks = "";
        for (let i = 0; i < results.length; i++) {
            const score = results[i].score;
            const text = (results[i].node as TextNode).text.replace(/\s+/g, " ");
            chunks += `[chunks ${i + 1} | score: ${score}]: ${text}\n\n`;
        }

        // Return chunks:
        return chunks

    }


}

export const ragRetrieval = new RagRetrieval();