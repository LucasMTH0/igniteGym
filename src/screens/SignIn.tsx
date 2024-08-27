import { VStack, Image, Center, Text } from "@gluestack-ui/themed";
import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";
export function SignIn() {
    return (
        <VStack flex={1}>
            <Image 
                defaultSource={BackgroundImage}
                source={BackgroundImage} 
                alt="Pessoas treinando"
                position="absolute"
                w="$full"
                h={624}
            />
            <Center my="$24">
                <Logo/>
                <Text color="$trueGray100" fontSize="$sm">Treine sua mente e seu corpo.</Text>
            </Center>
        </VStack>
    )
}