import { useEffect, useState } from "react";
import { GiftModel } from "../../../models/gift-model";
import "./new.css";
import { useForm } from "react-hook-form"
import { AudienceModel } from "../../../models/audience-model";
import { dataService } from "../../../services/data-service";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";
export function New() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<GiftModel>();
    const [audience, setAudience] = useState<AudienceModel[]>([]);
    const navigate = useNavigate();


    useEffect(() => {

        dataService.getAllAudience()
            .then(audience => setAudience(audience))
            .catch(err => notify.error(err.message))


    }, [])


    async function send(gift: GiftModel) {

        try {
            await dataService.addGift(gift);
            notify.success("Gift has been added");
            navigate("/gifts")
        } catch (err: any) {
            notify.error(err.message);
        }


    }



    return (
        <div className="New">

            <h2>Add a New Gift</h2>
            <p className="subtitle">Fill in the details below and the gift will appear in the shop.</p>

            <form onSubmit={handleSubmit(send)} noValidate>

                <div className="field">
                    <label htmlFor="audienceId">Target audience</label>
                    <select id="audienceId" defaultValue="" aria-invalid={!!errors.audienceId} {...register("audienceId", {
                        valueAsNumber: true,
                        validate: v => !Number.isNaN(v) || "Please choose an audience"
                    })}>
                        <option disabled value="">Choose an audience</option>
                        {audience.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                    </select>
                    {errors.audienceId && <span className="error">{errors.audienceId.message}</span>}
                </div>

                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" aria-invalid={!!errors.name} {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Name needs at least 2 characters" },
                        maxLength: { value: 50, message: "Name is limited to 50 characters" }
                    })} />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>

                <div className="field">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" aria-invalid={!!errors.description} {...register("description", {
                        required: "Description is required",
                        minLength: { value: 10, message: "Description needs at least 10 characters" },
                        maxLength: { value: 5000, message: "Description is limited to 5000 characters" }
                    })}></textarea>
                    {errors.description && <span className="error">{errors.description.message}</span>}
                </div>

                <div className="row">
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <input id="price" type="number" step="0.01" aria-invalid={!!errors.price} {...register("price", {
                            valueAsNumber: true,
                            validate: v => !Number.isNaN(v) || "Price is required",
                            min: { value: 0, message: "Price cannot be negative" },
                            max: { value: 10000, message: "Price is limited to 10,000" }
                        })} />
                        {errors.price && <span className="error">{errors.price.message}</span>}
                    </div>

                    <div className="field">
                        <label htmlFor="discount">Discount % (optional)</label>
                        <input id="discount" type="number" aria-invalid={!!errors.discount} {...register("discount", {
                            setValueAs: v => (v === "" || v === null || v === undefined ? undefined : Number(v)),
                            min: { value: 0, message: "Discount cannot be negative" },
                            max: { value: 100, message: "Discount is limited to 100%" }
                        })} />
                        {errors.discount && <span className="error">{errors.discount.message}</span>}
                    </div>
                </div>

                <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Adding…" : "Add Gift"}</button>
            </form>
        </div>
    );
}
