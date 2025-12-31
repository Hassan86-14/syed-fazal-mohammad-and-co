export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Check if path has a file extension
    const hasExtension = /\.[a-zA-Z0-9]+$/.test(pathname);
    
    try {
      // Try to fetch the requested asset
      const response = await env.ASSETS.fetch(request);
      
      // If 404 and no extension, return index.html
      if (response.status === 404 && !hasExtension) {
        return env.ASSETS.fetch(new URL('/index.html', url.origin));
      }
      
      return response;
    } catch (err) {
      // Fallback to index.html on any error for routes without extensions
      if (!hasExtension) {
        return env.ASSETS.fetch(new URL('/index.html', url.origin));
      }
      return new Response('Not found', { status: 404 });
    }
  }
};