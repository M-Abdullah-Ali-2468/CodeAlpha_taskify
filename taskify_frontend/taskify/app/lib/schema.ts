import path from "path"
import {z} from "zod"

export const signInSchema = z.object(
    {
        email: z.email("Invalid Email Address"),
        password:z.string().min(6,"Enter valid password of length 6 minimum"),
    }
)


export const signUpSchema = z.object(
    {
        name : z.string().min(3,"Atleast 3 chracters required"),
        email : z.string().email("Enter a valid email"),
        password:z.string().min(6,"Enter valid password of length 6 minimum"),
        confirm_password:z.string().min(6,"Enter valid password of length 6 minimum"),

    }
).refine((data) => {
    data.password === data.confirm_password ,
     {
        path:["confirm_password"],
        message:"password do not match",
     }
} );