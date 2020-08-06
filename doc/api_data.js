define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\tkhar\\OneDrive\\Documents\\Runninghill\\int\\api\\doc\\main.js",
    "groupTitle": "C:\\Users\\tkhar\\OneDrive\\Documents\\Runninghill\\int\\api\\doc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/sentences",
    "title": "Get all sentences in dictionary",
    "name": "GetSentences",
    "group": "Sentences",
    "version": "0.0.0",
    "filename": "./db/routes/sentences.js",
    "groupTitle": "Sentences"
  },
  {
    "type": "post",
    "url": "/sentences",
    "title": "Add new sentence to dictionary",
    "name": "Postsentences",
    "group": "Sentences",
    "version": "0.0.0",
    "filename": "./db/routes/sentences.js",
    "groupTitle": "Sentences"
  },
  {
    "type": "get",
    "url": "/words/:type",
    "title": "Get all words of specified type in dictionary",
    "name": "GetTypeWords",
    "group": "Words",
    "version": "0.0.0",
    "filename": "./db/routes/words.js",
    "groupTitle": "Words"
  },
  {
    "type": "get",
    "url": "/words",
    "title": "Get all words in dictionary",
    "name": "GetWords",
    "group": "Words",
    "version": "0.0.0",
    "filename": "./db/routes/words.js",
    "groupTitle": "Words"
  },
  {
    "type": "post",
    "url": "/words",
    "title": "Add new word to dictionary",
    "name": "PostWords",
    "group": "Words",
    "version": "0.0.0",
    "filename": "./db/routes/words.js",
    "groupTitle": "Words"
  }
] });
