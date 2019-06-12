describe ('Protractor Automation Scripts',function(){
	var table = require("./registrationobject.js");
	
	table.getURL();
	
	it('form  automation test', function(){
		
	
		table.Clicktable.click().then (function(){
			browser.sleep(5000);
		});
		
		browser.getAllWindowHandles().then(function(handles){   	
			
		browser.switchTo().window(handles[1]);
				
		browser.getTitle().then(function(gettext){
					
		console.log(gettext + "before switching")	
				
			});			
		});
		
		/*element.all(by.repeater("dataRow in displayedCollection")).each(function(iteam){
			
			iteam.element(by.css("td:nth-child(7)")).getText().then(function(text){
				console.log(text);
			})
		})*/
		
		 table.tableco.each(function(iteam) {
			
		 iteam.element(by.css("td:nth-child(5)")).getText().then(function(text){
				
				console.log(text)				
			});
			
			});
			
		});
			
		});
		 
		 

		
