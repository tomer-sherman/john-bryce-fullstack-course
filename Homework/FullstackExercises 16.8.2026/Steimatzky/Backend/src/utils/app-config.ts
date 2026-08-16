import dotenv from "dotenv"; // npm install dotenv

// Loads .env values into: process.env object:
dotenv.config({ quiet: true });

class AppConfig {

    public readonly environment = process.env.ENVIRONMENT!;
    public readonly isDevelopment = this.environment === "development";
    public readonly isProduction = this.environment === "production";

    public readonly port = 4000;
    public readonly mysqlHost = process.env.MYSQL_HOST!;
    public readonly mysqlUser = process.env.MYSQL_USER!;
    public readonly mysqlPassword = process.env.MYSQL_PASSWORD!;
    public readonly mysqlDatabase = process.env.MYSQL_DATABASE!;

}

export const appConfig = new AppConfig();
