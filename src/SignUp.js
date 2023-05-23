import { FormControl, FormLabel, Heading, VStack, Input,Button, Flex } from "@chakra-ui/react";
import {useFormik} from "formik";




function SignUp(){
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            city:'',
        },
        onSubmit:(values,actions)=>{
            alert(JSON.stringify(values,null,2));
            actions.resetForm()
        }
    });
    return(
        <VStack
        as="form"
        mx="auto"
        w={{base: "90%", md: 500}} 
        h="100vh"
        justifyContent="center"
        onSubmit={formik.handleSubmit}
        >
            <Heading>Sign Up</Heading>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input name="email" placeholder="Enter email" onChange={formik.handleChange} value={formik.values.email}/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input name="password" placeholder="Enter password" onChange={formik.handleChange} value={formik.values.password}/>
            </FormControl>
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input name="firstname" placeholder="Enter First Name" onChange={formik.handleChange} value={formik.values.firstName}/>
            </FormControl>
            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input name="lastname" placeholder="Enter Last Name" onChange={formik.handleChange} value={formik.values.lastName}/>
            </FormControl>
            <FormControl>
                <FormLabel>City</FormLabel>
                <Input name="city" placeholder="Enter City" onChange={formik.handleChange} value={formik.values.city}/>
            </FormControl>
            <Flex>
            <Button type="submit" variant="outline" colorScheme="green">Create Account</Button>
            <Button type="submit" variant="ghost" colorScheme="gray">Back</Button>
            </Flex>
        </VStack>
    )
}

export default SignUp;