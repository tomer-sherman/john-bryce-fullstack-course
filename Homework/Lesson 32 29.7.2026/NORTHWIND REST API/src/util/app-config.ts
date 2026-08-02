// npm installation
import dotenv from "dotenv";

dotenv.config({ quiet: true });

class AppConfig {



    public readonly mysqlHost = process.env.MYSQL_HOST;
    public readonly mysqlUser = process.env.MYSQL_USER;
    public readonly mysqlPassword = process.env.MYSQL_PASSWORD;
    public readonly mysqlDatabase = process.env.MYSQL_DATABASE;

}


export const appConfig = new AppConfig();