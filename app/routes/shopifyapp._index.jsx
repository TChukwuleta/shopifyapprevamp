import { redirect } from '@remix-run/node';

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/shopifyapp/app?${url.searchParams.toString()}`);
  }
};


// app/routes/shopifyapp._index.tsx
export default function ShopifyApp() {
    return (
      <div>
        <h1>Welcome to the Shopify App</h1>
        <p>This is the Shopify app loaded on /shopifyapp.</p>
      </div>
    );
}
