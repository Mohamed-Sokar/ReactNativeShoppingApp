import StartStack from './StartStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from '../context/context';

export default function RootStack() {
  return (
    <Provider>
      <NavigationContainer>
        <StartStack />
      </NavigationContainer>
    </Provider>
  );
}
