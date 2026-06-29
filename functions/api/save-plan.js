export async function onRequestPost(context) {
  const input = await context.request.json();
  await fetch(context.env.PLANS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });
  return new Response(JSON.stringify({ status: "success" }));
}