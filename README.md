# MailChimp-API
This is a project that utilizes the MailChimp API to set up a newsletter signup. The user provides their first and last name and email and signup to the newsletter. The code utilizes the API by providing the options JSON object into the request npm method. The options method contains a URL which basically consists of an audience key that MailChimp provides. The header has a authorization which contains the apikey which is also provided by mailchimp and the body attribute takes in all the data provided by the user such as the first and last name and email. If the signup is a success the success page loads up else the failure page loads up.

How to Run: Download all the files and add your mailchimp audienceID and API key into the environment files. Run "npm i" in the folder to install all npm packages and then run "node app.js" to run the application on localhost:3000.


