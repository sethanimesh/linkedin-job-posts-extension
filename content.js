let filterEnabled = true; 

chrome.storage.sync.get('filterEnabled', data => {
  filterEnabled = data.filterEnabled !== false;

  if (filterEnabled) {
    initializeFiltering();
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleFilter') {
    filterEnabled = request.enabled;

    if (filterEnabled) {
      initializeFiltering();
    } else {
      showAllPosts();
    }
  }
});

function initializeFiltering() {
  filterPosts();

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function showAllPosts() {
  observer.disconnect();

  const posts = document.querySelectorAll('[data-urn]');
  posts.forEach(post => {
    post.style.display = '';
  });
}

const jobKeywords = [
  "hiring",
  "we're hiring",
  "join our team",
  "job opening",
  "vacancy",
  "career opportunity",
  "now hiring",
  "apply now",
  "position available",
  "new role",
  "job alert",
  "looking for",
  "recruiting",
  "talent acquisition"
];

const negativeKeywords = [
  "left my job",
  "resigned from",
  "last day at",
  "farewell",
  "reflecting on",
  "my journey at",
  "excited to share",
  "joined",
  "started at",
  "new role at",
  "celebrating",
  "anniversary",
  "promotion",
  "grateful for",
  "thankful for",
  "looking back",
  "past experience",
  "my time at",
  "closing a chapter",
  "accepted a position at",
  "moving on",
  "end of an era"
];

const jobKeywordPatterns = jobKeywords.map(keyword => new RegExp(`\\b${keyword}\\b`, 'i'));
const negativeKeywordPatterns = negativeKeywords.map(keyword => new RegExp(`\\b${keyword}\\b`, 'i'));

function isJobPost(textContent) {
  const text = textContent.toLowerCase();

  const containsJobKeyword = jobKeywordPatterns.some(pattern => pattern.test(text));
  const containsNegativeKeyword = negativeKeywordPatterns.some(pattern => pattern.test(text));

  return containsJobKeyword && !containsNegativeKeyword;
}

function filterPosts() {
  if (!filterEnabled) return;

  const posts = document.querySelectorAll('[data-urn]');

  posts.forEach(post => {
    if (post.dataset.processed) return;

    const textContent = post.innerText || post.textContent;

    if (!isJobPost(textContent)) {
      post.style.display = 'none';
    }

    post.dataset.processed = 'true';
  });
}

let debounceTimer;
function debounceFilterPosts() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(filterPosts, 500);
}

const observer = new MutationObserver(debounceFilterPosts);

window.addEventListener('load', () => {
  if (filterEnabled) {
    initializeFiltering();
  }
});