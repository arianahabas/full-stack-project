import Reducer1 from './reducer1'
import AuthReducer from './authReducer';
import UserReducer from './userReducer';
import PostsReducer from './postsReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  reducer1: Reducer1,
  auth_reducer: AuthReducer,
  user_reducer: UserReducer,
  posts_reducer: PostsReducer
})

export default rootReducer;