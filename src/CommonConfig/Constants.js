import { Platform } from 'react-native';

export default {
  //CONSTANT TO MANAGE DEVELOPING MODE AND ENDPOINT URL's

  IS_TESTDATA: '1',
  IS_DEVELOPING_MODE: false,
  BASE_URL: {
    DEV: 'https://api.publicapis.org/',
    PROD: 'https://api.publicapis.org/'
  },
  ENVIRONMENT: {
    DEV: 'development',
    PROD: 'production',
  },

  USER_AGENT: Platform.OS == 'android' ? 'Android' : 'iOS',
  DEVICE_TYPE: Platform.OS == 'android' ? 1 : 0,
  REPORT_MAIL: 'support@test.com',
  NO_INTERNET_MESSAGE: "No internet connection!!",
  USER_ROLE: {
    USER: 0,
    CHURCH: 1,
  },
  IMAGE_PICKER_TYPE: {
    AVATAR: 0,
    COVER: 1,
  },
  LANGUAGES: {
    ENGLISH: {
      LABEL: 'English',
      CODE: 'en',
    },
    HINDI: {
      LABEL: 'Hindi',
      CODE: 'hi',
    },
  },
};
