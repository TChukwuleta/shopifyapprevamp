import { redirect } from '@remix-run/node';
import { authenticate, login } from "../shopify.server";
import { Form, useLoaderData } from "@remix-run/react";


export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/shopifyapp/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};


// app/routes/shopifyapp._index.tsx
export default function ShopifyApp() {
  
  const { showForm } = useLoaderData();

    return (
      <div>
        <h1>Welcome to the Shopify App</h1>
        <p>This is the Shopify app loaded on /shopifyapp.</p>
      </div>
    );
}
