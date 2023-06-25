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
import IOSCalendarManager from './src/modules/IOSCalendarManager';

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

  const createCalendarEventiOS = async () => {
    try {
      const eventId = await IOSCalendarModule.createCalendarEvent(
        'Aniversário',
        'Minha casa',
      );

      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };

  const addCalendarEventiOS = async () => {
    IOSCalendarManager.addEvent('Aniversário', 'Minha casa', 123);
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();
      console.log('DEFAULT_EVENT_NAME', DEFAULT_EVENT_NAME);
    }

    if (Platform.OS === 'ios') {
      const {DEFAULT_EVENT_NAME} = IOSCalendarModule.getConstants();
      console.log('DEFAULT_EVENT_NAME', DEFAULT_EVENT_NAME);

      const {SOME_KEY} = IOSCalendarManager.getConstants();
      console.log('SOME_KEY', SOME_KEY);
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
          {Platform.OS === 'android' && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={createCalendarEventAndroid}>
                <Text>Criar Evento no Calendário</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={pickImageAndroid}>
                <Text>Pick Image</Text>
              </TouchableOpacity>
            </>
          )}

          {Platform.OS === 'ios' && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={createCalendarEventiOS}>
                <Text>Criar Evento no Calendário</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={addCalendarEventiOS}>
                <Text>Adicionar Evento no Calendário</Text>
              </TouchableOpacity>
            </>
          )}
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
