export async function onRequest(context) {
  const { request, env } = context;
  const userEmail = request.headers.get("cf-access-authenticated-user-email");

  if (!userEmail) {
    return new Response("Unauthorized", { status: 403 });
  }

  // 1. Fetch your Google Sheet (You will need to replace this URL)
  const sheetUrl = "USER_SCRIPT_URL";
  const response = await fetch(sheetUrl);
  const csvText = await response.text();

  // 2. Simple CSV Parser
  const rows = csvText.split('\n').map(row => row.split(','));
  const userRow = rows.find(row => row[0].trim() === userEmail.trim());

  if (!userRow) {
    return new Response("User not found in registry", { status: 404 });
  }

  // 3. Return the Display Name (Column B in your sheet)
  return new Response(JSON.stringify({
    email: userEmail,
    displayName: userRow[1] // Column B
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}