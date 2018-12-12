// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * This is used by several samples to easily provide an oauth2 workflow.
 */

const {google} = require('googleapis');
const http = require('http');
const url = require('url');
const opn = require('opn');
const destroyer = require('server-destroy');
const fs = require('fs');
const path = require('path');

var formidable = require("formidable");

const keyPath = path.join(__dirname, 'oauth2.keys.json');
let keys = {
  redirect_uris: ['http://localhost:3000/oauth2callback'],
};
if (fs.existsSync(keyPath)) {
  const keyFile = require(keyPath);
  keys = keyFile.installed || keyFile.web;
}
const drive = google.drive({
  version: 'v3',
  auth: this.oAuth2Client,
});
const invalidRedirectUri = `The provided keyfile does not define a valid
redirect URI. There must be at least one redirect URI defined, and this sample
assumes it redirects to 'http://localhost:3000/oauth2callback'.  Please edit
your keyfile, and add a 'redirect_uris' section.  For example:
"redirect_uris": [
  "http://localhost:3000/oauth2callback"
]
`;

class SampleClient {
  constructor(options) {
    this._options = options || {scopes: []};

    // validate the redirectUri.  This is a frequent cause of confusion.
    if (!keys.redirect_uris || keys.redirect_uris.length === 0) {
      throw new Error(invalidRedirectUri);
    }
    const redirectUri = keys.redirect_uris[keys.redirect_uris.length - 1];
    const parts = new url.URL(redirectUri);
    if (
      redirectUri.length === 0 ||
      parts.port !== '3000' ||
      parts.hostname !== 'localhost' ||
      parts.pathname !== '/oauth2callback'
    ) {
      throw new Error(invalidRedirectUri);
    }

    // create an oAuth client to authorize the API call
    this.oAuth2Client = new google.auth.OAuth2(
      '247918618511-vvgp082tu11q9i2los3ltq19f73klqbm.apps.googleusercontent.com',
      'oCJvF8UEQMrJtQ55Ko4r__qu',
      redirectUri
    );
  }

  // Open an http server to accept the oauth callback. In this
  // simple example, the only request to our webserver is to
  // /oauth2callback?code=<code>
  async authenticate(scopes) {
    return new Promise((resolve, reject) => {
      // grab the url that will be used for authorization
      this.authorizeUrl = this.oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes.join(' '),
      });
      const server = http
        .createServer(async (req, res) => {
          try {
            if (req.url.indexOf('/oauth2callback') > -1) {
              const qs = new url.URL(req.url, 'http://localhost:3000')
                .searchParams;
              res.writeHead(200, {'content-type': 'text/html'});
              res.end(
                // 'Authentication successful! Please return to the console.'
                '<form action="/upload" enctype="multipart/form-data" method="post">'+
                '<input type="text" name="title"><br>'+
                '<input type="file" name="upload" multiple="multiple"><br>'+
                '<input type="submit" value="Upload">'+
                '</form>'
              );
              if(req.url = '/upload'){
                    var form = new formidable.IncomingForm();
                    var fileName;


                    form.parse(req, function(err, fields, files){

                       // fileName = files.upload.name; //files.upload.path/
                       // gdupload.runSample(fileName);
                        // const res = drive.files.create(
                        //   {
                        //     requestBody: {
                        //       // a requestBody element is required if you want to use multipart
                        //     },
                        //     media: {
                        //       body: fs.createReadStream(files.upload.path/files.upload.name), // 여기에 포미더블 파싱한거 넣기
                        //     },
                        //   },
                        //   {
                        //     // Use the `onUploadProgress` event from Axios to track the
                        //     // number of bytes uploaded to this point.
                        //     onUploadProgress: evt => {
                        //       const progress = (evt.bytesRead / fileSize) * 100;
                        //       readline.clearLine();
                        //       readline.cursorTo(0);
                        //       process.stdout.write(`${Math.round(progress)}% complete`);
                        //     },
                        //   }
                        // );
                    });
              }
              server.listen(3000, function(){
                console.log('connencted');
              });
              // server.destroy();
              const {tokens} = await this.oAuth2Client.getToken(qs.get('code'));
              this.oAuth2Client.credentials = tokens;
              resolve(this.oAuth2Client);
            }
          } catch (e) {
            reject(e);
          }
        })
        .listen(3000, () => {
          // open the browser to the authorize url to start the workflow
          opn(this.authorizeUrl, {wait: false}).then(cp => cp.unref());
        });
      destroyer(server);
    });
  }
}

module.exports = new SampleClient();
