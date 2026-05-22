"use client"
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Resgisterpage = () => {

  const handlegoogle= async ()=>{
   
  const data = await authClient.signIn.social({
    provider: "google",

   
  });
console.log("data",data)

  }

    const onSubmit =async (e) => {
    e.preventDefault();
    
    const email=e.target.email.value;
    const password=e.target.password.value;

    const {data,error}=await authClient.signIn.email({
       
        email,
        password,
        callbackURL:'/'

    },
)
console.log({data,error});
    if(error){
      // alert(error.message)
      toast.error(error.message)
    }
    if(data){
     toast.success("login successful")
    }
    
  };
    return (
        <div  className='pt-25 pb-10 flex justify-center'> 
                   <Form className="card shadow-lg w-96 flex-col gap-4" onSubmit={onSubmit}>
                   <div>
                    <h1 className="text-2xl text-center font-semibold">WELCOME BACK!</h1>
                    <h3 className="text-sm text-gray-700 text-center font-semibold">login to your account</h3>
                   </div>
                 <TextField
                   isRequired
                   name="email"
                   type="email"
                   validate={(value) => {
                     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                       return "Please enter a valid email address";
                     }
                     return null;
                   }}
                 >
                   <Label>Email</Label>
                   <Input placeholder="enter your email" />
                   <FieldError />
                 </TextField>
                 <TextField
                   isRequired
                   minLength={8}
                   name="password"
                   type="password"
                   validate={(value) => {
                     if (value.length < 8) {
                       return "Password must be at least 8 characters";
                     }
                     if (!/[A-Z]/.test(value)) {
                       return "Password must contain at least one uppercase letter";
                     }
                     if (!/[0-9]/.test(value)) {
                       return "Password must contain at least one number";
                     }
                     return null;
                   }}
                 >
                   <Label>Password</Label>
                   <Input placeholder="Enter your password" />
                   <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                   <FieldError />
                 </TextField>
                 <div className="w-full">
                   <Button type="submit" className={'w-full bg-green-900'}>
                     {/* <Check /> */}
                     Login
                   </Button>
                   {/* <Button type="reset" variant="secondary">
                     Reset
                   </Button> */}
                 </div>
                 <span className="text-center text-gray-800 font-semibold text-sm">OR continue with</span>
                 <button onClick={handlegoogle} className="btn btn-ghost text-xl"><FcGoogle />Continue with google</button>
                 <p>Don&apos;t have account?<Link href={'/registers'}><span className="text-[14px] text-blue-700">registration here</span></Link></p>
                 </Form>
                 
        </div>
    );
};

export default Resgisterpage;