import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { config } from './config/gluestack-ui.config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { StatusBar, View } from 'react-native';
import { SignUp } from '@screens/SignUp';

export default function App() {
  const [isFontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  return (
    <GluestackUIProvider config={config}>
      <View style={{ flex: 1, backgroundColor: '#202024'}}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        {isFontLoaded ? <SignUp/> : <Loading/>}
      </View>
    </GluestackUIProvider>
  );
}


