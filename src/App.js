import { 
  Button,
  Card,
  Heading,
  Image,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import './App.css';
import logo from './logo.svg'
import { signOut } from 'aws-amplify/auth';


function App() {
  return (
    <View className='App'>
      <Card>
        <Image src={logo} className='App-logo' alt='Logo'/>
        <Heading level={1}> We now have Auth </Heading>
      </Card>
      <Button onClick={signOut}> Sign Out!</Button>
    </View>
  );
}

export default withAuthenticator(App);
