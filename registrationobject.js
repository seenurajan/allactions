function registration (){
    //registration page   
    this.clickregistration= element(by.xpath("//h2[contains(text(),'Registration')]"));
    this.enterusername= element(by.css("[id='username']"));
    this.enterpassword= element(by.css("[id='password']"));
    this.entersecondusername= element(by.model("model[options.key]"));
    this.Clicklogin= element(by.buttonText("Login"));
    this.Clicklogout= element(by.xpath("/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/p[2]/a[1]"));
    
    //forms
    this.formclick= element(by.xpath("//li[2]//a[1]//figure[1]//img[1]"));
    this.Entername= element(by.name("name"));    
    this.Enteremail= element(by.name("email"));    
    this.Clicknextsection= element(by.linkText("Next Section"));    
    this.Selectradiobutton=  element.all(by.css("input[type='radio']"));    
    this.ClickSubmitbutton= element(by.buttonText("Submit"));
    
    //Checkboxes
    this.Clickcheckbox= element(by.xpath("//h2[contains(text(),'Checkboxes')]"));    
    this.Allcheckboxs= element.all(by.model("prod.included"));
    
    //Banking
    this.ClickBanking= element(by.xpath("//h2[contains(text(),'Banking')]"));    
    this.customerclick= element(by.xpath("//button[contains(text(),'Bank Manager Login')]"));
    
    //WebTable
    this.Clicktable= element(by.xpath("//h2[contains(text(),'WebTables')]"));   
    this.tableco= element.all(by.repeater("dataRow in displayedCollection"));    
    this.emailtext= element(by.css("td:nth-child(7)"));  
    
    	this.getURL = function() {
		browser.get('http://www.way2automation.com/protractor-angularjs-practice-website.html#');
		};
   };
   
module.exports = new registration();