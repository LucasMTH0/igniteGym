import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
export function SignIn() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1}>
                <Image 
                    defaultSource={BackgroundImage}
                    source={BackgroundImage} 
                    alt="Pessoas treinando"
                    position="absolute"
                    w="$full"
                    h={624}
                />
                <VStack flex={1} px="$10" pb="$16">
                    <Center my="$24">
                        <Logo/>
                        <Text color="$trueGray100" fontSize="$sm">Treine sua mente e seu corpo.</Text>
                    </Center>
    
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
                        <Button title="Criar conta" variant="outline"/>
                    </Center>
                </VStack>
    
            </VStack>
        

        </ScrollView>
    )
}