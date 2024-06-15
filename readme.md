# Type to Arabic Converter

A Chrome extension that converts typed English letters to Arabic when activated.

![](assets/Untitled%20design.gif)

## Description
This extension allows users to type in English letters and automatically converts them to Arabic letters. It works on all text input fields in web pages.

## Letters Mapping
![alt text](<assets/Letters Mapping 1.png>)
![alt text](<assets/Letters Mapping 2.png>)
## Installation
1. Clone this repository or download the ZIP file.
2. Open Chrome and navigate to chrome://extensions/.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension files.

## Usage
- Click on the extension icon to activate or deactivate the converter.
- When activated, typing certain English letters (e.g., 'a', 'b', 't') will automatically convert them to their corresponding Arabic letters.

## Files
- **manifest.json**: Contains the extension’s metadata and permissions.
- **background.js**: Manages the extension’s state and icon updates.
- **content.js**: Contains the logic for converting typed letters to Arabic.
- **icons/**: Directory containing the extension icons.

## Known Issues
### State Sync Across Tabs:

- The extension’s active state is managed individually for each tab. However, the icon color does not update correctly when switching tabs. <br>
For example, if the extension is active in Tab 1 and you switch to Tab 2, the icon should turn black and white to indicate it's inactive, but it might not always do so.

### Uncaught SyntaxError:
- You might encounter the following error in the console:
```
Uncaught SyntaxError: Identifier 'active' has already been declared
```

## Contributing
Feel free to submit pull requests or open issues to improve this extension. Contributions are welcome!