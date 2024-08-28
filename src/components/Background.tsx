import BackgroundImage from "@assets/background.png";
import { Image } from "@gluestack-ui/themed";

export function Background() {
    return (
        <Image 
            defaultSource={BackgroundImage}
            source={BackgroundImage} 
            alt="Pessoas treinando"
            position="absolute"
            w="$full"
            h={624}
        />
    )
}