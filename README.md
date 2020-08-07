# RunningHillWordApp
## Thuso Snxw Kharibe
```This project was generated in a cold place```

## Outline
Nodejs, Mongoose and MongoDB based api modeled for an Angular based web application that allows you to dynamically build a sentence by selecting words based on their word types. The types are Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Determiner, Exclamation.

The backend provides all the words that can be selected in the lists. Restful GET calls are used to retrieve the lists of words (all together or by type) and a restful POST call used to submit a new sentence. The submitted sentences are persisted on the backend by a mongoDB and another restful GET is used to retrieve them.

API Documentation included in the `./doc` folder

### To be used with RunninghillWordApp-api 

## Usage

Run `npm start` to start local server. 
Navigate to `http://localhost:3000/words` or `http://localhost:3000/words/:type` to submit GET OR POST requests for words. 
Navigate to `http://localhost:3000/sentences` for requests on the setences DB

## /words endpoints
-get
-post
-get/type

## /sentences endpoints
-get
-post

## Further help

Vist [SaintSnow](https://saintsnow.co.za)