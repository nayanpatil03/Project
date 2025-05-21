
import * as Yup from 'yup';
export const signUPschema = Yup.object().shape(

    {
        name:Yup.string().required("name is required"),
        email:Yup.string().required("email  is required"),
        password:Yup.string().required("Password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,"Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.")
    }
);

