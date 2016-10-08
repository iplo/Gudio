/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index.html',
    {
      id: 'mainWindow',
      innerBounds: {min-width: 800, max-width: 1280, min-height: 600, max-height: 900, width: 800, height: 600}
    }
  );
});
