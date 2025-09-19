import { Server } from "./presentation/server";

// cuncion anonima autoejecutable
const main =()=>{
    Server.start();
}


(async()=>{
    main();
}
)()


