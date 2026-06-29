export async function onRequestGet(context) {
  try {
    const scriptURL = context.env.NOTES_SCRIPT_URL;
    
    // Fetch data from your Google Apps Script
    const response = await fetch(`${scriptURL}?action=getRecent`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Google Sheets');
    }

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "no-cache" // Ensures you see new notes immediately
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}