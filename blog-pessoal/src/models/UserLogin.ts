import { ExecSyncOptionsWithBufferEncoding } from "child_process";

interface UserLogin{
    id:number;
    usuario: string;
    senha: string;
    token?: string| null
}

export default UserLogin;