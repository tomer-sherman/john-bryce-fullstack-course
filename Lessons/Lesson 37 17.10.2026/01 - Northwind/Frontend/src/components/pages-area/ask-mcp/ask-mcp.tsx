import { ChangeEvent, useState } from "react";
import "./ask-mcp.css";
import { notify } from "../../../utils/notify";
import { gptService } from "../../../services/gpt-service";
import { Spinner } from "../../shared-area/spinner/spinner";

export function AskMcp() {

    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [flag, setFlag] = useState<boolean>(false);

    function handleChange(args: ChangeEvent<HTMLInputElement>) {
        setQuestion(args.target.value);
    }


    async function send() {

        try {
            setFlag(true)
            const answer = await gptService.getCompletion(question);
            setAnswer(answer);

        }
        catch (err: any) {
            notify.error(err.message);
        } finally {
            setFlag(false);
        }

    }


    return (
        <div className="AskMcp">


            <label>Ask a about our orders:</label>
            <input type="text" onChange={handleChange}></input>
            <button onClick={send}>Send</button>

            {flag && <Spinner />}
            {answer}

        </div>
    );
}
