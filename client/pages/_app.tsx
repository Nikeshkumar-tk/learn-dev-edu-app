import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import { store } from '../stateManagement/store'
import { Provider } from 'react-redux'
import { useAppSelector,RootState } from '../stateManagement/configs/typeExports'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        
          
        
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
