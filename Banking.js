describe ('Protractor Automation Scripts',function(){
	var banking= require("./registrationobject.js");
	
	banking.getURL();
	
	it('check  automation test', function(){
		
		banking.ClickBanking.click().then(function(){
			browser.sleep(5000);
		})
		
		browser.getAllWindowHandles().then(function(handles){   	
			
		browser.switchTo().window(handles[1]);
				
		browser.getTitle().then(function(gettext){
					
		console.log(gettext + " before switching")	
				
				});	
			});		
		browser.driver.switchTo().frame(element(by.xpath("//div[2]//iframe[1]")).getWebElement());
		
		browser.switchTo().frame(element(by.xpath("//div[1]//iframe[1]")).getWebElement()).then(function(){
		console.log("switched successfully")
		browser.sleep(5000)	
		 
		})
		banking.customerclick.click();
    });		
	
});


