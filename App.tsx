import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const firebaseConfig = {
    apiKey: "AIzaSyDGPrQta6GbClxvsEhPxNco65dGdnsNBOA",
    authDomain: "undistracto.firebaseapp.com",
    projectId: "undistracto",
    storageBucket: "undistracto.appspot.com",
    messagingSenderId: "123446635828",
    appId: "1:123446635828:web:f0596f028aa260e51f0961",
    measurementId: "G-51RQWTVRKS",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
