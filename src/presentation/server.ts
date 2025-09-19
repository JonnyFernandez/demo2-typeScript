import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { error } from "console";


export class Server{
    public static start(): void {
        console.log("Server started");
        const fecha = new Date();

        CronService.createJob( "*/5 * * * * *", ()=>{
        //    new CheckService().execute("https://www.google.com")
           new CheckService(
            ()=> console.log("Success Callback executed"),
            (error)=> console.log(`Error: ${ fecha }`, error)
           ).execute("http://localhost:3000/") 
        } );

   
    }
}

