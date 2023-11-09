# LinkTree-Clone

## Overview:
The Linktree Clone is a simple web application that replicates the functionality of Linktree, allowing users to create a personalized landing page with multiple links to their social media profiles or websites. This documentation provides an overview of the files and their functionalities in the project.

Here Is The Demo Link - https://akhilathuluri.github.io/LinkTree-Clone/

## Files:

1. index.html: This is the main HTML file that contains the structure of the web page. It includes a header section, a container with tiles for each link, and JavaScript script tags for app.js.

2. index.css: This file contains the CSS styles used to define the appearance and layout of the web page. It styles the body, header, share buttons, tiles, image container, and icons.

3. app.js: This JavaScript file provides the interactivity for the web page. It selects the share buttons and adds a click event listener to each button. When a button is clicked, it retrieves the link associated with it and copies it to the clipboard using the Navigator Clipboard API. If the copying is successful, an alert is shown to indicate the successful copy.

## Functionalities:

1. Share Buttons: The share buttons are represented by the "share-button" class for the header button and "tile-share-button" class for the buttons within each tile. Clicking on a share button triggers the copyText() function, which copies the associated link to the clipboard.

2. Copying to Clipboard: The copyText() function is responsible for copying the link to the clipboard using the Navigator Clipboard API. It retrieves the link attribute of the clicked button and calls the writeText() method of the Clipboard API. If the copy operation is successful, an alert is shown to inform the user.

## Usage:
To use the Linktree Clone, you can follow these steps:

1. Set up the HTML, CSS, and JavaScript files in your web server or hosting environment.

2. Customize the HTML content, including the links, image source, and social media profile information within the tiles.

3. Customize the CSS styles in the index.css file to match your desired visual appearance.

4. Save the changes and access the index.html file in a web browser to view the Linktree Clone page.

5. Click on the share buttons to copy the associated links to the clipboard. You will see an alert confirming the successful copy.

**Note**: Ensure that your browser supports the Navigator Clipboard API for the copying functionality to work correctly.

## Conclusion:
The Linktree Clone provides a basic implementation of a link-sharing landing page. It allows users to easily copy links to their social media profiles or websites by clicking on share buttons. The documentation provides an overview of the project files, their functionalities, and instructions for usage. Feel free to modify and enhance the code according to your requirements.


