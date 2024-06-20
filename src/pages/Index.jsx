import { Container, VStack, Heading, Text, Box, Image, HStack, IconButton, Button, useColorMode } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10} bg={colorMode === "dark" ? "gray.800" : "white"} color={colorMode === "dark" ? "white" : "black"}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg">Sharing my thoughts and experiences on web development, technology, and life.</Text>
        </Box>
        <Box>
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Box textAlign="center">
          <Button as={Link} to="/new-post" colorScheme="teal" mb={4}>Create New Post</Button>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={colorMode === "dark" ? "gray.700" : "gray.100"}>
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>Follow Me</Heading>
          <HStack spacing={4} justify="center">
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;