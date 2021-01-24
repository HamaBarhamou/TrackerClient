const { sendSms } = require("react-native-send-intent");

function envoieSMS(){
  var SendIntentAndroid = require("react-native-send-intent");
  SendIntentAndroid.sendSms("+227 97557852", "SMS du professeur");
  console.log("sms envoyer");
 }
 
export default envoieSMS
 