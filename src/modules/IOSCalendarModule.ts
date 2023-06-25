import {NativeModules} from 'react-native';
const {IOSCalendarModule} = NativeModules;

interface IOSCalendarModuleInterface {
  createCalendarEvent: (name: string, location: string) => void;
}

export default IOSCalendarModule as IOSCalendarModuleInterface;
