  "use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { redirect } from "next/dist/server/api-utils";
import { toast } from "react-toastify";

const Loginpage = () => {
    const onSubmit =async (e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const image = e.target.image.value;
    const password=e.target.password.value;

    const {data,error}=await authClient.signUp.email({
        name,
        email,
        image,
        password,
        callbackURL:'/'
    
    },
)

    console.log({data,error});
    if(error){
      toast.error(error.message)
     
    }
    if(data){
       toast.success("registration successful")
    //  toast("signup succesful")
    
    }
    
  };
    return (
        <div className='container mx-auto pt-25 pb-10 flex justify-center items-center'>
        <Form className="card shadow-lg w-96 flex-col gap-4 items-center" onSubmit={onSubmit}>
       <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">Create an Acount</h1>
        <h3 className="text-sm font-semibold text-gray-700">Register to get started</h3>
       </div>
     <TextField
        isRequired
        name="name"
        type="text"
        className={'w-full'}
        
        
      >
        <Label>name</Label>
        <Input placeholder="enter your name" />
        <FieldError />
      </TextField>
     {/* email */}
      <TextField
        isRequired
        name="email"
        type="email"
        className={'w-full'}
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
        {/* email end */}
        {/* password start */}
         <TextField
      
        name="image"
        type="url"
        className={'w-full'}
        
        
      >
        <Label>image</Label>
        <Input placeholder="enter your image" />
        <FieldError />
      </TextField>
        {/* pass end */}
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        className={'w-full'}
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
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="danger">
          Reset
        </Button>
      </div>
      </Form>
        </div>
    );
};

export default Loginpage;