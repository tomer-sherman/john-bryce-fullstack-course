import { DbLoggerModel } from "../models/dbLogger-mode";
import { dal } from "../util/dal";


class LoggerService {

    public addLog(log: DbLoggerModel): void {


        const sql = "insert into logs(method,route,body) values(?,?,?)";
        const values = [log.method, log.route, log.body];

        //no await, no return - Its a one way trip.
        //but we must catch, or a failed insert crashes the whole server.
        dal.execute(sql, values).catch(err => console.error("log failed:", err));
    }



}

export const loggerService = new LoggerService();