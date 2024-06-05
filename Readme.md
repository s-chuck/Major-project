# Apipedia



## Introduction

Welcome to **Apipedia**, a centralized platform for accessing a variety of free APIs. Apipedia simplifies the process of finding and using APIs by providing a user-friendly interface. Users can easily click on a button corresponding to a specific dataset, and a link will be copied to their clipboard. This link can then be used directly in fetch statements to interact with the database.

[Watch the Introductory Video](./video/Introductory_video.mp4)

## Features

- **Centralized Platform:** Access a wide range of free APIs from one convenient location.
- **Easy to Use:** Simply click on a button to copy the API link to your clipboard.
- **Diverse Datasets:** Browse through different categories and find the APIs you need.
- **Direct Integration:** Use the copied link in your fetch statements for immediate access to the API.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a web browser installed.
- You have an internet connection.

### Installation

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/s-chuck/Major-project.git
    ```
2. Navigate to the project directory:
    ```for visiting the backend
    cd Backend 
    ```
    ``` for visiting the frontend
    cd Frontend/React_code
    ```
3. Open `index.html` in your browser to view the website.

### Usage

1. Visit the Apipedia website.
2. Browse through the available APIs.
3. Click on the button corresponding to the desired API.
4. The API link is automatically copied to your clipboard.
5. Use the copied link in your fetch statement to interact with the API.

### Example

Here’s how you can use the copied API link in a fetch statement:

```javascript
fetch('your-copied-api-link')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
