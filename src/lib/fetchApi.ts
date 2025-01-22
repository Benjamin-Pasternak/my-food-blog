export async function fetchApi(
    endpoint: string,
    options: RequestInit = {}
  ) {
    const url = `${process.env.STRAPI_URL}${endpoint}`;
    console.log(`Fetching from: ${url}`);
  
    const res = await fetch(url, options);
  
    // Handle response errors
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error?.message || `Error ${res.status}`);
    }
  
    return res.json();
  }
  