
//instalation for my sql 2

import mysql2, { PoolOptions, QueryError, QueryResult } from "mysql2";
import { rejects } from "node:assert";
import { resolve } from "node:dns";
import { appConfig } from "./app-config";

class Dal {

    // Configure for out DB
    private readonly options: PoolOptions = {
        host: appConfig.mysqlHost,
        user: appConfig.mysqlUser,
        password: appConfig.mysqlPassword,
        database: appConfig.mysqlDatabase,

    };

    // Connection object:
    private readonly connection = mysql2.createPool(this.options);

    // Execute SQL:
    public execute(sql: string, values?: (string | number | boolean | null)[]): Promise<QueryResult> {

        return new Promise<QueryResult>((resolve, reject) => {
            this.connection.query(sql, values, (err: QueryError | null, result: QueryResult) => {

                if (err) (reject(err))
                else { resolve(result) };


            })
        });




    }

}

export const dal = new Dal();