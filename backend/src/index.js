const express = require("express");
const bodyParser = require("body-parser");
const http = require("https");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // body-parser
app.use(bodyParser.json()); // body-parser

app.listen(process.env.PORT || 5000);

app.get("/", (req, res) => {
  res.send('API hit successfully. Send request with word in params like "/api/run".');
});

app.get("/api/:word", (req, res) => {
  extract(req.params.word, res);
});


const app_id = "1527fb95";
const app_key = "21091ba0a0924ebb05f4207c4b57ee23";


function extract(word, this_response) {
  const options = {
    host: "od-api.oxforddictionaries.com",
    port: "443",
    path: "/api/v2/entries/en-us/" + word,
    method: "GET",
    headers: {
      'app_id': app_id,
      'app_key': app_key
    }
  };

  let body = "";
  let parsed = {};

    http.get(options, (res) => {
      res.on("data", (d) => {
        body += d;
      });

      res.on("end", () => {
        body = JSON.parse(body)
        try {

          if(body.error)
            throw new Error('no results found')

          parsed.id = body.id;
          parsed.word = body.word;
          parsed.senses = [];
          parsed.synonyms = [];

          const {results} = body;

          if(results)
            for(let i=0; i<results.length; i++) {
              if(results[i].lexicalEntries)
                for(let j=0; j<results[i].lexicalEntries.length; j++) {
                  if(results[i].lexicalEntries[j].entries)
                    for(let k=0; k<results[i].lexicalEntries[j].entries.length; k++) {
                      if(results[i].lexicalEntries[j].entries[k].pronunciations)
                        for(let p=0; p<results[i].lexicalEntries[j].entries[k].pronunciations.length; p++){
                          if(!parsed.pronunciation)
                            try{parsed.pronunciation = results[i].lexicalEntries[j].entries[k].pronunciations[p].audioFile}catch(e){console.log('Pronunciation: ',e.message)}
                        }
                      if(results[i].lexicalEntries[j].entries[k].senses)
                        for(let l=0; l<results[i].lexicalEntries[j].entries[k].senses.length; l++) {
                          let sense = {};
                          sense.category = results[i].lexicalEntries[j].lexicalCategory.text
                          sense.examples = [];
                          try{sense.definition = results[i].lexicalEntries[j].entries[k].senses[l].definitions[0]}catch(e){console.log('Definition: ', e.message)}
                          if(results[i].lexicalEntries[j].entries[k].senses[l].examples)
                            for(let m=0; m<results[i].lexicalEntries[j].entries[k].senses[l].examples.length; m++){
                              try{sense.examples.push(results[i].lexicalEntries[j].entries[k].senses[l].examples[m].text)}catch(e){console.log('Examples: ', e.message)}
                            }
                          parsed.senses.push(sense);
                          if(results[i].lexicalEntries[j].entries[k].senses[l].synonyms)
                            for(let n=0; n<results[i].lexicalEntries[j].entries[k].senses[l].synonyms.length; n++){
                              try{parsed.synonyms.push(results[i].lexicalEntries[j].entries[k].senses[l].synonyms[n].text)}catch(e){'Synonyms: ', console.log(e.message)}
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
          console.log('Overall: ', e.message);
          parsed.error = body.error;
        }

        this_response.json(parsed);
      });
    });
  }