import { FormControl, FormLabel, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { useFormik } from "formik";

function Login() {
  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    onSubmit: (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm()
    }
  });
  return(
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="100vh"
      justifyContent="center"
      onSubmit={formik.handleSubmit}
    >
        <Heading>Log In</Heading>
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input name="email" placeholder="Enter Email" onChange={formik.handleChange} value={formik.values.email}/>
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" placeholder="Enter Password"  onChange={formik.handleChange} value={formik.values.password}/>
        </FormControl>

        <Button type="submit" variant="outline" colorScheme="green"> Log in</Button>
    </VStack>
  )
}

export default Login;