// This script was used in script.google.com to automatically open a GitHub issue when people entered data into a form. Adapt it to your purposes.

var ghToken = "FILL ME IN";

function runOnFormSubmit(e) {  
  var itemResponse = e.response.getItemResponses()
  var name = itemResponse[0].getResponse()
  var email = e.response.getRespondentEmail()
  var org = itemResponse[3].getResponse()
  var body = `#### Email\n\n${email}\n\n`
  itemResponse.forEach((item, index) => body = body + `#### ${item.getItem().getTitle()}\n\n${item.getResponse()}\n\n`)

  var payload = {
    "title": name + " from " + org,
    "body": body,
    "labels": [
         "organization",
         "virtual event"
     ]
  };

  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "headers": {
      "authorization": "token "+ghToken
    }
  };
  var response = UrlFetchApp.fetch("https://api.github.com/repos/foss-responders/organizations-team/issues", options)
 
  
  // Obtain the unique ID from the issue number.
  var json = response.getContentText();
  var data = JSON.parse(json);
  var uniqueid = data.number;
  
  var message = "Hi " + name + ",\n\n" + "The Foss Responders team have received your request. If you need to speak with us, please always quote your unique ID for this submission, which is " + uniqueid + ".\n\nWe aim to respond to all requests within two weeks - please let us know if you do not hear from us by then.\n\nWe quite often need to request further information to better understand your request.\n\nWe look forward to speaking with you soon.\n\nRegards\n\nFOSS Responders Team.";
  var subject = "Thank you for your FOSS Responders request. Your unique ID: " + uniqueid;
  
  GmailApp.sendEmail(email, subject, message);
}
