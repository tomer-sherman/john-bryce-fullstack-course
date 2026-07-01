import { useState } from "react";
import { QnaModal } from "../../../models/qna-modal";
import "./qna-card.css";

type QnaCardProps = {
    qna: QnaModal;
};

export function QnaCard(props: QnaCardProps) {
    // 1. Initialize state to false (hidden by default)
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        // 2. Add an onClick handler to toggle the state, and dynamically add an 'open' class
        <div 
            className={`QnaCard ${isOpen ? "open" : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
        >
            <p className="question"><strong>Question:</strong> {props.qna.q}</p>
            
            {/* 3. Wrap the answer so we can animate its height in CSS */}
            <div className="answer-wrapper">
                <p className="answer"><strong>Answer:</strong> {props.qna.a}</p>
            </div>
        </div>
    );
}