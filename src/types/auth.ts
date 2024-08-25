export type Auth = {
    id: string;
    email:string;
    password:string;
}
export type AuthInput = Omit< Auth , 'id'>;