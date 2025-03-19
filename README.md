# ⌨️ Typing Test

[🔗 Live Demo](https://aam2002.github.io/TypingTest/)

## 🚀 Overview
Typing Test is a web-based application designed to help users improve their typing speed and accuracy. It provides real-time feedback on performance and visually represents typing mistakes.

## ✨ Features
- 📜 **Displays a predefined paragraph** for users to type
- ⏱️ **Tracks typing speed** (Words Per Minute - WPM)
- 🎯 **Tracks accuracy and mistakes**
- 🔴 **Highlights correct and incorrect words**
- 🎹 **Displays an interactive keyboard visualization**
- 🔊 **Audio feedback on key presses**
- ⏳ **Timer to track test duration**
- 📊 **Result summary after the test**

## 🛠️ Technologies Used
- 🌐 **HTML**
- 🎨 **CSS**
- ⚡ **JavaScript**

## 🎯 How to Use
1. Open the [🔗 Live Demo](https://aam2002.github.io/TypingTest/) in your browser.
2. ✍️ **Begin typing** the displayed text.
3. The application will **calculate your WPM, accuracy, and mistakes** in real-time.
4. ⏳ **At the end of the timer, results will be displayed.**
5. 🔄 **Restart the test** for a new challenge.

---

## 📜 Explanation of `script.js`

### 📝 **Text Initialization**
- `textString`: Holds the text that users will type.
- `myArray`: Splits `textString` into an array of words for easy processing.
- `para`: Refers to the paragraph container where text is displayed.

### 🖥️ **DOM Elements**
- `input`: Captures the user’s typed input.
- `timeBox`: Displays the countdown timer.
- Various elements track WPM, mistakes, accuracy, and correct words.

### 📜 **Text Loader**
- `DOMContentLoaded` event ensures the text loads when the page is ready.
- The text is split into words and each word is wrapped in a `<span>` tag.
- The first word is highlighted as active.

### ⌨️ **Typing Function (`myFunction(e)`)**
- 🏁 **Starts the timer** when the first key is pressed.
- ✅ **Compares typed characters** against the expected text.
- 📈 **Counts correct characters.**
- ❌ **Tracks mistakes** and visually marks incorrect words.
- 🔄 **Moves to the next word** when the space bar is pressed.

### ⏳ **Timer (`updateTimer()`)**
- **Starts when typing begins.**
- ⏱️ **Updates the elapsed time** every second.
- 🚨 **Ends the test after 60 seconds** and calls `result()`.

### 🎹 **Keyboard Visualization**
- `qwertyKeys`: Stores keyboard key mappings.
- 🖥️ **Dynamically creates a visual keyboard layout.**
- 🎯 **Highlights pressed keys.**
- 🔊 **Plays an audio effect** on key presses.
- 🔍 **Detects Caps Lock and Shift key states.**

### 📊 **Result Calculation (`result()`)**
- ❌ **Disables input** after time expires.
- 📈 **Calculates words per minute (WPM).**
- 🎯 **Computes accuracy** as a percentage of correct characters.
- 🏆 **Displays results, including correct and incorrect words.**

---

## ⚡ Installation
To run this project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/aam2002/TypingTest.git
   ```
2. Open `index.html` in a browser.

## 🤝 Contributing
Feel free to submit issues or create pull requests for improvements.

## 📜 License
This project is open-source and available under the **MIT License**.

