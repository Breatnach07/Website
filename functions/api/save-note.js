export async function onRequestPost(context) {
  try {
    // 1. Get the Google Script URL from your Cloudflare Dashboard Environment Variables
    const scriptURL = context.env.GOOGLE_SHEETS_SCRIPT_URL;

    // 2. Read the JSON sent from your frontend form
    const input = await context.request.json();

    // 3. Simple Server-Side Validation (Don't trust the client!)
    if (!input.title || !input.body) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // 4. Forward the data to Google
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    });

    const result = await response.json();

    // 5. Return success to your frontend
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}