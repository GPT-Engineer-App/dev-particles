import { Box, Text, Image, Flex, Tag, Input, Button } from '@chakra-ui/react';
import { FaSearch, FaEnvelope } from 'react-icons/fa';

const developers = [
  { name: "Alice Johnson", location: "New York, USA", technologies: ["React", "Node"] },
  { name: "Bob Smith", location: "Berlin, Germany", technologies: [".NET", "JavaScript"] },
  { name: "Carlos Ruiz", location: "Madrid, Spain", technologies: ["Go", "React"] },
  { name: "Diana Reed", location: "Paris, France", technologies: ["Node", "JavaScript"] }
];

const Index = () => {
  return (
    <Box p={5}>
      <Image src="/images/landing-page.jpg" alt="Developers working" boxSize="full" />
      <Text fontSize="2xl" fontWeight="bold" mt={5}>Welcome to Particles</Text>
      <Text fontSize="lg" my={3}>Discover top software talent specialized in web technologies.</Text>
      <Flex mb={5}>
        <Input placeholder="Search developers" mr={2} />
        <Button leftIcon={<FaSearch />} colorScheme="blue">Search</Button>
      </Flex>
      {developers.map(dev => (
        <Flex key={dev.name} p={3} boxShadow="md" mb={2} align="center" justify="space-between">
          <Box>
            <Text fontWeight="bold">{dev.name}</Text>
            <Text>{dev.location}</Text>
            <Flex>
              {dev.technologies.map(tech => (
                <Tag key={tech} mr={1} colorScheme="green">{tech}</Tag>
              ))}
            </Flex>
          </Box>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal">Message</Button>
        </Flex>
      ))}
    </Box>
  );
};

export default Index;