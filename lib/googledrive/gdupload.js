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

const fs = require('fs');
const readline = require('readline');

const {google} = require('googleapis');
const sampleClient = require('./sampleclient');
var formidable = require("formidable");
var express = require("express");
var app = express();

const drive = google.drive({
  version: 'v3',
  auth: sampleClient.oAuth2Client,
});

async function runSample(fileName) {
  const fileSize = fs.statSync(fileName).size;
  const res = await drive.files.create(
    {
      requestBody: {
        // a requestBody element is required if you want to use multipart
      },
      media: {
        body: fs.createReadStream(fileName),
      },
    },
    {
      // Use the `onUploadProgress` event from Axios to track the
      // number of bytes uploaded to this point.
      onUploadProgress: evt => {
        const progress = (evt.bytesRead / fileSize) * 100;
        readline.clearLine();
        readline.cursorTo(0);
        process.stdout.write(`${Math.round(progress)}% complete`);
      },
    }
  );
  console.log(res.data);
  return res.data;
}

function GetFileSizeNameAndType()
        {
        var fi = document.getElementById('file'); // GET THE FILE INPUT AS VARIABLE.

        var totalFileSize = 0;

        // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
        if (fi.files.length > 0)
        {
            // RUN A LOOP TO CHECK EACH SELECTED FILE.
            for (var i = 0; i <= fi.files.length - 1; i++)
            {
                //ACCESS THE SIZE PROPERTY OF THE ITEM OBJECT IN FILES COLLECTION. IN THIS WAY ALSO GET OTHER PROPERTIES LIKE FILENAME AND FILETYPE
                var fsize = fi.files.item(i).size;
                totalFileSize = totalFileSize + fsize;
                document.getElementById('fileInput').innerHTML =
                document.getElementById('fileInput').innerHTML
                +
                '<br /> ' + 'File Name is <b>' + fi.files.item(i).name
                +
                '</b> and Size is <b>' + Math.round((fsize / 1024)) //DEFAULT SIZE IS IN BYTES SO WE DIVIDING BY 1024 TO CONVERT IT IN KB
                +
                '</b> KB and File Type is <b>' + fi.files.item(i).type + "</b>.";
            }
        }
        document.getElementById('divTotalSize').innerHTML = "Total File(s) Size is <b>" + Math.round(totalFileSize / 1024) + "</b> KB";
    }

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  const fileName = process.argv[2];
  const scopes = ['https://www.googleapis.com/auth/drive.file'];

  sampleClient
    .authenticate(scopes)
    // .then(()=>GetFileSizeNameAndType())
    .then(() => runSample("splash.PNG")) // 여기에 포미더블로 받아온 파일 이름 넣어주면 됨.
    .catch(console.error);
}


// export functions for testing purposes
module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};
