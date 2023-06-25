import {NativeModules} from 'react-native';
const {IOSCalendarManager} = NativeModules;

type Constants = {
  SOME_KEY: string;
};

interface IOSCalendarManagerInterface {
  addEvent: (name: string, location: string, date: number) => void;
  getConstants: () => Constants;
}

export default IOSCalendarManager as IOSCalendarManagerInterface;
