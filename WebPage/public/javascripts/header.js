function loadPage(){
   	$( "#result" ).load( "footer.ejs", function() {
	alert( "Load was performed." );
	});
}
