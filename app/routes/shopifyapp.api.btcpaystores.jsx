import { json } from '@remix-run/node';

export async function loader({ request }) {
    
    return json({
        ok: true,
        message: `Record found for shop:`
    });
}
