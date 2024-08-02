# Email Scheduling Service

This is an email scheduling service built with Node.js, Express, Nodemailer, and Cron. The service allows to schedule emails to be sent at a specified time. 
Task-1 (Shipmnts task round)

## Specifications

- Node.js
- npm
## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Shimork04/Shipmnts_task
    cd Shipmnts
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```
    
4. Start the server:

    ```sh
    npm start
    ```

    The server will start on `http://localhost:3000`.
   
## API Endpoints

### 1. Schedule Email

- **URL:** `/schedule-email`
- **Method:** `POST`
- **Description:** Schedules an email to be sent at a specified time.
- **Request Body:**

    ```json
    {
        "email": "recipient@example.com",
        "subject": "Test Email",
        "body": "This is a test email.",
        "scheduleTime": "*/1 * * * *",    #for sending email every minute
        "attachments": [
            {
                "filename": "test.txt",
                "path": "./test.txt"
            }
        ]
    }
    ```
### 2. Get All Scheduled Emails

- **URL:** `/scheduled-emails`
- **Method:** `GET`
- **Description:** Retrieves all scheduled emails.

### 3. Get a Specific Scheduled Email

- **URL:** `/scheduled-emails/:id`
- **Method:** `GET`
- **Description:** Retrieves a specific scheduled email by its ID.

### 4. Delete a Scheduled Email

- **URL:** `/scheduled-emails/:id`
- **Method:** `DELETE`
- **Description:** Deletes a scheduled email by its ID.

## Note

- The `scheduleTime` field should be in cron format. For example, `* * * * *` means the task will run every minute. You can use [crontab.guru](https://crontab.guru/) to generate cron expressions.
  ![image](https://github.com/user-attachments/assets/49b3b60a-1e69-4ffb-bb7a-bbce506c651b)
[](https://dev.to/zt4ff_1/scheduling-tasks-in-nodejs-with-cron-job-3dmk)

- Attachments should be provided as an array of objects with `filename` and `path`.
