import { config } from "dotenv";
import { Server } from "./presentation/server";

config(); // Cargar variables de entorno desde el archivo .env

// cuncion anonima autoejecutable
const main =()=>{
    Server.start();
}


(async()=>{
    main();
}
)()


