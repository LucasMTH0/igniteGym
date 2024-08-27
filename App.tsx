import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { ActivityIndicator, StatusBar, View } from 'react-native';

export default function App() {
  const [isFontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  return (
    <GluestackUIProvider>
      <View style={{ flex: 1, backgroundColor: '#202024', alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        {
          isFontLoaded ?
          <Text color='white'>Home</Text>
          :
          <ActivityIndicator/>
        }
        
      </View>
    </GluestackUIProvider>
  );
}


