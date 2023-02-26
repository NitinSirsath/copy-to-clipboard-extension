chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: function() {
        navigator.clipboard.writeText(document.documentElement.innerHTML);
      }
    });
  });
  