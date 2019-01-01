import { combineReducers } from 'redux';
import goodmindersReducer from './goodminders';
import promptsReducer from './prompts';
import promptsInStoredCollectionsReducer from './promptsInStoredCollections';
import authReducer from './auth';
import displayReducer from './display';
import userReducer from './user';
import navigationReducer from './navigation';
import responseReducer from './response';
import promptCollectionsReducer from './promptCollections';
import storedPromptCollectionsReducer from './storedPromptCollections';

export default combineReducers({
  goodminders: goodmindersReducer,
  prompts: promptsReducer,
  promptsInStoredCollections: promptsInStoredCollectionsReducer,
  auth: authReducer,
  display: displayReducer,
  user: userReducer,
  navigation: navigationReducer,
  response: responseReducer,
  promptCollections: promptCollectionsReducer,
  storedPromptCollections: storedPromptCollectionsReducer
})
