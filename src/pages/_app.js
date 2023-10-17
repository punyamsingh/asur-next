import '@/styles/globals.css'
import { UserProvider } from '../contexts/UserContext';

export default function App({ Component,pageProps }) {
  return (
    <UserProvider> {/* Wrap the entire app in the UserProvider */}
      <Component {...pageProps} />
    </UserProvider>
  );
}
