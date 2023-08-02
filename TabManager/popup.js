// popup.js
$(document).ready(() => {
  chrome.tabs.query({}, (tabs) => {
    const tabList = $('#tabList');
    tabs.forEach((tab) => {
      const tabItem = $('<div>', { class: 'tab-item', 'data-tab-id': tab.id });
      const tabCheckbox = $('<input>', {
        type: 'checkbox',
        class: 'tab-checkbox',
      });
      const tabTitle = $('<span>', { class: 'tab-title', text: tab.title });
      const tabIcon = $('<img>', { class: 'tab-icon', src: tab.favIconUrl });
      tabItem.append(tabCheckbox, tabIcon, tabTitle);
      tabList.append(tabItem);

      // Handle tab click event
      tabTitle.on('click', () => {
        chrome.tabs.update(tab.id, { active: true });
      });
    });
  });

  // Handle closeSelected button click event
  $('#closeSelected').on('click', () => {
    const selectedTabs = $('.tab-checkbox:checked')
      .map(function () {
        return $(this).closest('.tab-item').data('tabId');
      })
      .get();
    chrome.tabs.remove(selectedTabs);
  });
});
