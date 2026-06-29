// 1. The API Function: Handles fetching data
async function fetchSheetData() {
  const SCRIPT_URL = context.env.HOMEPAGE_SCRIPT_URL;
  
  const response = await fetch(SCRIPT_URL, {
    method: 'GET',
    headers: { 'X-API-KEY': 'YOUR_ENV_KEY' } // Inject this during build
  });

  if (!response.ok) throw new Error('Network response was not ok');
  return await response.json(); // Returns the array of strings
}

// 2. The DOM Function: Handles placing data into HTML
function updatePageContent(paragraphs) {
  paragraphs.forEach((text, index) => {
    const element = document.getElementById(`p${index + 1}`);
    if (element) {
      element.textContent = text;
    }
  });
}

// 3. Orchestrator: Calls the functions in order
async function init() {
  try {
    const data = await fetchSheetData();
    updatePageContent(data);
  } catch (error) {
    console.error("Data load failed:", error);
  }
}

init();