export async function onRequestPost(context) {
  try {
    const input = await context.request.json();
    const scriptURL = context.env.NOTES_SCRIPT_URL;

    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    });

    // Don't assume Google returns JSON!
    return new Response(JSON.stringify({ status: "success" }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}