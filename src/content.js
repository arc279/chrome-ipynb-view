chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg === "text2json") {
    sendResponse( {content: document.documentElement.textContent} );
  }
});

