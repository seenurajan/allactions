exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub', //direce connect without start server
  
  specs: ['Webtable.js'],
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
  },  

};
