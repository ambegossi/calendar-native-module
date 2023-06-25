import {NativeModules} from 'react-native';
const {IOSCalendarModule} = NativeModules;

type Constants = {
  DEFAULT_EVENT_NAME: string;
};

type ResultCallback = (error?: string, eventId?: number) => void;

interface IOSCalendarModuleInterface {
  createCalendarEvent: (
    name: string,
    location: string,
    callback?: ResultCallback,
  ) => void;
  getConstants: () => Constants;
}

export default IOSCalendarModule as IOSCalendarModuleInterface;
