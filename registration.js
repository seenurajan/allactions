describe ('Protractor Automation Scripts',function(){
	var registration = require("./registrationobject.js");
	registration.getURL();
	it('registration automation test', function(){
		
		registration.clickregistration.click().then (function(){
			browser.sleep(5000);
		})
		
		browser.getAllWindowHandles().then(function(handles){
			
		browser.switchTo().window(handles[1]);
		
		browser.getTitle().then(function(gettext){
			
		console.log(gettext+ "before switching")	
		
		})
		
		registration.enterusername.sendKeys("angular");
		
		registration.enterpassword.sendKeys("password");
		
		registration.entersecondusername.sendKeys("angular")
		
		registration.Clicklogin.click().then (function(){
			
			browser.sleep(5000);
		
        registration.Clicklogout.click().then (function(){
			
			browser.sleep(5000);
        
		})
		
		})	
		
		browser.switchTo().window(handles[0]);
		
		browser.getTitle().then(function(gettext){
			
		console.log(gettext +"after switching")
		
		})
		
		
		})
	});	
		
});