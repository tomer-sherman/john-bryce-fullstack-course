import axios from "axios";
import { AudienceModel } from "../models/audience-model";
import { appConfig } from "../utils/app-config";
import { GiftModel } from "../models/gift-model";

class DataService {

    public async getAllAudience(): Promise<AudienceModel[]> {

        const response = await axios.get<AudienceModel[]>(appConfig.audienceUrl);
        const data = response.data;

        return data;

    }

    public async getProductsByAudience(audienceId: number): Promise<GiftModel[]> {
        const response = await axios.get<GiftModel[]>(appConfig.giftByAudienceUrl + audienceId);
        const data = response.data;

        return data;
    }

    public async addGift(gift: GiftModel): Promise<void> {

        const response = await axios.post<GiftModel[]>(appConfig.giftsUrl, gift);
        const data = response.data;
        console.log(data);

    }

}

export const dataService = new DataService();
