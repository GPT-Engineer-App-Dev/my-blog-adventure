import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" width="100%" padding="4" justifyContent="space-between" alignItems="center" bg={colorMode === "dark" ? "gray.900" : "gray.100"}>
      <Link to="/">Home</Link>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;