import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
  const router = useRouter();

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightBlue },
            headerShadowVisible: false,
            headerLeft: () => <ScreenHeaderBtn iconUrl={icons.home} dimension="60%" />,
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: '',
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome />
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Home;
