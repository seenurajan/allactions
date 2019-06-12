var Jasmine2HtmlReporter1 = require('protractor-jasmine2-html-reporter');
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub', //direce connect without start server
  
  specs: ['Banking.js'],
  //specs: ['registration.js'], 
  /*multiCapabilities: [{
	  'browserName': 'firefox'
	}, {
	  'browserName': 'firefox'
	}],*/
  
  capabilities:{
  'browserName':'firefox' 
   
  },
  
  onPrepare : function(){
		
		browser.driver.manage().window().maximize();
		browser.waitForAngularEnabled(false);
		
		jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter1({
		        savePath: 'target/screenshots'
		        })
		      );
	
  },  

};
