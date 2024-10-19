document.addEventListener('DOMContentLoaded', function () {
  const filterToggle = document.getElementById('filterToggle');

  chrome.storage.sync.get('filterEnabled', data => {
    filterToggle.checked = data.filterEnabled !== false; // Default to true
  });

  filterToggle.addEventListener('change', function () {
    const isEnabled = filterToggle.checked;
    chrome.storage.sync.set({ filterEnabled: isEnabled }, () => {
    });

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleFilter', enabled: isEnabled });
      }
    });
  });
});