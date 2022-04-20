import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store, wrapper } from '../lib/store'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp);

