describe ('Protractor Automation Scripts',function(){
	var forms = require("./registrationobject.js");
	
	forms.getURL();
	
	it('form  automation test', function(){
		
		forms.formclick.click().then (function(){
			browser.sleep(5000);
		})
		
		browser.getAllWindowHandles().then(function(handles){   	
			
		browser.switchTo().window(handles[1]);
			
		browser.getTitle().then(function(gettext){
				
		console.log(gettext + "before switching")	
			
			})			
		});
		
		forms.Entername.sendKeys("Seenu");
		
		forms.Enteremail.sendKeys("seenuchitrarajan@gmail.com");
		
		forms.Clicknextsection.click();
		
		forms.Selectradiobutton.get(1).click();
		
		forms.Clicknextsection.click();
		 
        forms.ClickSubmitbutton.click().then (function(){
			browser.sleep(5000);
			
		});
        
        browser.switchTo().alert().accept().then(function(click){
    		
    		browser.sleep(4000)
    		
    		console.log(click);
    		
    	});  
        
      
    });	
		
});