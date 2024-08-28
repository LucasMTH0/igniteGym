import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import BackgroundImage from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { HeaderLogo } from "@components/HeaderLogo";
import { Background } from "@components/Background";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProp } from "@routes/auth.routes";
export function SignIn() {
    const navigator = useNavigation<AuthNavigatorRoutesProp>()
    function handleNavigateToSignUp(){
        navigator.navigate("SignUp")
    }
    return (
        <ScrollView contentContainerStyle={{ flex: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1}>
                <Background/>
                <VStack flex={1} px="$10" pb="$16">
                    <HeaderLogo/>
    
                    <Center gap="$2">
                        <Heading color="$trueGray100">Acesse sua conta</Heading>
                        <Input 
                            placeholder="E-mail" 
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Input 
                            placeholder="Senha" 
                            keyboardType="numeric"
                            secureTextEntry
                        />
                        <Button title="ACESSAR"/>
                    </Center>
    
                    <Center flex={1} justifyContent="flex-end" mt="$4">
                        <Text color="$trueGray100" fontSize="$sm" mb="$3" fontFamily="$body">Ainda não tem acesso ?</Text>
                        <Button title="Criar conta" variant="outline" onPress={handleNavigateToSignUp}/>
                    </Center>
                </VStack>
    
            </VStack>
        </ScrollView>
    )
}