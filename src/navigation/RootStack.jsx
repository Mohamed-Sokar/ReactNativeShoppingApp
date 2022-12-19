import StartStack from './StartStack';
import {NavigationContainer} from '@react-navigation/native';

export default function RootStack() {
  return (
    <NavigationContainer>
      <StartStack />
    </NavigationContainer>
  );
}
