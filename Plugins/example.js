PluginManager.registerPlugin('afterProcessAnchor', (anchor, blockedUsers) => {
    alert('Processed anchor:', anchor, 'Blocked users:', blockedUsers);
  });
  
  // Example plugin to log processed tweets
  PluginManager.registerPlugin('afterProcessTweet', (username, tweetContents) => {
    alert('Processed tweet by user:', username, 'Tweet content:', tweetContents);
  });