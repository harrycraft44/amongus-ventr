// Inject the dialog HTML into the DOM
const defultSettings = {
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
  "--radius": "0.5rem",
  "--lynt-focus": "44 24% 91%"
};

var dialogHTML = `
  <div id="extension-dialog" class="extension-dialog">
    <div class="extension-dialog-content">
      <span id="extension-dialog-close" class="extension-dialog-close">&times;</span>
      <h2>Edit Extension Variables</h2>
      <!-- default styles buttons like default-->
      <button class="button" id="extension-dialog-default">set settings to defult</button>

      <button class="button" id="extension-dialog-advanced-button">hide advanced settings</button>
      <div id="advanced">
      <h2>Edit Extension Variables</h2>
      <div id="extension-dialog-body">
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
    <label for="radius">Radius:</label>
    <input type="text" id="radius" placeholder="0.5rem">
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
      <button id="extension-dialog-save">Save</button>
    </div>

    </div>
  </div>
`;



document.body.insertAdjacentHTML('beforeend', dialogHTML);

// Add CSS to style the dialog
const style = document.createElement('style');
style.innerHTML = `
  .extension-dialog {
    display: none;
    position: fixed;
    z-index: 9999;
    color: black;
        max-height: 80vh;
  
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(10, 10, 10, 0.5);
  }
  .button {
    background-color: white;
    color: black;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
  }

  .extension-dialog-content {
    background-color: white;
    margin: 0 auto;
    padding: 20px;
    max-height: 80vh;
    color: black;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    overflow-y: auto;

  }

.extension-dialog-clclose
    color: #aaa
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .extension-dialog-close:hover,
  .extension-dialog-close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

document.head.appendChild(style);

// Function to toggle the advanced settings
function toggleAdvanced() {
  const advanced = document.getElementById('advanced');
  if (advanced.style.display === 'none') {
    advanced.style.display = 'block';
    advanced.innerHTML = 'hide advanced settings';
  } else {
    advanced.style.display = 'none';
    advanced.innerHTML = 'show advanced settings';
  }
}
// Add event listener to the advanced button
document.getElementById('extension-dialog-advanced-button').addEventListener('click', toggleAdvanced);

function loadSettings(jsonobject) {
  const cssVariables = jsonobject;
  const root = document.documentElement;
  Object.keys(cssVariables).forEach(key => {
    console.log(`Setting CSS variable --${key} to ${cssVariables[key]}`);
    root.style.setProperty(`--${key}`, cssVariables[key], 'important');
  });
  console.log('Applied CSS variables to the document');
  chrome.storage.local.set({ cssVariables: cssVariables }, function() {
    console.log('CSS variables saved');
  }); 
  
}

document.getElementById('extension-dialog-default').addEventListener('click', () => {
  loadSettings('default-settings.json');
});

function openDialog() {
  console.log('Opening dialog');
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

  chrome.storage.local.set({ cssVariables: cssVariables }, function() {
    // print all the css variables
    console.log(cssVariables);

    console.log('CSS variables saved');
    closeDialog();
  });
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
  newButton.textContent = 'Edit Extension Variables';
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
chrome.storage.local.get('cssVariables', function(data) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
    return;
  }

  const cssVariables = data.cssVariables || {};

  if (Object.keys(cssVariables).length === 0) {
    console.log('No CSS variables found in storage.');
  } else {

    // Apply CSS variables to the document
    // apply to dialog box defults
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
      console.log(`Setting CSS variable --${key} to ${cssVariables[key]}`);
      root.style.setProperty(`--${key}`, cssVariables[key], 'important');
    });
    console.log('Applied CSS variables to the document');
  }

  
});