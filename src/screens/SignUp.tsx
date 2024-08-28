import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { HeaderLogo } from "@components/HeaderLogo";
import { Background } from "@components/Background";
export function SignUp() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1}>
                <Background/>
                <VStack flex={1} px="$10" pb="$16">
                    <HeaderLogo/>
                    <Center gap="$2" flex={1}>
                        <Heading color="$trueGray100">Acesse sua conta</Heading>
                        <Input 
                            placeholder="Nome" 
                        />
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
                        <Button title="CRIAR E ACESSAR"/>
                    </Center>
    
                    <Button title="Voltar" mt="$12" variant="outline"/>
                </VStack>
    
            </VStack>
        </ScrollView>
    )
}