import {NativeModules} from 'react-native';
const {IOSCalendarModule} = NativeModules;

type Constants = {
  DEFAULT_EVENT_NAME: string;
};

interface IOSCalendarModuleInterface {
  createCalendarEvent: (name: string, location: string) => Promise<number>;
  getConstants: () => Constants;
}

export default IOSCalendarModule as IOSCalendarModuleInterface;
