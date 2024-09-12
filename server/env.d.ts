declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_Username: string;
    DB_Password: string;
    DB_Name: string;
    DB_HOST_Address: string;
    DB_PORT: string;
    DB_Dialect: postgres;
  }
}
