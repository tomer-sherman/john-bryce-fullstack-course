import mysql12, { PoolOptions, QueryError, QueryResult } from "mysql2";
import { appConfig } from "./app-config";


class Dal {

    // Configure for the KEY entry for the db

    private readonly options: PoolOptions = {
        host: appConfig.mysqlHost,
        user: appConfig.mysqlUser,
        password: appConfig.mysqlPassword,
        database: appConfig.mysqlDatabase
    };

    // Connection object: this connects this sensetive information, too the Dal, 
    //each time someone uses a services, it exucutes a call too the DB that does something too the Data CRUD.
    // Then each time there is a request that goes througout the server the dall is the last class, Which a request goes throughout.

    private readonly connection = mysql12.createPool(this.options);

    //Execute SQL:
    public execute(sql: string, values?: (string | number | boolean | null)[]): Promise<QueryResult> {

        return new Promise<QueryResult>((resolve, reject) => {

            this.connection.query(sql, values, (err: QueryError | null, result: QueryResult) => {

                if (err) (reject(err))
                else { resolve(result) };

            });
        });
    };

};

export const dal = new Dal();