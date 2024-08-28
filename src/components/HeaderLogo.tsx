import { Center, Text } from "@gluestack-ui/themed";
import Logo from "@assets/logo.svg";
export function HeaderLogo(){
    return (
        <Center my="$24">
            <Logo/>
            <Text color="$trueGray100" fontSize="$sm">Treine sua mente e seu corpo.</Text>
        </Center>
    )
}