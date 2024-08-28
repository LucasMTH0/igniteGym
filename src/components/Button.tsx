import {ButtonSpinner, Button as GluestackButton, Spinner, Text} from '@gluestack-ui/themed'
import { ComponentProps } from 'react';

type Props = ComponentProps< typeof GluestackButton > & {
    title: string;
    variant?: "solid" | "outline"
    isLoading?: boolean;
}

export function Button({title, variant = "solid", isLoading = false, ...rest}: Props) {
    return (
        <GluestackButton 
            w="$full"
            h="$14"
            bg={variant === "solid" ? "$green700" : "transparent"}
            borderWidth={variant === "solid" ? "$0" : "$1"}
            borderColor="$green500"
            rounded="$sm"
            $active-bg={variant === "solid" ? "$green500" : "$trueGray500"}
            disabled={isLoading}
            {...rest}
        >
            { isLoading ? <ButtonSpinner/> : <Text color={variant === "solid" ? "$white" : "$green500"} fontFamily='$heading' fontSize='$sm'>{title}</Text>}
        </GluestackButton>
    )
}