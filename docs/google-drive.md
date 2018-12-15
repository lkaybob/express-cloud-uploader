# Google Drive

## Access Token Acquire Method

Access token must be acquired using OAuth2.
Google Drive API [LINK](https://developers.google.com/identity/protocols/OAuth2)

## Access Token Saving File

Rename the obtained JSON file to oauth2.keys, and add the file to the project root.

## Code Operation Process

* Parsing user specified files using formable.
* When the parsed file is handed over to the local server, it accepts the file name as a parameter and uploads it to the drive as it is large by line.
