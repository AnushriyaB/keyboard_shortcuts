// Cursor Shortcuts Data
const shortcutsData = {
  cursor: {
    name: "Cursor",
    categories: [
      {
        name: "General",
        commands: [
          { name: "Command Palette", keys: ["cmd", "shift", "p"] },
          { name: "Quick Open", keys: ["cmd", "p"] },
          { name: "New Window", keys: ["cmd", "shift", "n"] },
          { name: "Close Window", keys: ["cmd", "w"] },
          { name: "Settings", keys: ["cmd", ","] },
          { name: "Toggle Terminal", keys: ["ctrl", "`"] },
        ],
      },
      {
        name: "Editing",
        commands: [
          { name: "Cut Line", keys: ["cmd", "x"] },
          { name: "Copy Line", keys: ["cmd", "c"] },
          { name: "Move Line Up", keys: ["alt", "up"] },
          { name: "Move Line Down", keys: ["alt", "down"] },
          { name: "Copy Line Up", keys: ["shift", "alt", "up"] },
          { name: "Copy Line Down", keys: ["shift", "alt", "down"] },
          { name: "Delete Line", keys: ["cmd", "shift", "k"] },
          { name: "Insert Line Below", keys: ["cmd", "enter"] },
          { name: "Insert Line Above", keys: ["cmd", "shift", "enter"] },
          { name: "Toggle Comment", keys: ["cmd", "/"] },
        ],
      },
      {
        name: "Navigation",
        commands: [
          { name: "Go to File", keys: ["cmd", "p"] },
          { name: "Go to Symbol", keys: ["cmd", "shift", "o"] },
          { name: "Go to Line", keys: ["ctrl", "g"] },
          { name: "Go to Definition", keys: ["f12"] },
          { name: "Go Back", keys: ["ctrl", "-"] },
          { name: "Go Forward", keys: ["ctrl", "shift", "-"] },
          { name: "Toggle Sidebar", keys: ["cmd", "b"] },
        ],
      },
      {
        name: "Search",
        commands: [
          { name: "Find", keys: ["cmd", "f"] },
          { name: "Replace", keys: ["cmd", "alt", "f"] },
          { name: "Find Next", keys: ["cmd", "g"] },
          { name: "Find Previous", keys: ["cmd", "shift", "g"] },
          { name: "Find in Files", keys: ["cmd", "shift", "f"] },
        ],
      },
      {
        name: "Multi-cursor",
        commands: [
          { name: "Add Cursor Above", keys: ["cmd", "alt", "up"] },
          { name: "Add Cursor Below", keys: ["cmd", "alt", "down"] },
          { name: "Add Cursor to Line Ends", keys: ["cmd", "shift", "l"] },
          { name: "Select Next Occurrence", keys: ["cmd", "d"] },
        ],
      },
      {
        name: "AI Features",
        commands: [
          { name: "Chat", keys: ["cmd", "l"] },
          { name: "Composer", keys: ["cmd", "i"] },
          { name: "Generate Code", keys: ["cmd", "k"] },
          { name: "Accept Suggestion", keys: ["tab"] },
          { name: "Next Suggestion", keys: ["alt", "]"] },
          { name: "Previous Suggestion", keys: ["alt", "["] },
        ],
      },
    ],
  },
  figma: {
    name: "Figma",
    categories: [
      {
        name: "FILE",
        commands: [
          { name: "new window", keys: ["cmd", "shift", "n"] },
          { name: "new file", keys: ["cmd", "n"] },
          { name: "open file browser", keys: ["cmd", "o"] },
          { name: "close window", keys: ["cmd", "shift", "w"] },
          { name: "close tab", keys: ["cmd", "w"] },
          { name: "export", keys: ["cmd", "shift", "e"] },
          { name: "save as .fig file", keys: ["cmd", "shift", "s"] },
          { name: "save to version history", keys: ["cmd", "alt", "s"] },
          { name: "place", keys: ["cmd", "shift", "k"] },
        ],
      },
      {
        name: "EDIT",
        commands: [
          { name: "undo", keys: ["cmd", "z"] },
          { name: "redo", keys: ["cmd", "shift", "z"] },
          { name: "cut", keys: ["cmd", "x"] },
          { name: "copy", keys: ["cmd", "c"] },
          { name: "paste", keys: ["cmd", "v"] },
          { name: "paste over selection", keys: ["cmd", "shift", "v"] },
          { name: "duplicate", keys: ["cmd", "d"] },
          { name: "delete", keys: ["backspace"] },
          { name: "copy properties", keys: ["cmd", "alt", "c"] },
          { name: "paste properties", keys: ["cmd", "alt", "v"] },
          { name: "select all", keys: ["cmd", "a"] },
          { name: "select inverse", keys: ["cmd", "shift", "a"] },
          { name: "emoji & symbols", keys: ["ctrl", "cmd", "space"] },
        ],
      },
      {
        name: "VIEW",
        commands: [
          { name: "zoom in", keys: ["+"] },
          { name: "zoom out", keys: ["-"] },
          { name: "zoom to fit", keys: ["!"] },
          { name: "zoom to selection", keys: ["@"] },
          { name: "zoom to 100%", keys: [")"] },
          { name: "rename layer", keys: ["cmd", "r"] },
          { name: "rulers", keys: ["shift", "r"] },
          { name: "pixel preview", keys: ["ctrl", "p"] },
          { name: "layout grids", keys: ["ctrl", "g"] },
          { name: "outlines", keys: ["cmd", "y"] },
        ],
      },
      {
        name: "TOOLS",
        commands: [
          { name: "move tool", keys: ["v"] },
          { name: "pen tool", keys: ["p"] },
          { name: "rectangle tool", keys: ["r"] },
          { name: "ellipse tool", keys: ["o"] },
          { name: "line tool", keys: ["l"] },
          { name: "frame tool", keys: ["f"] },
          { name: "slice tool", keys: ["s"] },
          { name: "pick color", keys: ["ctrl", "c"] },
        ],
      },
      {
        name: "OBJECT",
        commands: [
          { name: "group selection", keys: ["cmd", "g"] },
          { name: "frame selection", keys: ["cmd", "alt", "g"] },
          { name: "ungroup selection", keys: ["cmd", "shift", "g"] },
          { name: "create component", keys: ["cmd", "alt", "k"] },
          { name: "detach instance", keys: ["cmd", "alt", "b"] },
          { name: "toggle mask", keys: ["ctrl", "cmd", "m"] },
          { name: "bring to front", keys: ["cmd", "alt", "]"] },
          { name: "bring forward", keys: ["cmd", "]"] },
          { name: "send backward", keys: ["cmd", "["] },
          { name: "send to back", keys: ["cmd", "alt", "["] },
          { name: "flip horizontal", keys: ["shift", "h"] },
          { name: "flip vertical", keys: ["shift", "v"] },
          { name: "flatten selection", keys: ["cmd", "e"] },
          { name: "outline stroke", keys: ["cmd", "shift", "o"] },
          { name: "show/hide selection", keys: ["cmd", "shift", "h"] },
          { name: "lock/unlock selection", keys: ["cmd", "shift", "l"] },
          { name: "collapse layers", keys: ["cmd", "alt", "l"] },
        ],
      },
      {
        name: "VECTOR",
        commands: [
          { name: "join selection", keys: ["cmd", "j"] },
          { name: "smooth join selection", keys: ["cmd", "shift", "j"] },
          { name: "delete & heal selection", keys: ["shift", "backspace"] },
        ],
      },
      {
        name: "TEXT",
        commands: [
          { name: "bold", keys: ["cmd", "b"] },
          { name: "italic", keys: ["cmd", "i"] },
          { name: "underline", keys: ["cmd", "u"] },
          { name: "increase font size", keys: ["cmd", "shift", ">"] },
          { name: "decrease font size", keys: ["cmd", "shift", "<"] },
          { name: "increase line height", keys: ["cmd", "alt", ","] },
          { name: "decrease line height", keys: ["cmd", "alt", "."] },
          { name: "increase letter space", keys: ["cmd", "alt", "<"] },
          { name: "decrease letter space", keys: ["cmd", "alt", ">"] },
          { name: "text align left", keys: ["cmd", "alt", "l"] },
          { name: "text align right", keys: ["cmd", "alt", "r"] },
          { name: "text align center", keys: ["cmd", "alt", "t"] },
          { name: "text align justified", keys: ["cmd", "alt", "j"] },
        ],
      },
      {
        name: "ARRANGE",
        commands: [
          { name: "align left", keys: ["alt", "a"] },
          { name: "align h. centers", keys: ["alt", "h"] },
          { name: "align right", keys: ["alt", "d"] },
          { name: "align top", keys: ["alt", "w"] },
          { name: "align v. centers", keys: ["alt", "v"] },
          { name: "align bottom", keys: ["alt", "s"] },
          { name: "tidy up", keys: ["ctrl", "alt", "t"] },
          { name: "distribute h. spacing", keys: ["ctrl", "alt", "h"] },
          { name: "distribute v. spacing", keys: ["ctrl", "alt", "v"] },
        ],
      },
    ],
  },
};

// Apple Keyboard Layout
const keyboardLayout = [
  [
    { label: "esc", key: "esc", class: "esc" },
    { label: "F1", key: "f1" },
    { label: "F2", key: "f2" },
    { label: "F3", key: "f3" },
    { label: "F4", key: "f4" },
    { label: "F5", key: "f5" },
    { label: "F6", key: "f6" },
    { label: "F7", key: "f7" },
    { label: "F8", key: "f8" },
    { label: "F9", key: "f9" },
    { label: "F10", key: "f10" },
    { label: "F11", key: "f11" },
    { label: "F12", key: "f12" },
  ],
  [
    { label: "`", key: "`" },
    { label: "1", key: "1" },
    { label: "2", key: "2" },
    { label: "3", key: "3" },
    { label: "4", key: "4" },
    { label: "5", key: "5" },
    { label: "6", key: "6" },
    { label: "7", key: "7" },
    { label: "8", key: "8" },
    { label: "9", key: "9" },
    { label: "0", key: "0" },
    { label: "-", key: "-" },
    { label: "=", key: "=" },
    { label: "delete", key: "backspace", class: "backspace" },
  ],
  [
    { label: "tab", key: "tab", class: "tab" },
    { label: "Q", key: "q" },
    { label: "W", key: "w" },
    { label: "E", key: "e" },
    { label: "R", key: "r" },
    { label: "T", key: "t" },
    { label: "Y", key: "y" },
    { label: "U", key: "u" },
    { label: "I", key: "i" },
    { label: "O", key: "o" },
    { label: "P", key: "p" },
    { label: "[", key: "[" },
    { label: "]", key: "]" },
    { label: "\\", key: "\\" },
  ],
  [
    { label: "caps", key: "caps", class: "caps" },
    { label: "A", key: "a" },
    { label: "S", key: "s" },
    { label: "D", key: "d" },
    { label: "F", key: "f" },
    { label: "G", key: "g" },
    { label: "H", key: "h" },
    { label: "J", key: "j" },
    { label: "K", key: "k" },
    { label: "L", key: "l" },
    { label: ";", key: ";" },
    { label: "'", key: "'" },
    { label: "return", key: "enter", class: "enter" },
  ],
  [
    { label: "shift", key: "shift", class: "shift-left" },
    { label: "Z", key: "z" },
    { label: "X", key: "x" },
    { label: "C", key: "c" },
    { label: "V", key: "v" },
    { label: "B", key: "b" },
    { label: "N", key: "n" },
    { label: "M", key: "m" },
    { label: ",", key: "," },
    { label: ".", key: "." },
    { label: "/", key: "/" },
    { label: "shift", key: "shift-right", class: "shift-right" },
    { label: "▲", key: "up", class: "arrow-up" },
  ],
  [
    { label: "fn", key: "fn", class: "fn" },
    { label: "ctrl", key: "ctrl", class: "ctrl" },
    { label: "alt", key: "alt", class: "alt" },
    { label: "⌘", key: "cmd", class: "cmd" },
    { label: "space", key: "space", class: "space" },
    { label: "⌘", key: "cmd-right", class: "cmd" },
    { label: "alt", key: "alt-right", class: "alt" },
    { label: "◀", key: "left", class: "arrow-left" },
    { label: "▼", key: "down", class: "arrow-down" },
    { label: "▶", key: "right", class: "arrow-right" },
  ],
];

// State management
let allExpanded = false;
let activeCommand = null;
let currentTheme = "default";

// Practice mode state
let practiceMode = {
  active: false,
  currentShortcutIndex: 0,
  currentKeys: new Set(),
  selectedShortcut: null,
  allShortcuts: [],
  completedCount: 0,
  skippedCount: 0,
};

// Audio Context for sound generation
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Sound generators - Default theme only (Barbie and Mechanical archived)
const soundGenerators = {
  default: (audioCtx) => {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioCtx.currentTime + 0.1
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.1);
  },

  // ARCHIVED - Barbie and Mechanical themes
  /*
  barbie: (audioCtx) => {
    const oscillator1 = audioCtx.createOscillator();
    const oscillator2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator1.type = "sine";
    oscillator2.type = "sine";
    oscillator1.frequency.setValueAtTime(600, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(900, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioCtx.currentTime + 0.2
    );

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator1.start(audioCtx.currentTime);
    oscillator2.start(audioCtx.currentTime);
    oscillator1.stop(audioCtx.currentTime + 0.2);
    oscillator2.stop(audioCtx.currentTime + 0.2);
  },

  mechanical: (audioCtx) => {
    // Simulate mechanical keyboard click with noise
    const bufferSize = audioCtx.sampleRate * 0.05;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = buffer.getChannelData(0);

    // Generate white noise with envelope
    for (let i = 0; i < bufferSize; i++) {
      const envelope = Math.exp(-i / (bufferSize * 0.15));
      output[i] = (Math.random() * 2 - 1) * envelope;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2000;
    filter.Q.value = 1;

    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.2;

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noise.start(audioCtx.currentTime);
  },
  */
};

// Play keyboard click sound
function playKeySound() {
  if (isMuted) return;

  try {
    const generator = soundGenerators[currentTheme];
    if (generator) {
      generator(audioContext);
    }
  } catch (error) {
    console.log("Audio playback error:", error);
  }
}

// Typing state
let typedText = "";
let fadeTimeout = null;
let textGrowthSize = 32; // Starting font size
let isTyping = false;
let isMuted = false;
let lastTextLength = 0;

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  console.log("=== APP INITIALIZING ===");
  lucide.createIcons();
  generateKeyboard(); // This now includes typing functionality
  loadShortcuts("cursor");
  setupEventListeners();
  // setupThemeSwitcher(); // Archived - using default theme only

  // Set initial theme
  document.body.classList.add("theme-default");

  // Setup mute button
  setupMuteButton();

  // Setup shortcuts handle
  setupShortcutsHandle();

  // Setup practice keyboard listener
  setupPracticeKeyboardListener();

  // Setup physical keyboard typing
  setupPhysicalKeyboardTyping();

  // Setup cleanup listeners for focus/blur and visibility change
  window.addEventListener("blur", () => {
    if (practiceMode.selectedShortcut) {
      clearAllPressedKeys();
    }
  });

  window.addEventListener("focus", () => {
    if (practiceMode.selectedShortcut) {
      clearAllPressedKeys();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && practiceMode.selectedShortcut) {
      clearAllPressedKeys();
    }
  });

  // Debug: Count all keys
  setTimeout(() => {
    const allKeys = document.querySelectorAll(".key");
    console.log(`Total keys found: ${allKeys.length}`);
    console.log("Keys by row:");
    document.querySelectorAll(".keyboard-row").forEach((row, index) => {
      const keysInRow = row.querySelectorAll(".key");
      console.log(`  Row ${index}: ${keysInRow.length} keys`);
    });

    // Test click on each key
    allKeys.forEach((key, idx) => {
      if (idx === 0) {
        console.log("Testing click listener on first key...");
        // Don't actually click, just check if listener exists
      }
    });
  }, 1000);
});

// Generate keyboard
function generateKeyboard() {
  const keyboard = document.getElementById("keyboard");

  // Map keyboard keys to characters for typing
  const keyToChar = {
    // Letters
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",

    // Numbers
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",

    // Special characters
    "`": "`",
    "-": "-",
    "=": "=",
    "[": "[",
    "]": "]",
    "\\": "\\",
    ";": ";",
    "'": "'",
    ",": ",",
    ".": ".",
    "/": "/",

    // Function keys
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    f6: "F6",
    f7: "F7",
    f8: "F8",
    f9: "F9",
    f10: "F10",
    f11: "F11",
    f12: "F12",

    // Special keys
    space: " ",
    backspace: "BACKSPACE",
    enter: "ENTER",
    tab: "    ",
    esc: "ESC",
    caps: "CAPS",

    // Modifier keys
    shift: "⇧",
    "shift-right": "⇧",
    ctrl: "⌃",
    alt: "⌥",
    "alt-right": "⌥",
    cmd: "⌘",
    "cmd-right": "⌘",
    fn: "fn",

    // Arrow keys
    left: "←",
    right: "→",
    up: "↑",
    down: "↓",
  };

  keyboardLayout.forEach((row, rowIndex) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";

    row.forEach((keyData, keyIndex) => {
      const keyElement = document.createElement("div");
      keyElement.className = `key ${keyData.class || ""}`;
      keyElement.dataset.key = keyData.key;

      const labelElement = document.createElement("span");
      labelElement.className = "key-label";

      // Add icon for special keys
      const keyIcon = getKeyIcon(keyData.key);
      if (keyIcon) {
        const iconElement = document.createElement("i");
        iconElement.className = "key-icon";
        iconElement.setAttribute("data-lucide", keyIcon);
        labelElement.appendChild(iconElement);
      }

      // Add text label
      const textNode = document.createTextNode(keyData.label);
      labelElement.appendChild(textNode);

      keyElement.appendChild(labelElement);

      // Add combined click handler for sound AND typing
      keyElement.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          e.stopPropagation();

          console.log(
            `✅ Key clicked: ${keyData.key} (Row ${rowIndex}, Key ${keyIndex})`
          );
          console.log(`   Label: "${keyData.label}"`);

          // Play sound
          try {
            playKeySound();
            console.log("   Sound played");
          } catch (err) {
            console.error("   Sound error:", err);
          }

          // Handle typing
          const keyName = keyElement.dataset.key;
          const char = keyToChar[keyName];

          console.log(`   Key name: ${keyName}, Char: ${char}`);

          if (char === "BACKSPACE") {
            typedText = typedText.slice(0, -1);
          } else if (char === "ENTER") {
            typedText += " ";
          } else if (char === "CAPS") {
            typedText += "[LOCK]";
          } else if (char === "ESC") {
            typedText = ""; // Clear all text on ESC
          } else if (char) {
            typedText += char;
          }

          console.log(`   Current text: "${typedText}"`);

          // Update display
          try {
            updateTypedTextDisplay(typedText);
            console.log("   Display updated");
          } catch (err) {
            console.error("   Display error:", err);
          }
        },
        true
      ); // Use capture phase

      rowElement.appendChild(keyElement);
    });

    keyboard.appendChild(rowElement);
  });

  console.log(`Keyboard generated with ${keyboardLayout.length} rows`);

  // Initialize Lucide icons for keys
  lucide.createIcons();
}

// Get icon for specific keys
function getKeyIcon(keyName) {
  const iconMap = {
    // Don't add icons for cmd and arrows - they already have Unicode symbols in labels
    // cmd: "command",
    // "cmd-right": "command",
    shift: "arrow-big-up",
    "shift-right": "arrow-big-up",
    ctrl: "terminal",
    alt: "option",
    "alt-right": "option",
    enter: "corner-down-left",
    backspace: "delete",
    tab: "move-right",
    caps: "lock",
    esc: "x-circle",
    space: "minus",
    // Arrow keys already have Unicode arrows in labels
    // left: "arrow-left",
    // right: "arrow-right",
    // up: "arrow-up",
    // down: "arrow-down",
    fn: "function-square",
  };

  return iconMap[keyName] || null;
}

// Load shortcuts for selected app
function loadShortcuts(appName) {
  const shortcutsContent = document.getElementById("shortcutsBottomContent");
  shortcutsContent.innerHTML = "";

  const appData = shortcutsData[appName];
  if (!appData) return;

  // Create horizontal layout
  let htmlContent = "";

  appData.categories.forEach((category, index) => {
    const commandsHTML = category.commands
      .map((command) => {
        const keyBadges = command.keys
          .map((key) => `<span class="key-badge">${formatKeyLabel(key)}</span>`)
          .join("");

        return `<div class="command-item" data-keys='${JSON.stringify(
          command.keys
        )}' data-command="${command.name}">
              <span class="command-name">${command.name}:</span>
              ${keyBadges}
          </div>`;
      })
      .join("");

    htmlContent += `
      <div class="category" data-category-index="${index}">
        <span class="category-title">${category.name}</span>
        ${commandsHTML}
      </div>
    `;
  });

  shortcutsContent.innerHTML = htmlContent;

  // Reinitialize Lucide icons
  lucide.createIcons();

  // Add event listeners to commands
  setupCategoryListeners();
}

// Create category HTML (legacy - keeping for compatibility)
function createCategoryElement(category, index) {
  const commandsHTML = category.commands
    .map((command) => {
      const keyBadges = command.keys
        .map((key) => `<span class="key-badge">${formatKeyLabel(key)}</span>`)
        .join("");

      return `<div class="command-item" data-keys='${JSON.stringify(
        command.keys
      )}'>
            <span class="command-name">${command.name}</span>
            <div class="shortcut-keys">${keyBadges}</div>
        </div>`;
    })
    .join("");

  return `
        <div class="category" data-category-index="${index}">
            <div class="category-header">
                <span class="category-title">
                    <i class="category-icon" data-lucide="chevron-down"></i>
                    ${category.name}
                </span>
            </div>
            <div class="category-commands">
                ${commandsHTML}
            </div>
        </div>
    `;
}

// Format key labels for display
function formatKeyLabel(key) {
  const labelMap = {
    cmd: "⌘",
    command: "⌘",
    ctrl: "⌃",
    control: "⌃",
    alt: "⌥",
    option: "⌥",
    shift: "⇧",
    enter: "↵",
    return: "↵",
    backspace: "⌫",
    delete: "⌫",
    tab: "⇥",
    up: "↑",
    down: "↓",
    left: "←",
    right: "→",
    space: "Space",
  };

  return labelMap[key.toLowerCase()] || key.toUpperCase();
}

// Setup category event listeners
function setupCategoryListeners() {
  // Get all command items and store for practice mode
  const commandItems = document.querySelectorAll(
    ".shortcuts-content .command-item"
  );

  // Build practice mode shortcuts array
  practiceMode.allShortcuts = [];

  commandItems.forEach((item, index) => {
    const keys = JSON.parse(item.dataset.keys);
    practiceMode.allShortcuts.push({
      element: item,
      keys: keys,
      command: item.dataset.command,
    });

    // Hover only when nothing is selected
    item.addEventListener("mouseenter", (e) => {
      if (practiceMode.selectedShortcut) return;
      clearHighlights();
      highlightKeys(e.currentTarget);
    });

    item.addEventListener("mouseleave", () => {
      if (practiceMode.selectedShortcut) return;
      clearHighlights();
    });

    // Click to select/deselect
    item.addEventListener("click", (e) => {
      const wasSelected = item.classList.contains("selected");

      // Clear all selections
      document
        .querySelectorAll(".command-item")
        .forEach((i) => i.classList.remove("selected"));
      document
        .querySelector(".shortcuts-content")
        ?.classList.remove("has-selection");

      if (!wasSelected) {
        // Select this shortcut
        item.classList.add("selected");
        document
          .querySelector(".shortcuts-content")
          .classList.add("has-selection");
        selectShortcutForPractice(item, index);
      } else {
        // Deselect
        deselectShortcut();
      }
    });
  });
}

// Clear all pressed keys from state and visual
function clearAllPressedKeys() {
  // Remove all .pressed classes from keys
  document.querySelectorAll(".key.pressed").forEach((key) => {
    key.classList.remove("pressed");
  });

  // Clear the currentKeys Set
  practiceMode.currentKeys.clear();
  console.log("🧹 Cleared all pressed keys");
}

// Select a shortcut for practice
function selectShortcutForPractice(element, index) {
  // Clear any residual pressed keys first
  clearAllPressedKeys();

  practiceMode.selectedShortcut = {
    element: element,
    keys: JSON.parse(element.dataset.keys),
    command: element.dataset.command,
  };
  practiceMode.currentShortcutIndex = index;
  practiceMode.active = true;
  practiceMode.completedCount = 0;
  practiceMode.skippedCount = 0;
  practiceMode.currentKeys.clear();

  // Initialize progress bar
  initProgressBar(practiceMode.allShortcuts.length);

  // Highlight the shortcut
  clearHighlights();
  highlightKeys(element);
}

// Deselect current shortcut
function deselectShortcut() {
  practiceMode.selectedShortcut = null;
  practiceMode.active = false;
  practiceMode.currentShortcutIndex = 0;
  practiceMode.completedCount = 0;
  practiceMode.skippedCount = 0;
  practiceMode.currentKeys.clear();

  // Clear highlights
  clearHighlights();

  // Hide progress bar
  document.getElementById("progressContainer")?.classList.remove("active");
}

// Shape and color combinations for visual distinction
const shapeTypes = ["circle", "square", "rhombus", "triangle", "star"];
const colorCount = 6;

// Highlight keys on keyboard with shape indicators
function highlightKeys(commandElement) {
  const keys = JSON.parse(commandElement.dataset.keys);

  keys.forEach((keyName, index) => {
    const normalizedKey = normalizeKeyName(keyName);

    // Determine shape and color for this key
    const shapeIndex = index % shapeTypes.length;
    const colorIndex = (index % colorCount) + 1;
    const shapeType = shapeTypes[shapeIndex];

    // Collect all key elements to highlight for this key name
    let keysToHighlight = [];

    // Get all matching keys
    const keyElements = document.querySelectorAll(
      `[data-key="${normalizedKey}"]`
    );
    keysToHighlight.push(...keyElements);

    // Handle special cases - add both keys for modifier keys
    if (normalizedKey === "shift") {
      const shiftLeft = document.querySelector('[data-key="shift"]');
      const shiftRight = document.querySelector('[data-key="shift-right"]');
      if (shiftLeft && !keysToHighlight.includes(shiftLeft))
        keysToHighlight.push(shiftLeft);
      if (shiftRight && !keysToHighlight.includes(shiftRight))
        keysToHighlight.push(shiftRight);
    }

    if (normalizedKey === "cmd") {
      const cmdLeft = document.querySelector('[data-key="cmd"]');
      const cmdRight = document.querySelector('[data-key="cmd-right"]');
      if (cmdLeft && !keysToHighlight.includes(cmdLeft))
        keysToHighlight.push(cmdLeft);
      if (cmdRight && !keysToHighlight.includes(cmdRight))
        keysToHighlight.push(cmdRight);
    }

    if (normalizedKey === "alt") {
      const altLeft = document.querySelector('[data-key="alt"]');
      const altRight = document.querySelector('[data-key="alt-right"]');
      if (altLeft && !keysToHighlight.includes(altLeft))
        keysToHighlight.push(altLeft);
      if (altRight && !keysToHighlight.includes(altRight))
        keysToHighlight.push(altRight);
    }

    // Check if this key has multiple instances (a pair)
    const hasPair = keysToHighlight.length > 1;

    // Apply highlight and shape indicator to all collected keys
    keysToHighlight.forEach((keyElement) => {
      if (keyElement && !keyElement.classList.contains("highlighted")) {
        keyElement.classList.add("highlighted");

        // Only add shape indicator if there are multiple keys (a pair)
        if (hasPair) {
          const shapeIndicator = document.createElement("div");
          shapeIndicator.className = `key-shape-indicator key-shape-${shapeType} key-shape-color-${colorIndex}`;
          keyElement.appendChild(shapeIndicator);
        }
      }
    });
  });
}

// Clear all highlights and shape indicators
function clearHighlights() {
  document.querySelectorAll(".key.highlighted").forEach((key) => {
    key.classList.remove("highlighted");

    // Remove shape indicators
    const shapeIndicators = key.querySelectorAll(".key-shape-indicator");
    shapeIndicators.forEach((indicator) => indicator.remove());
  });
}

// Normalize key names
function normalizeKeyName(keyName) {
  const keyMap = {
    command: "cmd",
    "⌘": "cmd",
    option: "alt",
    "⌥": "alt",
    control: "ctrl",
    "^": "ctrl",
    delete: "backspace",
    return: "enter",
    up: "up",
    down: "down",
    left: "left",
    right: "right",
  };

  return keyMap[keyName.toLowerCase()] || keyName.toLowerCase();
}

// Setup main event listeners
function setupEventListeners() {
  // Setup custom dropdown
  setupCustomDropdown();
}

// Setup custom dropdown
function setupCustomDropdown() {
  const customSelect = document.getElementById("customAppSelect");
  const selectTrigger = customSelect.querySelector(".select-trigger");
  const selectOptions = document.getElementById("selectOptions");
  const options = selectOptions.querySelectorAll(".select-option");

  // Toggle dropdown
  selectTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = customSelect.classList.contains("open");
    customSelect.classList.toggle("open");
    console.log("Dropdown toggled:", !isOpen);
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove("open");
    }
  });

  // Handle option selection
  options.forEach((option, index) => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const value = option.dataset.value;
      const icon = option.querySelector(".app-icon").src;
      const name = option.querySelector(".app-name").textContent;

      console.log("Option clicked:", value, "Index:", index);

      // Update trigger
      selectTrigger.querySelector(".app-icon").src = icon;
      selectTrigger.querySelector(".app-name").textContent = name;

      // Update active state
      options.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      // Load shortcuts
      console.log("Loading shortcuts for:", value);
      loadShortcuts(value);

      // Close dropdown
      setTimeout(() => {
        customSelect.classList.remove("open");
      }, 100);
    });

    // Also handle mousedown for better responsiveness
    option.addEventListener("mousedown", (e) => {
      e.preventDefault();
    });
  });

  // Set initial active state
  options[0].classList.add("active");
}

// Setup theme switcher - ARCHIVED (using default theme only)
// function setupThemeSwitcher() {
//   const themeChips = document.querySelectorAll(".theme-chip");
//   const keyboard = document.getElementById("keyboard");

//   themeChips.forEach((chip) => {
//     chip.addEventListener("click", () => {
//       const theme = chip.dataset.theme;

//       // Update active chip
//       themeChips.forEach((c) => c.classList.remove("active"));
//       chip.classList.add("active");

//       // Update keyboard theme
//       keyboard.dataset.theme = theme;
//       currentTheme = theme;

//       // Update body theme class
//       document.body.className = `theme-${theme}`;

//       // Play preview sound
//       playKeySound();
//     });
//   });

//   // Reinitialize Lucide icons for theme chips
//   lucide.createIcons();
// }

// Note: Typing functionality is now integrated into generateKeyboard()
// This function is no longer needed as event listeners are added during keyboard generation

// Update typed text display with sharp typewriter effect
function updateTypedTextDisplay(text) {
  const typedTextDisplay = document.getElementById("typedText");

  // Clear previous timeout
  if (fadeTimeout) {
    clearTimeout(fadeTimeout);
  }

  // Remove fading class if present
  typedTextDisplay.classList.remove("fading");

  // Convert [LOCK] to icon and update display
  if (text) {
    // Check if text is too long - show message and refresh
    const textLength = text.length;

    if (textLength > 500) {
      // Show the sassy message
      typedTextDisplay.innerHTML = `
                <div style="font-size: 48px; font-weight: 700; animation: shake 0.5s;">
                    Are you crazy? Stop typing fleeting words.<br>
                    Get a diary!
                </div>
            `;
      typedTextDisplay.style.fontSize = "48px";
      typedTextDisplay.classList.add("active");

      // Refresh page after 3 seconds
      setTimeout(() => {
        location.reload();
      }, 3000);
      return;
    }

    // Detect if new character was added
    const isNewChar = textLength > lastTextLength;
    lastTextLength = textLength;

    // Replace [LOCK] with lock icon and wrap each character
    let htmlContent = text
      .split("[LOCK]")
      .map((part, index, array) => {
        if (index < array.length - 1) {
          return part + '<i class="typed-icon" data-lucide="lock"></i>';
        }
        return part;
      })
      .join("");

    // Add flash effect to last character if new
    if (isNewChar && htmlContent.length > 0) {
      const chars = htmlContent.split("");
      const lastCharIndex = chars.length - 1;
      if (lastCharIndex >= 0 && !chars[lastCharIndex].includes("<")) {
        chars[
          lastCharIndex
        ] = `<span class="char-flash">${chars[lastCharIndex]}</span>`;
        htmlContent = chars.join("");
      }
    }

    typedTextDisplay.innerHTML =
      '<span class="text-content">' +
      htmlContent +
      '</span><span class="typing-cursor"></span>';

    // Reinitialize icons
    lucide.createIcons();

    if (!typedTextDisplay.classList.contains("active")) {
      typedTextDisplay.classList.add("active");
    }

    // Calculate growth based on text length
    // Start growing after 50 characters, grow 1px per 10 characters
    if (textLength > 50) {
      const middleScreen = window.innerWidth / 2;
      const displayWidth = typedTextDisplay.offsetWidth;

      // If text display reaches middle of screen, start growing
      if (displayWidth > middleScreen) {
        const extraChars = textLength - 50;
        textGrowthSize = 32 + Math.floor(extraChars / 10);
        textGrowthSize = Math.min(textGrowthSize, 80); // Cap at 80px
        typedTextDisplay.style.fontSize = `${textGrowthSize}px`;
      } else {
        textGrowthSize = 32;
        typedTextDisplay.style.fontSize = "32px";
      }
    } else {
      textGrowthSize = 32;
      typedTextDisplay.style.fontSize = "32px";
    }

    // Sharp fade after 2 seconds of no typing
    fadeTimeout = setTimeout(() => {
      typedTextDisplay.classList.remove("active");
      typedTextDisplay.classList.add("fading");

      // Clear text after fade animation completes
      setTimeout(() => {
        typedText = "";
        typedTextDisplay.innerHTML = "";
        typedTextDisplay.classList.remove("fading", "active");
        textGrowthSize = 32;
        typedTextDisplay.style.fontSize = "32px";
        lastTextLength = 0;
      }, 800); // Match the animation duration
    }, 2000);
  } else {
    typedTextDisplay.innerHTML = "";
    typedTextDisplay.classList.remove("active", "fading");
    textGrowthSize = 32;
    typedTextDisplay.style.fontSize = "32px";
    lastTextLength = 0;
  }
}

// Setup mute buttons (both left and right)
function setupMuteButton() {
  const muteBtnLeft = document.getElementById("muteBtnLeft");
  const muteBtnRight = document.getElementById("muteBtnRight");

  // Function to update both buttons
  function updateBothButtons() {
    isMuted = !isMuted;
    console.log("Mute button clicked. isMuted:", isMuted);

    const iconName = isMuted ? "volume-x" : "speaker";
    console.log("Setting icons to:", iconName);

    // Update left button
    muteBtnLeft.innerHTML = "";
    const leftIcon = document.createElement("i");
    leftIcon.setAttribute("data-lucide", iconName);
    muteBtnLeft.appendChild(leftIcon);

    // Update right button
    muteBtnRight.innerHTML = "";
    const rightIcon = document.createElement("i");
    rightIcon.setAttribute("data-lucide", iconName);
    muteBtnRight.appendChild(rightIcon);

    // Initialize the new icons
    lucide.createIcons();
    console.log("Both icons updated successfully");
  }

  // Add click listeners to both buttons
  muteBtnLeft.addEventListener("click", updateBothButtons);
  muteBtnRight.addEventListener("click", updateBothButtons);

  // Sync hover effect - when hovering over one, scale both
  muteBtnLeft.addEventListener("mouseenter", () => {
    muteBtnLeft.classList.add("synced-hover");
    muteBtnRight.classList.add("synced-hover");
  });

  muteBtnLeft.addEventListener("mouseleave", () => {
    muteBtnLeft.classList.remove("synced-hover");
    muteBtnRight.classList.remove("synced-hover");
  });

  muteBtnRight.addEventListener("mouseenter", () => {
    muteBtnLeft.classList.add("synced-hover");
    muteBtnRight.classList.add("synced-hover");
  });

  muteBtnRight.addEventListener("mouseleave", () => {
    muteBtnLeft.classList.remove("synced-hover");
    muteBtnRight.classList.remove("synced-hover");
  });
}

// Setup shortcuts handle toggle
function setupShortcutsHandle() {
  const shortcutsBar = document.getElementById("shortcutsBar");
  const shortcutsHandle = document.getElementById("shortcutsHandle");

  if (!shortcutsBar || !shortcutsHandle) return;

  // Click to toggle
  shortcutsHandle.addEventListener("click", () => {
    shortcutsBar.classList.toggle("expanded");

    // Update aria-label
    const isExpanded = shortcutsBar.classList.contains("expanded");
    shortcutsHandle.setAttribute(
      "aria-label",
      isExpanded ? "Collapse shortcuts" : "Expand shortcuts"
    );
  });

  // Scroll to expand/collapse - only when scrolling outside the sheet
  window.addEventListener(
    "wheel",
    (e) => {
      // Check if scrolling is happening inside the shortcuts bar
      const isScrollingInsideSheet = shortcutsBar.contains(e.target);

      // If scrolling inside the sheet content, allow normal scroll behavior
      if (isScrollingInsideSheet) {
        return;
      }

      // Only handle expand/collapse when scrolling on the page (outside sheet)
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (scrollingUp && !shortcutsBar.classList.contains("expanded")) {
        // Scrolling up on page - expand
        shortcutsBar.classList.add("expanded");
        shortcutsHandle.setAttribute("aria-label", "Collapse shortcuts");
      } else if (scrollingDown && shortcutsBar.classList.contains("expanded")) {
        // Scrolling down on page - collapse immediately
        shortcutsBar.classList.remove("expanded");
        shortcutsHandle.setAttribute("aria-label", "Expand shortcuts");
      }
    },
    { passive: true }
  );

  // Reinitialize Lucide icons for the handle
  lucide.createIcons();
}

// Normalize physical keyboard key to internal key names
function normalizePhysicalKey(e) {
  // Only prevent browser shortcuts (modifier + key combinations) during practice mode
  if (practiceMode.selectedShortcut) {
    // Check if it's a shortcut combination (modifier + another key)
    const hasModifier = e.metaKey || e.ctrlKey || e.altKey;
    const isModifierKey = ["Meta", "Control", "Alt", "Command"].includes(e.key);

    // Prevent default only for actual shortcuts, not standalone modifiers
    if (hasModifier && !isModifierKey) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  // Handle modifier keys
  if (e.key === "Meta" || e.key === "Command") return "cmd";
  if (e.key === "Control") return "ctrl";
  if (e.key === "Shift") return "shift";
  if (e.key === "Alt" || e.key === "Option") return "alt";

  // Handle special keys
  if (e.key === "Escape") return "esc";
  if (e.key === " ") return "space";
  if (e.key === "Enter") return "enter";
  if (e.key === "Backspace") return "backspace";
  if (e.key === "Tab") return "tab";
  if (e.key === "ArrowUp") return "up";
  if (e.key === "ArrowDown") return "down";
  if (e.key === "ArrowLeft") return "left";
  if (e.key === "ArrowRight") return "right";

  // Handle function keys
  if (e.key.startsWith("F") && e.key.length <= 3) return e.key.toLowerCase();

  // Handle special characters that might have different names
  // These are already in the correct format, just need to be lowercase
  if (e.key === "-" || e.key === "_") return "-";
  if (e.key === "=" || e.key === "+") return "=";
  if (e.key === "[" || e.key === "{") return "[";
  if (e.key === "]" || e.key === "}") return "]";
  if (e.key === "\\" || e.key === "|") return "\\";
  if (e.key === ";" || e.key === ":") return ";";
  if (e.key === "'" || e.key === '"') return "'";
  if (e.key === "," || e.key === "<") return ",";
  if (e.key === "." || e.key === ">") return ".";
  if (e.key === "/" || e.key === "?") return "/";
  if (e.key === "`" || e.key === "~") return "`";

  // Handle regular keys - convert to lowercase
  return e.key.toLowerCase();
}

// Highlight pressed key on virtual keyboard
function highlightPressedKey(keyName) {
  const keyElements = document.querySelectorAll(`[data-key="${keyName}"]`);
  keyElements.forEach((el) => el.classList.add("pressed"));

  // Handle special cases for left/right variants
  if (keyName === "shift") {
    document
      .querySelector('[data-key="shift-right"]')
      ?.classList.add("pressed");
  }
  if (keyName === "cmd") {
    document.querySelector('[data-key="cmd-right"]')?.classList.add("pressed");
  }
  if (keyName === "alt") {
    document.querySelector('[data-key="alt-right"]')?.classList.add("pressed");
  }
}

// Remove pressed highlight from key
function unhighlightPressedKey(keyName) {
  const keyElements = document.querySelectorAll(`[data-key="${keyName}"]`);
  keyElements.forEach((el) => el.classList.remove("pressed"));

  // Handle special cases for left/right variants
  if (keyName === "shift") {
    document
      .querySelector('[data-key="shift-right"]')
      ?.classList.remove("pressed");
  }
  if (keyName === "cmd") {
    document
      .querySelector('[data-key="cmd-right"]')
      ?.classList.remove("pressed");
  }
  if (keyName === "alt") {
    document
      .querySelector('[data-key="alt-right"]')
      ?.classList.remove("pressed");
  }
}

// Check if arrays have same elements (order independent)
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  return sorted1.every((val, idx) => val === sorted2[idx]);
}

// Show success message
function showSuccessMessage(shortcutName, shortcutKeys) {
  const feedback = document.getElementById("practiceFeedback");
  if (!feedback) return;

  // Generate key badges - displayed horizontally
  const keyBadges = shortcutKeys
    .map((key) => `<span class="key-badge">${formatKeyLabel(key)}</span>`)
    .join("");

  // Show "Correct" on first line, shortcut name and key badges together on second line
  feedback.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-weight: 600; font-size: 0.5em;">Correct!</div>
      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: center;">
        <span style="font-size: 0.5em; opacity: 0.7;">${shortcutName}</span>
        <span style="display: flex; align-items: center; gap: 4px;">
          ${keyBadges}
        </span>
      </div>
    </div>
  `;
  feedback.classList.remove("error");
  feedback.classList.add("show");

  setTimeout(() => {
    feedback.classList.remove("show");
  }, 800);
}

// Show error message
function showErrorMessage() {
  const feedback = document.getElementById("practiceFeedback");
  if (!feedback) return;

  // Style "Try Again" same as "Correct"
  feedback.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="font-weight: 600; font-size: 0.8em;">Try Again</div>
    </div>
  `;
  feedback.classList.add("error");
  feedback.classList.add("show");

  setTimeout(() => {
    feedback.classList.remove("show");
  }, 800);
}

// Check if current pressed keys match the shortcut
function checkShortcutMatch() {
  if (!practiceMode.selectedShortcut) return;

  const expected = practiceMode.selectedShortcut.keys;
  const pressed = Array.from(practiceMode.currentKeys);

  // Enhanced debug logging
  console.log("🔍 Checking shortcut match:");
  console.log("   Expected:", expected);
  console.log("   Expected (sorted):", [...expected].sort());
  console.log("   Pressed:", pressed);
  console.log("   Pressed (sorted):", [...pressed].sort());

  // Check each key individually
  console.log("   Key-by-key comparison:");
  expected.forEach((key) => {
    const found = pressed.includes(key);
    console.log(`      "${key}" - ${found ? "✓ Found" : "✗ Missing"}`);
  });
  pressed.forEach((key) => {
    const expected_has = expected.includes(key);
    if (!expected_has) {
      console.log(`      "${key}" - ⚠️ Extra (not expected)`);
    }
  });

  console.log("   Match?", arraysEqual(expected, pressed));

  // Check if all expected keys are pressed and match exactly
  if (arraysEqual(expected, pressed)) {
    console.log("✅ Success!");
    const shortcutName = practiceMode.selectedShortcut.command || "Shortcut";
    const shortcutKeys = practiceMode.selectedShortcut.keys;
    showSuccessMessage(shortcutName, shortcutKeys);
    practiceMode.completedCount++;
    updateProgressBar();

    setTimeout(() => {
      advanceToNextShortcut();
    }, 800);
  } else if (pressed.length >= expected.length) {
    // Wrong combination - too many keys or wrong keys
    console.log("❌ Error: Too many keys or wrong keys");
    showErrorMessage();
  }
}

// Advance to next shortcut in the list
function advanceToNextShortcut() {
  practiceMode.currentShortcutIndex++;

  if (practiceMode.currentShortcutIndex >= practiceMode.allShortcuts.length) {
    // All shortcuts completed!
    completePracticeSession();
    return;
  }

  // Clear all pressed keys before moving to next
  clearAllPressedKeys();

  // Clear current selection
  document
    .querySelectorAll(".command-item")
    .forEach((i) => i.classList.remove("selected"));

  // Select next shortcut
  const nextItem = practiceMode.allShortcuts[practiceMode.currentShortcutIndex];
  if (nextItem.element) {
    nextItem.element.classList.add("selected");
    nextItem.element.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Update practice mode
    practiceMode.selectedShortcut = nextItem;

    // Clear highlights and show new shortcut
    clearHighlights();
    highlightKeys(nextItem.element);
  }
}

// Initialize progress bar with keyboard keys
function initProgressBar(totalShortcuts) {
  const container = document.getElementById("progressKeys");
  const progressText = document.getElementById("progressText");
  const progressContainer = document.getElementById("progressContainer");

  if (!container) return;

  container.innerHTML = "";

  // Create mini keyboard keys for each shortcut
  for (let i = 0; i < totalShortcuts; i++) {
    const key = document.createElement("div");
    key.className = "progress-key";
    key.dataset.index = i;
    container.appendChild(key);
  }

  // Show progress bar and initialize text
  progressContainer.classList.add("active");
  progressText.textContent = `0 / ${totalShortcuts}`;

  // Mark first key as active
  const firstKey = container.querySelector(".progress-key");
  if (firstKey) firstKey.classList.add("active");

  // Setup next button
  setupNextButton();

  // Setup close button
  setupClosePracticeButton();
}

// Setup close practice button to exit practice mode
function setupClosePracticeButton() {
  const closeBtn = document.getElementById("closePracticeBtn");
  if (!closeBtn) return;

  closeBtn.addEventListener("click", () => {
    // Clear selection and exit practice mode
    document
      .querySelectorAll(".command-item")
      .forEach((i) => i.classList.remove("selected"));
    document
      .querySelector(".shortcuts-content")
      ?.classList.remove("has-selection");

    deselectShortcut();
  });
}

// Setup next button to skip shortcuts
function setupNextButton() {
  const nextBtn = document.getElementById("nextBtn");
  if (!nextBtn) return;

  // Remove any existing listener
  const newBtn = nextBtn.cloneNode(true);
  nextBtn.parentNode.replaceChild(newBtn, nextBtn);

  newBtn.addEventListener("click", () => {
    if (!practiceMode.selectedShortcut) return;

    // Mark current as skipped (not completed)
    // Use total progress (completed + skipped) as the progress bar position
    const keys = document.querySelectorAll(".progress-key");
    const currentProgressPosition =
      practiceMode.completedCount + practiceMode.skippedCount;
    const currentKey = keys[currentProgressPosition];

    if (currentKey) {
      currentKey.classList.add("skipped");
      currentKey.classList.remove("active");
    }

    practiceMode.skippedCount++;
    updateProgressText(
      practiceMode.completedCount + practiceMode.skippedCount,
      keys.length
    );

    // Mark next key as active in progress bar
    const nextProgressPosition =
      practiceMode.completedCount + practiceMode.skippedCount;
    const nextKey = keys[nextProgressPosition];
    if (nextKey) {
      nextKey.classList.add("active");
    }

    // Move to next shortcut in list
    setTimeout(() => {
      advanceToNextShortcut();
    }, 200);
  });
}

// Update progress bar
function updateProgressBar() {
  const keys = document.querySelectorAll(".progress-key");
  const progressText = document.getElementById("progressText");

  // Mark previous key as completed (use total progress position)
  const totalProgress = practiceMode.completedCount + practiceMode.skippedCount;
  const currentKey = keys[totalProgress - 1];
  if (currentKey) {
    currentKey.classList.add("completed");
    currentKey.classList.remove("active");
  }

  // Mark next key as active
  const nextKey = keys[totalProgress];
  if (nextKey) {
    nextKey.classList.add("active");
  }

  // Update progress text
  if (progressText) {
    progressText.textContent = `${totalProgress} / ${keys.length}`;
  }
}

// Update progress text display
function updateProgressText(completed, total) {
  const progressText = document.getElementById("progressText");
  if (progressText) {
    progressText.textContent = `${completed} / ${total}`;
  }
}

// Complete practice session
function completePracticeSession() {
  // Show completion message first
  const feedback = document.getElementById("practiceFeedback");
  if (feedback) {
    feedback.textContent = "🎉 Complete!";
    feedback.classList.remove("error");
    feedback.classList.add("show");

    setTimeout(() => {
      feedback.classList.remove("show");
    }, 2000);
  }

  // Clear all pressed keys
  clearAllPressedKeys();

  // Clear selection
  document
    .querySelectorAll(".command-item")
    .forEach((i) => i.classList.remove("selected"));
  document
    .querySelector(".shortcuts-content")
    ?.classList.remove("has-selection");

  // Clear highlights
  clearHighlights();

  // Reset practice mode completely
  practiceMode.selectedShortcut = null;
  practiceMode.active = false;
  practiceMode.currentShortcutIndex = 0;
  practiceMode.completedCount = 0;
  practiceMode.skippedCount = 0;
  practiceMode.currentKeys.clear();

  // Hide progress bar after a delay
  setTimeout(() => {
    document.getElementById("progressContainer")?.classList.remove("active");
  }, 3000);
}

// Setup physical keyboard listener
function setupPracticeKeyboardListener() {
  document.addEventListener(
    "keydown",
    (e) => {
      if (!practiceMode.selectedShortcut) return;

      // Prevent default browser shortcuts during practice mode
      e.preventDefault();
      e.stopPropagation();

      // Track pressed keys (normalize to match our key naming)
      console.log(
        "⬇️ RAW Key DOWN - e.key:",
        e.key,
        "| e.code:",
        e.code,
        "| e.metaKey:",
        e.metaKey,
        "| e.ctrlKey:",
        e.ctrlKey,
        "| e.altKey:",
        e.altKey,
        "| e.shiftKey:",
        e.shiftKey
      );
      const key = normalizePhysicalKey(e);
      console.log("   Normalized to:", key);

      // Only add key if it's not already in the set (avoid repeated keydown events)
      const wasAlreadyPressed = practiceMode.currentKeys.has(key);
      practiceMode.currentKeys.add(key);
      console.log(
        "   Current keys in Set:",
        Array.from(practiceMode.currentKeys)
      );

      // Play keyboard sound on new key press (not on repeated keydown)
      if (!wasAlreadyPressed) {
        playKeySound();
      }

      // Show real-time key press on virtual keyboard
      highlightPressedKey(key);

      // Check if shortcut matches
      checkShortcutMatch();
    },
    true
  ); // Use capture phase to catch events before they bubble

  document.addEventListener(
    "keyup",
    (e) => {
      if (!practiceMode.selectedShortcut) return;

      // Prevent default browser shortcuts during practice mode
      e.preventDefault();
      e.stopPropagation();

      const key = normalizePhysicalKey(e);
      console.log("⬆️ Key UP:", key);
      practiceMode.currentKeys.delete(key);
      console.log(
        "   Current keys in Set:",
        Array.from(practiceMode.currentKeys)
      );
      unhighlightPressedKey(key);
    },
    true
  ); // Use capture phase
}

// Normalize physical key to virtual keyboard data-key values
function normalizeKeyForVirtualKeyboard(key) {
  // Map physical keys to virtual keyboard data-key values
  if (key === "Escape") return "esc";
  if (key === " ") return "space";
  if (key === "Enter") return "enter";
  if (key === "Backspace") return "backspace";
  if (key === "Tab") return "tab";
  if (key === "ArrowUp") return "up";
  if (key === "ArrowDown") return "down";
  if (key === "ArrowLeft") return "left";
  if (key === "ArrowRight") return "right";
  return key.toLowerCase();
}

// Setup physical keyboard typing (when NOT practicing)
function setupPhysicalKeyboardTyping() {
  document.addEventListener("keydown", (e) => {
    // Only type if NOT in practice mode
    if (practiceMode.selectedShortcut) return;

    // Map modifier keys to virtual keyboard keys
    let keyName;
    if (e.key === "Meta" || e.key === "Command") {
      keyName = "cmd"; // Use left cmd by default
    } else if (e.key === "Control") {
      keyName = "ctrl";
    } else if (e.key === "Shift") {
      keyName = "shift"; // Use left shift by default
    } else if (e.key === "Alt" || e.key === "Option") {
      keyName = "alt"; // Use left alt by default
    } else {
      // For non-modifier keys, ignore shortcuts (modifier + key combinations)
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // Find corresponding virtual key
      keyName = normalizeKeyForVirtualKeyboard(e.key);
    }

    const virtualKey = document.querySelector(`[data-key="${keyName}"]`);

    if (virtualKey) {
      virtualKey.click(); // Triggers existing typing logic
    }
  });
}
