import { Api } from '../../../lib/api';
import { PageContext } from '../../../renderer/types';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
  let id = pageContext.routeParams?.id;

  if (!id) throw new Error('Product id not found');

  let { product } = await Api.getProduct(id);

  const pageProps = { product };
  return {
    pageContext: {
      pageProps,
    },
  };
}

export const passToClient = ['pageProps'];
