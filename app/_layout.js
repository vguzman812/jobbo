import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    DMSansBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMSansMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMSansRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
