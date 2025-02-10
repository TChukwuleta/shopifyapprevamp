// // app/routes/shopifyapp._index.tsx
// export default function ShopifyApp() {
//     return (
//       <div>
//         <h1>Welcome to the Shopify App</h1>
//         <p>This is the Shopify app loaded on /shopifyapp.</p>
//       </div>
//     );
//   }

import { redirect } from '@remix-run/node';

export const loader = () => {
  return redirect('/shopifyapp/app');
};