import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
     
      toast({
        title: "Password Reset",
        description: "Your password has been successfully reset",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Reset Password
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="password" isRequired>
          <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id="confirmPassword" isRequired mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" width="full" mt={6}>
          Reset Password
        </Button>
      </form>
    </Box>
  );
};

export default ResetPassword;