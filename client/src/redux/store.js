import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './user/userSlice'
// import { persistedReducer, persistStore } from 'redux-persist';


export const store = configureStore({
  reducer: {user:userReducer},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck : false,
  })
})

// export const persistor = persistStore(store);