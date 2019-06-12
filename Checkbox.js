describe ('Protractor Automation Scripts',function(){
	var check= require("./registrationobject.js");
	
	check.getURL();
	
	it('check  automation test', function(){
		
		check.Clickcheckbox.click().then (function(){
			browser.sleep(5000);
		})
		
		browser.getAllWindowHandles().then(function(handles){   	
			
		browser.switchTo().window(handles[1]);
			
		browser.getTitle().then(function(gettext){
				
		console.log(gettext + "before switching");	
			
			})			
		});
		
				
		/*check.Allcheckboxs.then(function(btn) {
			
		btn[13].click().then (function(){
			
			browser.sleep(5000);
		})
			
		});*/
		
		
		var foo = check.Allcheckboxs;
		expect(foo.isSelected()).toBe(false);
		foo.click();
		expect(foo.isSelected()).toBe(true);
		
		
		
		
		
		
		
		
		
		/*element.all(by.model('user.checked').each(function(btn) {
     // iterates through each btn
     expect(btn.attr('checked')).toBe('true');
                  });*/
		
		/*var foo = element(by.id('checkboxId'));
		foo.click();*/
      
    });		
	
});


