import {app} from "./app.js"
import { PORT } from "./config.js";                
import UserViews from "./routes/user.routes.js"
import EventosViews from "./routes/eventos.routes.js"
import  UploadFiles from "./routes/upload.routes.js"
import  DownloadFiles from "./routes/download.routes.js"
import  InfoFiles from "./routes/file_info.routes.js"
//import materialViews from "./routes/material.routes.js"

app.use(UserViews);

app.use(UploadFiles);

app.use(DownloadFiles);

app.use(InfoFiles);

app.use(EventosViews);


//app.use(materialViews);


app.listen(PORT);
console.log(`Server is listening in port ${PORT}`);
