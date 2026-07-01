import { useForm } from "react-hook-form";
import "./home.css";
import { InterviewModel } from "../../../models/interview-model";
import { promptsService } from "../../../services/prompts-service";
import { useState } from "react";
import { QnaModal } from "../../../models/qna-modal";
import { QnaCard } from "../../shared-area/qna-card/qna-card";
import { Spinner } from "../../shared-area/spinner/spinner";

export function Home() {
const {register, handleSubmit} = useForm<InterviewModel>();
const [qna, setQna] = useState<QnaModal[]>();
const [loading ,setLoading] = useState<boolean>(false);

     async function send(interview: InterviewModel){
        try{
            setLoading(true);
            setQna([]);
            const qna = await promptsService.getQna(interview);
            setQna(qna);
            
        }
        catch(err:any){
            alert(err.message);
        
        }
        finally{
            setLoading(false)
        }
    }


    return (
        <div className="Home">

            <form onSubmit={handleSubmit(send)}>

                <label>Tech</label>
                <input type="text" {...register("tech")} required maxLength={30}/>

                <label>Level</label>
                <select defaultValue="" {...register("level")} required>
                        <option disabled value="">Select one...</option>
                        <option>Junior</option>
                        <option>Mid</option>
                        <option>Senior</option>
                </select>

                <label>Total Questions: </label>
                <input type="number" {...register("count")} min={1} max={10}  required/>
                
                <button>Go</button>

            </form>

            <hr/>
            {loading && <Spinner/>}
            {qna?.map((item, index) => <QnaCard key={index} qna={item}  />)}

        </div>
    );
}
