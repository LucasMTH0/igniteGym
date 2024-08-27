import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ActivityIndicator, Text, View } from 'react-native';

export default function App() {
  const [isFontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {
        isFontLoaded ?
        <Text>Open up App.tsx to start working on your app!</Text>
        :
        <ActivityIndicator/>
      }
      
    </View>
  );
}


