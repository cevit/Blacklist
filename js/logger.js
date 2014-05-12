function Logger() {};

Logger.log = function(output) {
	var log = document.getElementById('log');

	var currentdate = new Date(); 
	var datetimeFormatted = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
	log.innerHTML = log.innerHTML + '<p>' + datetimeFormatted + ' ' + output + '</p>';
};