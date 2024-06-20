import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

import Header from "./components/Header.jsx";

function App() {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "dark" ? "gray.800" : "white"} color={colorMode === "dark" ? "white" : "black"}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
