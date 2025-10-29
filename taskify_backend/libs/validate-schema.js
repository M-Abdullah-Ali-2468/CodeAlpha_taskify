import {z} from "zod";

const registerSchema = z.object(
    {
    name : z.string().min(3,"Atleast 3 chracters required"),
    email : z.string().email("Enter a valid email"),
    password:z.string().min(6,"Enter valid password of length 6 minimum"),
}
);


export{
    registerSchema,
};