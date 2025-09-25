import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { envs } from "../config/plugins/envs.plugin";


export class Server{
    public static start(): void {
        console.log("Server started");
        const fecha = new Date();

        const url: string= process.env.URL || "No DEVELOPER in .env"
   
        console.log(`Server running on port ${envs.PORT} - ${ fecha }`);
        
        

        CronService.createJob( "*/5 * * * * *", ()=>{
           new CheckService(
            ()=> console.log(`Success Callback executed: ${envs.MAILER_EMAIL}`),
            (error)=> console.log(`Error: ${ fecha }`, error)
           ).execute(url) 
        } );

   
    }
}

