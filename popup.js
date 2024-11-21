document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const status = document.getElementById('status');
  const accentSelect = document.getElementById('accent');
  const voiceSelect = document.getElementById('voice');

  // Load saved settings
  chrome.storage.local.get(['enabled', 'accent', 'voice'], function(result) {
    if (result.accent) accentSelect.value = result.accent;
    if (result.voice) voiceSelect.value = result.voice;
    updateStatus(result.enabled);
  });

  toggleButton.addEventListener('click', function() {
    chrome.storage.local.get(['enabled'], function(result) {
      const newState = !result.enabled;
      chrome.storage.local.set({ enabled: newState });
      updateStatus(newState);
    });
  });

  accentSelect.addEventListener('change', function() {
    chrome.storage.local.set({ accent: this.value });
  });

  voiceSelect.addEventListener('change', function() {
    chrome.storage.local.set({ voice: this.value });
  });

  function updateStatus(enabled) {
    status.textContent = enabled ? 'Accent conversion active' : 'Accent conversion inactive';
    status.className = enabled 
      ? 'bg-green-100 text-green-800 border border-green-200' 
      : 'bg-red-100 text-red-800 border border-red-200';
    toggleButton.textContent = enabled ? 'Disable' : 'Enable';
    toggleButton.className = enabled
      ? 'w-full bg-red-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors'
      : 'w-full bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors';
  }
});