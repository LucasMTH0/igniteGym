import { VStack, Image } from "@gluestack-ui/themed";
import BackgroundImage from "@assets/background.png";
export function SignIn() {
    return (
        <VStack flex={1}>
            <Image 
                w="$full"
                h={624}
                source={BackgroundImage} 
                defaultSource={BackgroundImage}
                position="absolute"
                alt="Pessoas treinando"
            />
        </VStack>
    )
}