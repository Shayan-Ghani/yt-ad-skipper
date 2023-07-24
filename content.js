// content.js
(function() {
    // Function to skip YouTube ads
    function skipAds() {
      const skipButton = document.querySelector(".ytp-ad-skip-button");
      if (skipButton) {
        skipButton.click();
      }
    }
  
    // Run the skipAds function whenever a new video is played on YouTube
    const observer = new MutationObserver(skipAds);
    observer.observe(document, { childList: true, subtree: true });
  })();
  