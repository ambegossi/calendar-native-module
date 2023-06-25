import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CalendarModule from './src/modules/CalendarModule';
import ImagePickerModule from './src/modules/ImagePickerModule';
import IOSCalendarModule from './src/modules/IOSCalendarModule';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const createCalendarEventAndroid = async () => {
    try {
      const eventId = await CalendarModule.createCalendarEvent(
        'Aniversário',
        'Minha casa',
      );

      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };

  const pickImageAndroid = async () => {
    try {
      const uri = await ImagePickerModule.pickImage();

      console.log(`Image URI ${uri}`);
    } catch (e) {
      console.error(e);
    }
  };

  const createCalendarEventiOS = () => {
    IOSCalendarModule.createCalendarEvent('Aniversário', 'Minha casa');
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();
      console.log('DEFAULT_EVENT_NAME', DEFAULT_EVENT_NAME);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={createCalendarEventAndroid}>
            <Text>Criar Evento no Calendário (Android)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={createCalendarEventiOS}>
            <Text>Criar Evento no Calendário (iOS)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={pickImageAndroid}>
            <Text>Pick Image (Android)</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContentContainer: {
    flex: 1,
  },
  button: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
  },
});

export default App;
