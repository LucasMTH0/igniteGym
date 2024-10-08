import { Input as GluestackInput, InputField } from '@gluestack-ui/themed'
import { ComponentProps } from 'react'
type Props = ComponentProps<typeof InputField>
export function Input({ ...rest }: Props) {
    return (
        <GluestackInput 
            borderRadius="$md" 
            bg="$trueGray700" 
            borderWidth="$0" 
            height="$14"
            px="$4"
            $focus={{
                borderWidth: "$1",
                borderColor: "$green500"
            }} 
        >
            <InputField
                color="$white"
                fontFamily="$body"
                placeholderTextColor="$trueGray300"
                {...rest}
            ></InputField>
        </GluestackInput>
    )
}