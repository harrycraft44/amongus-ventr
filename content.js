

// Inject the dialog HTML into the DOM
const defaultSettings = {
  "--background": "53 24% 93%",
  "--foreground": "20 14.3% 4.1%",
  "--muted": "60 4.8% 95.9%",
  "--muted-foreground": "25 5.3% 44.7%",
  "--popover": "48 26% 89%",
  "--popover-foreground": "20 14.3% 4.1%",
  "--card": "0 0% 100%",
  "--card-foreground": "20 14.3% 4.1%",
  "--border": "48 26% 89%",
  "--input": "20 5.9% 90%",
  "--primary": "22 100% 15%",
  "--primary-foreground": "60 9.1% 97.8%",
  "--secondary": "60 4.8% 95.9%",
  "--secondary-foreground": "24 9.8% 10%",
  "--accent": "60 4.8% 95.9%",
  "--accent-foreground": "24 9.8% 10%",
  "--destructive": "0 72.2% 50.6%",
  "--destructive-foreground": "60 9.1% 97.8%",
  "--ring": "20 14.3% 4.1%",
  "--lynt-focus": "44 24% 91%"
};
// get domain name
 const domain = window.location.hostname;



const discordSettings = {
  "background": "15 10% 10%",  // Dark background
  "foreground": "0 0% 100%",   // White text
  "muted": "0 0% 20%",         // Darker gray for muted text
  "muted-foreground": "0 0% 80%", // Light gray for muted text foreground
  "popover": "22 16% 28%",     // Dark popover
  "popover-foreground": "0 0% 100%", // White text on popovers
  "card": "20 10% 20%",        // Darker card background
  "card-foreground": "0 0% 100%", // White text on cards
  "border": "30 10% 20%",      // Slightly lighter border
  "input": "0 0% 30%",         // Dark input background
  "primary": "220 80% 50%",    // Primary blue color
  "primary-foreground": "0 0% 100%", // White text on primary elements
  "secondary": "220 15% 30%",  // Secondary dark blue
  "secondary-foreground": "0 0% 100%", // White text on secondary elements
  "accent": "250 70% 60%",     // Accent purple
  "accent-foreground": "0 0% 100%", // White text on accent elements
  "destructive": "0 80% 60%",  // Red for destructive actions
  "destructive-foreground": "0 0% 100%", // White text on destructive elements
  "ring": "0 0% 100%",         // White ring color
  "lynt-focus": "222 8% 20%"  // Focus color, a lighter blue
};



var dialogHTML = `
  <div id="extension-dialog" class="extension-dialog">
  <div class="extension-dialog-content">
    <span id="extension-dialog-close" class="extension-dialog-close">&times;</span>
    <h2>Settings</h2>

    <!-- Tab navigation -->
    <div class="tabs">
      <button class="tab-button active" id="TabTemplates">Templates</button>
      <button class="tab-button" id="TabAdvanced">Advanced</button>
    </div>

    <!-- Tab content -->
    <div id="templates" class="tab-content active">

      <div class="customstylepreset-container">
        <button id="defaultSETTINGSclick" class="customstylepreset-button">
          <img id="defaultSETTINGS" alt="Icon" class="customstylepreset-icon">
          <div class="customstylepreset-text">
            <h2>Default Look</h2>
            <p>The look you came to enjoy on Lyntr.</p>
          </div>
        </button>
      </div>

     <div class="customstylepreset-container">
        <button id="discordclick" class="customstylepreset-button">
          <img id="discordImage" alt="Icon" class="customstylepreset-icon">
          <div class="customstylepreset-text">
            <h2>discord inspired Look</h2>
            <p>discordo.</p>
          </div>
        </button>
      </div>


    </div>

    <div id="advanced" class="tab-content">
      <h2>Edit CSS Variables</h2>
      <div id="extension-dialog-body">


<!-- -->



  <div class="input-group">

<label for="background">Background:</label>
<input type="color" id="background" value="#ffffff">
<input type="text" id="backgroundHex" placeholder="#ffffff">
</div>
  <div class="input-group">
    <label for="foreground">Foreground:</label>
    <input type="color" id="foreground" value="#000000">
    <input type="text" id="foregroundHex" placeholder="#000000">
  </div>
  <div class="input-group">
    <label for="muted">Muted:</label>
    <input type="color" id="muted" value="#f0f0f0">
    <input type="text" id="mutedHex" placeholder="#f0f0f0">
  </div>
  <div class="input-group">
    <label for="mutedForeground">Muted Foreground:</label>
    <input type="color" id="muted-foreground" value="#666666">
    <input type="text" id="mutedForegroundHex" placeholder="#666666">
  </div>
  <div class="input-group">
    <label for="popover">Popover:</label>
    <input type="color" id="popover" value="#ffffff">
    <input type="text" id="popoverHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="popoverForeground">Popover Foreground:</label>
    <input type="color" id="popover-foreground" value="#333333">
    <input type="text" id="popoverForegroundHex" placeholder="#333333">
  </div>
  <div class="input-group">
    <label for="card">Card:</label>
    <input type="color" id="card" value="#ffffff">
    <input type="text" id="cardHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="cardForeground">Card Foreground:</label>
    <input type="color" id="card-foreground" value="#333333">
    <input type="text" id="cardForegroundHex" placeholder="#333333">
  </div>
  <div class="input-group">
    <label for="border">Border:</label>
    <input type="color" id="border" value="#cccccc">
    <input type="text" id="borderHex" placeholder="#cccccc">
  </div>
  <div class="input-group">
    <label for="input">Input:</label>
    <input type="color" id="input" value="#ffffff">
    <input type="text" id="inputHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="primary">Primary:</label>
    <input type="color" id="primary" value="#007bff">
    <input type="text" id="primaryHex" placeholder="#007bff">
  </div>
  <div class="input-group">
    <label for="primaryForeground">Primary Foreground:</label>
    <input type="color" id="primary-foreground" value="#ffffff">
    <input type="text" id="primaryForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="secondary">Secondary:</label>
    <input type="color" id="secondary" value="#6c757d">
    <input type="text" id="secondaryHex" placeholder="#6c757d">
  </div>
  <div class="input-group">
    <label for="secondaryForeground">Secondary Foreground:</label>
    <input type="color" id="secondary-foreground" value="#ffffff">
    <input type="text" id="secondaryForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="accent">Accent:</label>
    <input type="color" id="accent" value="#17a2b8">
    <input type="text" id="accentHex" placeholder="#17a2b8">
  </div>
  <div class="input-group">
    <label for="accentForeground">Accent Foreground:</label>
    <input type="color" id="accent-foreground" value="#ffffff">
    <input type="text" id="accentForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="destructive">Destructive:</label>
    <input type="color" id="destructive" value="#dc3545">
    <input type="text" id="destructiveHex" placeholder="#dc3545">
  </div>
  <div class="input-group">
    <label for="destructiveForeground">Destructive Foreground:</label>
    <input type="color" id="destructive-foreground" value="#ffffff">
    <input type="text" id="destructiveForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="ring">Ring:</label>
    <input type="color" id="ring" value="#007bff">
    <input type="text" id="ringHex" placeholder="#007bff">
  </div>

  <div class="input-group">
    <label for="lyntFocus">Lynt Focus:</label>
    <input type="color" id="lynt-focus" value="#007bff">
    <input type="text" id="lyntFocusHex" placeholder="#007bff">
  </div>
  <div class="input-group">
    <label for="darkBackground">Dark Background:</label>
    <input type="color" id="dark-background" value="#000000">
    <input type="text" id="darkBackgroundHex" placeholder="#000000">
  </div>
  <div class="input-group">
    <label for="darkForeground">Dark Foreground:</label>
    <input type="color" id="dark-foreground" value="#ffffff">
    <input type="text" id="darkForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="darkMuted">Dark Muted:</label>
    <input type="color" id="dark-muted" value="#333333">
    <input type="text" id="darkMutedHex" placeholder="#333333">
  </div>
  <div class="input-group">
    <label for="darkMutedForeground">Dark Muted Foreground:</label>
    <input type="color" id="dark-muted-foreground" value="#cccccc">
    <input type="text" id="darkMutedForegroundHex" placeholder="#cccccc">
  </div>
  <div class="input-group">
    <label for="darkPopover">Dark Popover:</label>
    <input type="color" id="dark-popover" value="#000000">
    <input type="text" id="darkPopoverHex" placeholder="#000000">
  </div>
  <div class="input-group">
    <label for="darkPopoverForeground">Dark Popover Foreground:</label>
    <input type="color" id="dark-popover-foreground" value="#ffffff">
    <input type="text" id="darkPopoverForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="darkCard">Dark Card:</label>
    <input type="color" id="dark-card" value="#000000">
    <input type="text" id="darkCardHex" placeholder="#000000">
  </div>
  <div class="input-group">
    <label for="darkCardForeground">Dark Card Foreground:</label>
    <input type="color" id="dark-card-foreground" value="#ffffff">
    <input type="text" id="darkCardForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="darkBorder">Dark Border:</label>
    <input type="color" id="dark-border" value="#333333">
    <input type="text" id="dark-Border-Hex" placeholder="#333333">
  </div>
  <div class="input-group">
    <label for="darkInput">Dark Input:</label>
    <input type="color" id="dark-input" value="#333333">
    <input type="text" id="darkInputHex" placeholder="#333333">
  </div>
  <div class="input-group">
    <label for="darkPrimary">Dark Primary:</label>
    <input type="color" id="dark-primary" value="#ffffff">
    <input type="text" id="darkPrimaryHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="dark-Primary-Foreground">Dark Primary Foreground:</label>
    <input type="color" id="dark-primary-foreground" value="#000000">
    <input type="text" id="darkPrimaryForegroundHex" placeholder="#000000">
  </div>
  <div class="input-group">
    <label for="darkSecondary">Dark Secondary:</label>
    <input type="color" id="dark-secondary" value="#333333">
    <input type="text" id="darkSecondaryHex" placeholder="#333333">
  </div>
  <div class="input-group">
    <label for="darkSecondaryForeground">Dark Secondary Foreground:</label>
    <input type="color" id="dark-secondary-foreground" value="#ffffff">
    <input type="text" id="darkSecondaryForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="darkAccent">Dark Accent:</label>
    <input type="color" id="dark-accent" value="#333333">
    <input type="text" id="darkAccentHex" placeholder="#333333">
  </div>
  <div class="input-group">
    <label for="darkAccentForeground">Dark Accent Foreground:</label>
    <input type="color" id="dark-accent-foreground" value="#ffffff">
    <input type="text" id="darkAccentForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="darkDestructive">Dark Destructive:</label>
    <input type="color" id="dark-destructive" value="#ff0000">
    <input type="text" id="darkDestructiveHex" placeholder="#ff0000">
  </div>
  <div class="input-group">
    <label for="darkDestructiveForeground">Dark Destructive Foreground:</label>
    <input type="color" id="dark-destructive-foreground" value="#ffffff">
    <input type="text" id="darkDestructiveForegroundHex" placeholder="#ffffff">
  </div>
  <div class="input-group">
    <label for="darkRing">Dark Ring:</label>
    <input type="color" id="dark-ring" value="#666666">
    <input type="text" id="darkRingHex" placeholder="#666666">
  </div>
  <div class="input-group">
    <label for="darkLyntFocus">Dark Lynt Focus:</label>
    <input type="color" id="dark-lynt-focus" value="#333333">
    <input type="text" id="darkLyntFocusHex" placeholder="#333333">
  </div>
     
  

        </div>
      <button id="extension-dialog-save" class="button">Save</button>
    </div>
  </div>
</div>
`;




document.body.insertAdjacentHTML('beforeend', dialogHTML);

// Add CSS to style the dialog
const style = document.createElement('style');
style.innerHTML = `
/* Main dialog container */
.extension-dialog {
  display: none;
  position: fixed;
  z-index: 9999;
  color: #333;
  max-height: 80vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* Button styling */
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  margin-top: 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.button:hover,
.button:focus {
  background-color: #0056b3;
  outline: none;
}

/* Content area inside the dialog */
.extension-dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  color: #333;
  border: 1px solid #ddd;
  max-height: 60vh;
  overflow-y: auto;
}

/* Close button */
.extension-dialog-close {
  color: #666;
  float: right;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
}

.extension-dialog-close:hover,
.extension-dialog-close:focus {
  color: #000;
  text-decoration: none;
}

/* Tabs */
.tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}

.tab-button {
  flex: 1;
  padding: 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  border-radius: 4px 4px 0 0;
  transition: background-color 0.3s ease;
}

.tab-button.active {
  background-color: #ffffff;
  border-bottom: 1px solid white;
  font-weight: bold;
}

.tab-button:hover {
  background-color: #e0e0e0;
}

/* Tab content */
.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

/* Custom style preset button */
.customstylepreset-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.customstylepreset-button {
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.customstylepreset-button:hover {
  background-color: #f0f0f0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.customstylepreset-icon {
  width: fit-content;
  height: 120px;
  margin-right: 10px;
}

.customstylepreset-text {
  text-align: left;
}

.customstylepreset-text h2 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.customstylepreset-text p {
  margin: 5px 0 0;
  font-size: 12px;
  color: #666;
}


`;

document.head.appendChild(style);
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  if (tabId === 'templates') {
    document.getElementById('TabTemplates').classList.add('active');
    document.getElementById('TabAdvanced').classList.remove('active');
  } else {
    document.getElementById('TabAdvanced').classList.add('active');
    document.getElementById('TabTemplates').classList.remove('active');
  }
}

// Initialize by showing the first tab
document.addEventListener('DOMContentLoaded', () => {
  showTab('templates');
});
// Add event listeners to the tab buttons
document.getElementById('TabTemplates').addEventListener('click', () => showTab('templates'));
document.getElementById('TabAdvanced').addEventListener('click', () => showTab('advanced'));


const imageUrl = chrome.runtime.getURL('images/default.png');
const defaultSettingsElement = document.getElementById('defaultSETTINGS');
const imageUrldiscord = chrome.runtime.getURL('images/discord.png');
const discordsettingsElement = document.getElementById('discordImage');

if (defaultSettingsElement) {
    defaultSettingsElement.src = imageUrl;
}

if (discordsettingsElement) {
    discordsettingsElement.src = imageUrldiscord;
} 

function loadSettings(cssVariables) {
  if (!cssVariables || typeof cssVariables !== 'object') {
    console.error('Invalid input: cssVariables should be a JSON object.');
    return;
  }

  const root = document.documentElement;

  // Apply CSS variables to the document
  Object.keys(cssVariables).forEach(key => {
    root.style.setProperty(`--${key}`, cssVariables[key], 'important');
  });


  // Optionally save to local storage
  chrome.storage.local.set({ cssVariables: cssVariables }, function() {
    // Optionally reload or update UI
    // location.reload(); // Uncomment if you need to reload the page
  });
}


document.getElementById('defaultSETTINGSclick').addEventListener('click', () => {
  loadSettings(defaultSettings);
});

document.getElementById('discordclick').addEventListener('click', () => {
  loadSettings(discordSettings);
});

function openDialog() {
  document.getElementById('extension-dialog').style.display = 'Block';
}

function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Close the dialog
function closeDialog() {
  document.getElementById('extension-dialog').style.display = 'none';
}
// Save changes from the dialog
function saveDialog() {
  const cssVariables = {};
  const inputs = document.querySelectorAll('.input-group input[type="color"]');
  inputs.forEach(input => {
    const key = input.id.replace('Hex', '');
    const value = input.value;
    const hslValue = hexToHSL(value);
    cssVariables[key] = hslValue;
  });

  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ cssVariables: cssVariables }, function() {
      if (chrome.runtime.lastError) {
        console.error('Error saving CSS variables:', chrome.runtime.lastError);
      } else {
        console.log('CSS variables saved successfully:', cssVariables);
        closeDialog();
        location.reload();
      }
    });
  } else {
    console.error('chrome.storage.local is not available.');
  }
}

// Function to convert hex color to HSL
function hexToHSL(hex) {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Convert RGB to HSL
  const hsl = rgbToHSL(r, g, b);

  return hsl;
}

// Function to convert RGB color to HSL
function rgbToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l;

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = ((g - b) / (max - min)) % 6;
  } else if (max === g) {
    h = (b - r) / (max - min) + 2;
  } else {
    h = (r - g) / (max - min) + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  l = (max + min) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = (max - min) / (max + min);
  } else {
    s = (max - min) / (2 - max - min);
  }

  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s} ${l}`;
}

// Add event listeners
document.getElementById('extension-dialog-close').addEventListener('click', closeDialog);
document.getElementById('extension-dialog-save').addEventListener('click', saveDialog);
// Function to handle adding a new button to div id="snnq7p4bPO"
function addButton() {
  const newButton = document.createElement('button');
  newButton.textContent = 'Settings';
  // make settings cog in the top right
  newButton.style.position = 'absolute';
  newButton.style.top = '10px';
  newButton.style.right = '10px';
  newButton.style.zIndex = '1000';
  // make it visible
  newButton.style.backgroundColor = 'white';
  newButton.style.color = 'black';
  newButton.style.border = '1px solid black';
  // make it look like a button
  newButton.style.padding = '10px';
  newButton.style.borderRadius = '5px';
  // add it to the page
  document.body.appendChild(newButton);
  
  newButton.addEventListener('click', openDialog);
}


// Add the button to the page
addButton();



// Retrieve CSS variables from storage and apply them to the document
if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
  chrome.storage.local.get('cssVariables', function(data) {
    if (chrome.runtime.lastError) {
      console.error('Error retrieving CSS variables:', chrome.runtime.lastError);
      return;
    }

    const cssVariables = data.cssVariables || {};

    if (Object.keys(cssVariables).length === 0) {
      console.log('No CSS variables found.');
    } else {
      // Apply CSS variables to the document
      const inputs = document.querySelectorAll('.input-group input[type="color"]');
      inputs.forEach(input => {
        const key = input.id;
        const value = cssVariables[key];
        if (value) {
          const hslValues = value.split(' ');
          const hexValue = hslToHex(hslValues[0], hslValues[1], hslValues[2]);
          input.value = hexValue;
        }
      });

      const root = document.documentElement;
      Object.keys(cssVariables).forEach(key => {
        root.style.setProperty(`--${key}`, cssVariables[key], 'important');
      });
    }
  });
} else {
  console.error('chrome.storage.local is not available.');
}


function addblockbutton(){
  const newButton = document.createElement('button');
  newButton.textContent = 'Block' + window.location.pathname.split('@')[1];
  // make settings cog in the top right
  newButton.style.position = 'absolute';
  newButton.style.top = '70px';
  newButton.style.right = '10px';
  newButton.style.zIndex = '1000';
  // make it visible
  newButton.style.backgroundColor = 'white';
  newButton.style.color = 'black';
  newButton.style.border = '1px solid black';
  // make it look like a button
  newButton.style.padding = '10px';
  newButton.style.borderRadius = '5px';
  // add it to the page
  document.body.appendChild(newButton);
  
  newButton.addEventListener('click', blockUser);
}

function blockUser() {
  // get the user id from the url
  const userId = window.location.pathname.split('@')[1];
  // get the current blocked users
  console.log(userId);
  chrome.storage.local.get('blockedUsers', function(data) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
  
    const blockedUsers = data.blockedUsers || [];
    // add the new user to the list
    blockedUsers.push(userId);
    // save the new list of blocked users
    chrome.storage.local.set({ blockedUsers: blockedUsers }, function() {
      // reload the page to apply the changes
      location.reload();
    });
  });
}


  if (/\/@/.test(window.location.pathname)) {
    // check if the user is blocked
    chrome.storage.local.get('blockedUsers', function(data) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
    
      const blockedUsers = data.blockedUsers || [];
      // get the user id from the url
      const userId = window.location.pathname.split('@')[1];
      // if the user is blocked then don't add the button
      if (!blockedUsers.includes(userId)) {
        addblockbutton();
      } else {
        //hides page
        document.body.innerHTML = '';
       // tell the user they blocked them
        const blockedMessage = document.createElement('p');
        blockedMessage.textContent = 'You have blocked this user';
        blockedMessage.style.position = 'absolute';
        blockedMessage.style.top = '50%';
        blockedMessage.style.left = '50%';
        blockedMessage.style.transform = 'translate(-50%, -50%)';
        blockedMessage.style.color = 'red';
        blockedMessage.style.fontSize = '24px';
        blockedMessage.style.fontWeight = 'bold';
        document.body.appendChild(blockedMessage);
        // add home button and unblock button undertext
        const homeButton = document.createElement('button');
        homeButton.textContent = 'Home';
        homeButton.style.position = 'absolute';
        homeButton.style.top = '60%';
        homeButton.style.left = '50%';
        homeButton.style.transform = 'translate(-50%, -50%)';
        homeButton.style.backgroundColor = 'white';
        homeButton.style.color = 'black';
        homeButton.style.border = '1px solid black';
        homeButton.style.padding = '10px';
        homeButton.style.borderRadius = '5px';
        document.body.appendChild(homeButton);
        homeButton.addEventListener('click', () => {
          window.location.href = '/';
        });
        const unblockButton = document.createElement('button');
        unblockButton.textContent = 'Unblock';
        unblockButton.style.position = 'absolute';
        unblockButton.style.top = '70%';
        unblockButton.style.left = '50%';
        unblockButton.style.transform = 'translate(-50%, -50%)';
        unblockButton.style.backgroundColor = 'white';
        unblockButton.style.color = 'black';
        unblockButton.style.border = '1px solid black';
        unblockButton.style.padding = '10px';
        unblockButton.style.borderRadius = '5px';
        document.body.appendChild(unblockButton);
        unblockButton.addEventListener('click', () => {
          // remove the user from the blocked list
          const newBlockedUsers = blockedUsers.filter(user => user !== userId);
          chrome.storage.local.set({ blockedUsers: newBlockedUsers }, function() {
            // reload the page to apply the changes
            location.reload();
          });
        });
        
      }
    });
  }

// Callback function to execute when mutations are observed
const mutationCallback = (mutationList, observer) => {
  chrome.storage.local.get('blockedUsers', function(data) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }

    const blockedUsers = data.blockedUsers || [];

    mutationList.forEach((mutation) => {
      if (mutation.type === 'childList') {
        // Check added nodes
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'A') {
            const anchor = node;
            processAnchor(anchor, blockedUsers);
          }
        });

        // Check for changes in existing nodes
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'A') {
            const anchor = node;
            processAnchor(anchor, blockedUsers);
          }
        });
      }
    });
  });
};
function processtweet(anchor) {
  const tweetContent = anchor.parentElement;
  const mainanchor = tweetContent.parentElement;
  // get all spans that match and for each span check if it contains the username
  const allspans = tweetContent.querySelectorAll('span');
  allspans.forEach((span) => {
    
  if (!span) {
    return;
  }

  const tweetText = span.textContent;
  console.log(tweetText);

  const tweetUser = tweetText.match(/@(\w+)/);
  const usernamet = tweetUser ? tweetUser[1] : null;
  console.log(usernamet);

  if (usernamet && tweetText.includes("@")) {
    const link = `<a href="https://${domain}/@${usernamet}">@${usernamet}</a>`;
    span.innerHTML = tweetText.replace(tweetUser[0], link);

    //possable to set up a listener for the new link hover
    if (usernamet) {
      const link = `<a href="https://${domain}/@${usernamet}">@${usernamet}</a>`;
      span.innerHTML = tweetText.replace(tweetUser[0], link);
    
      const anchor = span.querySelector('a');
      if (anchor) {

        anchor.addEventListener('mouseover', (event) => {

        fetch(`https://${domain}/api/profile?handle=${usernamet}`)
      .then(response => response.json())
      .then(data => {
        const popup = document.createElement('div');
        popup.innerHTML = `
          <div style="display: flex; align-items: center;">
            <img src="https://${domain.replace("lyntr","cdn")}/lyntr/${data.id}_small.webp?v=" alt="Profile Picture" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
            <div>
              <p style="font-weight: bold; margin: 0;">Profile for ${data.username}</p>
              <p style="margin: 5px 0;">Bio: ${data.bio}</p>
              <p style="margin: 5px 0;">Followers: ${data.followers}</p>
              <p style="margin: 5px 0;">Following: ${data.following}</p>
            </div>
          </div>
        `;
        
        popup.style.backgroundColor = 'hsl(var(--popover))';
        popup.style.color = 'hsl(var(--popover-foreground))';
        popup.style.border = '1px solid var(--border)';
        popup.style.borderRadius = '8px';
        popup.style.padding = '10px';
        popup.style.position = 'fixed';
        popup.style.zIndex = '9999';
        popup.style.maxWidth = '300px';
        popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';


        
        document.body.appendChild(popup);

        const { clientX: mouseX, clientY: mouseY } = event;
        popup.style.left = `${mouseX + 10}px`;
        popup.style.top = `${mouseY + 10}px`;
        var movedpixel = 0;
        anchor.addEventListener('mouseout', () => {
          console.log(`Stopped hovering over ${usernamet}`);
          if (document.body.contains(popup)) {
            document.body.removeChild(popup);
            
          }
        }, { once: true });
        anchor.addEventListener('mouseleave', () => {
          console.log(`Stopped hovering over ${usernamet}`);
          if (document.body.contains(popup)) {
            document.body.removeChild(popup);
          }
        }, { once: true });
        // add a listener to mouse movement to remove the popup if the mouse moves away
        document.body.addEventListener('mousemove', (event) => {
          // give some leeway for the mouse to move away from the popup
          if (movedpixel > 10) {
            if (document.body.contains(popup)) {
              document.body.removeChild(popup);
            }
          } else {
            movedpixel++;
          }
      })
      })
      .catch(error => console.error('Error fetching profile:', error));
  });
      }
    }
  }
  });
}

const processAnchor = (anchor, blockedUsers) => {
  const href = anchor.href;
  let username = null;

  if (href.includes('@')) {
    username = href.split('@')[1].split('/')[0];
  }
  processtweet(anchor);





  console.log(`Processing anchor tag for user: ${username}`);
  if (username && blockedUsers.includes(username)) {
    const parent = anchor.parentElement;
    const grandparent = parent.parentElement;
    if (grandparent) {
      grandparent.remove();
      grandparent.style.display = 'none';
      // loop through all the children and hide them
      grandparent.childNodes.forEach((child) => {
        // remove the child from the page
        child.remove();

      });
      console.log(grandparent);
      console.log(`Removed grandparent element for blocked user: ${username}`);
    }
  }
};




// Create an observer instance linked to the callback function
const observer = new MutationObserver(mutationCallback);

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Start observing the document body for configured mutations
observer.observe(document.body, config);

// Function to handle initial scan of existing nodes
const initialScan = () => {
  chrome.storage.local.get('blockedUsers', function(data) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
    
    console.log(data);
    const blockedUsers = data.blockedUsers || [];
    document.querySelectorAll('a').forEach((anchor) => processAnchor(anchor, blockedUsers));
  });
};

// Perform an initial scan of the document
initialScan();