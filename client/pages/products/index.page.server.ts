import { Api } from '../../lib/api';
import { PageContext } from '../../renderer/types';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  let { products } = await Api.getProducts();

  const pageProps = { products };
  return {
    pageContext: {
      pageProps,
    },
  };
}

export const passToClient = ['pageProps'];
