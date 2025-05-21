
import * as Yup from 'yup';
export const LogInSchema = Yup.object().shape(

    {
       
        email:Yup.string().required("email  is required"),
        password:Yup.string().required("Password is required")
    }
);