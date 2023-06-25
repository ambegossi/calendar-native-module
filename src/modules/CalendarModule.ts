import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

type Constants = {
  DEFAULT_EVENT_NAME: string;
};

interface CalendarModuleInterface {
  createCalendarEvent: (name: string, location: string) => Promise<number>;
  getConstants: () => Constants;
}

export default CalendarModule as CalendarModuleInterface;
