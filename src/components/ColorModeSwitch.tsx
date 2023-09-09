import { HStack, Text } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
        <HStack>
            <Switch 
                onChange={toggleColorMode} 
                isChecked={colorMode === "dark"}   
                colorScheme='green'
            />
            <Text>Dark Mode</Text>
        </HStack>
    </>
  )
}

export default ColorModeSwitch; 
