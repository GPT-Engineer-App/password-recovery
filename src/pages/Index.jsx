import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Text, useToast } from "@chakra-ui/react";

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating password reset request
    if (email) {
      toast({
        title: "Password Reset",
        description: `Password reset link sent to ${email}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setEmail("");
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Forgot Password
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" width="full" mt={6}>
          Reset Password
        </Button>
      </form>
      <Text mt={4} textAlign="center">
        Remember your password?{" "}
        <Button variant="link" colorScheme="blue">
          Login
        </Button>
      </Text>
    </Box>
  );
};

export default Index;
