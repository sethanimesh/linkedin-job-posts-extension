# LinkedIn Job Filter Chrome Extension

## Overview

The LinkedIn Job Filter is a Chrome extension designed to enhance your LinkedIn feed by hiding irrelevant posts and displaying only those related to job openings. It allows professionals to focus on job opportunities by filtering out non-relevant content. The extension includes customizable keywords, negative keyword filtering, and a toggle button to enable or disable the filtering mechanism at your convenience.

## Features

• Job Post Filtering: Hides posts that do not contain job-related keywords.

• Negative Keyword Filtering: Excludes posts that contain specified negative keywords, improving filtering accuracy.

• Toggle Filtering: Easily enable or disable the filtering mechanism using a toggle button in the extension’s popup.

## Installation

### Prerequisites

• Google Chrome Browser: Ensure you have the latest version installed.


• LinkedIn Account: You must be logged into LinkedIn to use the extension effectively.

##Steps

1. Download the Extension Files:
    • Clone or download the repository to your local machine.

2. Open Chrome Extensions Page:
 
    • Open Google Chrome.
   
    • Navigate to chrome://extensions/ in the address bar.
4. Enable Developer Mode:
   
    • Toggle the Developer mode switch on the top-right corner of the page.
5. Load Unpacked Extension:
   
    • Click on Load unpacked.
   
    • Browse to the location where you saved the linkedin-job-filter folder.
   
    • Select the folder and click Open.
6. Verify Installation:
   
    • The extension should now appear in your list of extensions.
   
    • Ensure that it is enabled.

## How It Works

Filtering Logic

1. Job Keywords:
   
    • The extension uses a list of job-related keywords to identify posts about job openings.
   
    • Examples: “hiring”, “job opening”, “apply now”, etc.
2. Negative Keywords:
   
    • To improve accuracy, it also uses negative keywords to exclude posts that might use job-related terms but are not about job openings.
   
    • Examples: “left my job”, “celebrating my promotion”, “my journey at”, etc.

3. DOM Manipulation:
   
    • The extension hides irrelevant posts by setting their display style to none.
   
    • It observes changes in the feed to filter new posts loaded during infinite scrolling.

## Contributing

Contributions are welcome! If you have suggestions for improvements or encounter issues, please open an issue or submit a pull request.
