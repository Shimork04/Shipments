# Email Scheduling Service

This is an email scheduling service built with Node.js, Express, Nodemailer, and Cron. The service allows to schedule emails to be sent at a specified time.

## Specifications

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

    ```sh
    [git clone https://github.com/Shimork04/e.git](https://github.com/Shimork04/Shipments.git)
    cd Shipments
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the server:

    ```sh
    npm start
    ```

    The server will start on `http://localhost:3000`.

## API Endpoints

### 1. Schedule an Email

- **URL:** `/schedule-email`
- **Method:** `POST`
- **Description:** Schedules an email to be sent at a specified time.
- **Request Body:**

    ```json
    {
        "email": "recipient@example.com",
        "subject": "Test Email",
        "message": "This is a test email.",
        "scheduleTime": "* * * * *",
        "attachments": [
            {
                "filename": "test.txt",
                "path": "./test.txt"
            }
        ]
    }
    ```

- **Response:**

    ```json
    {
        "message": "Email scheduled successfully.",
        "id": "unique-id"
    }
    ```

### 2. Get All Scheduled Emails

- **URL:** `/scheduled-emails`
- **Method:** `GET`
- **Description:** Retrieves all scheduled emails.
- **Response:**

    ```json
    [
        {
            "id": "unique-id",
            "email": "recipient@example.com",
            "subject": "Test Email",
            "message": "This is a test email.",
            "scheduleTime": "* * * * *",
            "attachments": [
                {
                    "filename": "test.txt",
                    "path": "./test.txt"
                }
            ]
        }
    ]
    ```

### 3. Get a Specific Scheduled Email

- **URL:** `/scheduled-emails/:id`
- **Method:** `GET`
- **Description:** Retrieves a specific scheduled email by its ID.
- **Response:**

    ```json
    {
        "id": "unique-id",
        "email": "recipient@example.com",
        "subject": "Test Email",
        "message": "This is a test email.",
        "scheduleTime": "* * * * *",
        "attachments": [
            {
                "filename": "test.txt",
                "path": "./test.txt"
            }
        ]
    }
    ```

### 4. Delete a Scheduled Email

- **URL:** `/scheduled-emails/:id`
- **Method:** `DELETE`
- **Description:** Deletes a scheduled email by its ID.
- **Response:**

    ```json
    {
        "message": "Scheduled email canceled successfully."
    }
    ```

## Usage with Postman

1. **Schedule an Email:**

    - Set the request type to `POST`.
    - Enter the URL: `http://localhost:3000/schedule-email`.
    - Enter the JSON payload with the email details and schedule time.

2. **Get All Scheduled Emails:**

    - Set the request type to `GET`.
    - Enter the URL: `http://localhost:3000/scheduled-emails`.

3. **Get a Specific Scheduled Email:**

    - Set the request type to `GET`.
    - Enter the URL: `http://localhost:3000/scheduled-emails/{id}`

4. **Delete a Scheduled Email:**

    - Set the request type to `DELETE`.
    - Enter the URL: `http://localhost:3000/scheduled-emails/{id}` (replace `{id}` with the actual ID of the scheduled email).

## Notes

- The `scheduleTime` field should be in cron format. For example, `* * * * *` means the task will run every minute. You can use [crontab.guru](https://crontab.guru/) to generate cron expressions.
  ![image](https://github.com/user-attachments/assets/49b3b60a-1e69-4ffb-bb7a-bbce506c651b)
[](https://dev.to/zt4ff_1/scheduling-tasks-in-nodejs-with-cron-job-3dmk)

- Attachments should be provided as an array of objects with `filename` and `path`.
