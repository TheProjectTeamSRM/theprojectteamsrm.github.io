$(function(){

	// shuffler is the DOM element;
	// userText is the textbox

	var shuffler = $("#shuffler")
		userText = $('#userText');

	// Shuffle the contents of shuffler
	shuffler.shuffleLetters();

	// Bind events
	userText.click(function () {

	  userText.val("");

	}).bind('keypress',function(e){

		if(e.keyCode == 13){

			// The return key was pressed

			shuffler.shuffleLetters({
				"text": userText.val()
			});

			userText.val("");
		}

	}).hide();

	// Leave a 4 second pause

	setTimeout(function(){

		// Shuffle the shuffler with custom text
		shuffler.shuffleLetters({
			"text": "The Project Team"
		});

		userText.val("type anything and hit return..").fadeIn();

	},4000);

});
