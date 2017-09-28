
Feature('sms');

const phoneNumber = process.argv[4];
const message = process.argv[5];

if(!phoneNumber) {
	console.log("Please enter a phone number");
	process.exit();
}

if(isNaN(phoneNumber.replace(/ /g,''))) {
	console.log("Please enter a valid phone number.");
	process.exit();
}

if(!message) {
	console.log("Please enter your message");
	process.exit();
}

if(message.length > 304) {
	console.log("Message cannot be greater than 304 characters");
	process.exit();
}

Scenario('Send Sms', (I) => {
	I.amOnPage('/');
	I.fillField('Username', 'email@gmail.com');// make this fetable?
	I.fillField('Password', 'P@ssword');// make this fetchable? ssh?
	I.click('#loginImage');
	I.wait(5);
	I.amOnPage('http://www.meet.net.np/meet/sms/sms');
	I.wait(5);
	I.click('Send SMS');
	I.wait(5);
	I.fillField('recipient', phoneNumber);// Make this dynamic from command line
	I.fillField('message', message);// Make dynamic and validate character limit.
	I.click('Send Now');
	I.wait('5');
});
