import { QnaModal } from "../models/qna-modal";

class JsonSatnitizer {
	public sanitize(text: string): QnaModal[]{
        
        const start = text.indexOf("[");
        const end = text.lastIndexOf("]");
        const json = text.substring(start,end+1);
        const qna: QnaModal[] = JSON.parse(json);
        return qna;
        
    }
}

export const jsonSatnitizer = new JsonSatnitizer();
