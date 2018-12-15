# OneDrive

## Register New App

In order to upload file to OneDrive, middleware should be able to access target OneDrive Storage, so we need to register Microsoft Application. See how to do so via the link below

- [Official Documentation](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/app-registration) from Microsoft OneDrive Dev Center 
- Below information should be matched for proper usage
  - **Platforms**
    - Select *Web* after clicking *Add Platform*
    - Set *Redirection URL* as below
      - `http://localhost:1111/auth/callback`
  - **Microsoft Graph Permission** ([참고](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/api/driveitem_put_content))
    - *Delegated Permissions* : Add `Files.ReadWrite`
    - *Application Permissions* : Add `Files.ReadWrite.All`

## sample.env

`sample.env` file is a sample of `.env` file, which has options to enable uploading to OneDrive possible. It should be changed to usable as below

1. Open `sample.env` with text editor
2. Change each field in `sample.env` as below
   * `OAUTH_APP_ID` : Application Id of registered app
     * ex) 5ff757db-77fd-443d-a8d0-9618bfa5d892
   * `OAUTH_APP_PASSWORD` : Password of registered app
     * Create password by **Application Secret** --> **Generate New Password** from app's information page
     * ex) yumJSRD40;xgvfPCX412;%$ 
   * `OAUTH_REDIRECT_URI` : In order to com back local server, set the Redirect URL as below
     * `http://localhost:1111/auth/callback`
3. Change the name of `sample.env` to  `.env` 
4. Save it in project's root directory

## Middleware Option

In order to use as a middleware, options should be set as below

```json
{
    "provider": "onedrive",
    "path": "/"
}
```

| Key      | Description                          | Value                                 | Required |
| -------- | ------------------------------------ | ------------------------------------- | -------- |
| provider | Specifies which cloud service to use | "onedrive"                            | True     |
| path     | Path to save the file                | Absolute Path inside OneDrive Storage | True     |

