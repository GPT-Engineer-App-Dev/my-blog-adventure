import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Box, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10} bg={colorMode === "dark" ? "gray.800" : "white"} color={colorMode === "dark" ? "white" : "black"}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Create New Post</Heading>
        </Box>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            bg={colorMode === "dark" ? "gray.700" : "gray.100"}
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            bg={colorMode === "dark" ? "gray.700" : "gray.100"}
            />
            <Button type="submit" colorScheme="blue" width="100%">Submit</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default NewPost;