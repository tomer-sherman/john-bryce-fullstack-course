import { useState } from "react";
import { useForm } from "react-hook-form";
import { QuestionModel } from "../../../models/question-model";
import { questionService } from "../../../services/question-service";
import "./home.css";

export function Home() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<QuestionModel>();
    const [completion, setCompletion] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [serverError, setServerError] = useState<string>("");

    async function send(questionForm: QuestionModel) {
        try {
            setServerError("");
            setCompletion("");
            setLoading(true);
            questionForm.question = questionForm.question.trim();

            const answer = await questionService.ask(questionForm);
            setCompletion(answer);
            reset();
        }
        catch (err: any) {
            const data = err?.response?.data;
            setServerError(typeof data === "string" ? data : err?.message ?? "Transmission failed.");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="Home">

            <span className="scanline"></span>

            <header className="hero">
                <span className="status-badge"><span className="pulse-dot"></span>SYSTEM ONLINE</span>
                <h1 className="logo">Cipher<span>Mind</span></h1>
                <p className="tagline">Cybersecurity knowledge engine — answers decrypted straight from the vault.</p>
            </header>

            <form className="console" onSubmit={handleSubmit(send)}>

                <div className="console-bar">
                    <span></span><span></span><span></span>
                    <em>ciphermind@vault:~$</em>
                </div>

                <div className="console-body">

                    <label htmlFor="question">&gt;_ Enter query</label>
                    <textarea id="question" rows={4} autoFocus placeholder="e.g. How can I defend against phishing attacks?"
                        {...register("question", {
                            required: "Question is required.",
                            validate: {
                                minLength: value => value.trim().length >= 2 || "Question must be at least 2 characters.",
                                maxLength: value => value.trim().length <= 1000 || "Question can't exceed 1000 characters."
                            }
                        })}></textarea>
                    <span className="field-error">{errors.question?.message}</span>

                    <label htmlFor="topResultsCount">Knowledge chunks to scan (3–7)</label>
                    <input id="topResultsCount" type="number" min={3} max={7} defaultValue={5}
                        {...register("topResultsCount", {
                            required: "Chunks count is required.",
                            valueAsNumber: true,
                            min: { value: 3, message: "Chunks count must be at least 3." },
                            max: { value: 7, message: "Chunks count can't exceed 7." },
                            validate: value => Number.isInteger(value) || "Chunks count must be a whole number."
                        })} />
                    <span className="field-error">{errors.topResultsCount?.message}</span>

                    <button className="ask-btn" disabled={loading}>
                        {loading ? "Decrypting..." : "Ask CipherMind"}
                    </button>

                </div>

            </form>

            {loading && (
                <div className="scanner">
                    <div className="scan-track"><div className="scan-bar"></div></div>
                    <p>Scanning knowledge base<span className="cursor">▊</span></p>
                </div>
            )}

            {serverError && <div className="server-error">⚠ {serverError}</div>}

            {completion && (
                <section className="answer">
                    <div className="answer-head">// AI_RESPONSE_DECRYPTED</div>
                    <p>{completion}</p>
                </section>
            )}

            <footer className="footer-note">CIPHERMIND · RAG-POWERED · ENCRYPTED CHANNEL</footer>

        </div>
    );
}
