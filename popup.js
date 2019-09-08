window.onload = function () {
	
	var ownerfile="fillOwnerForm.js";
	var authorizationFile="fillAuthorizationForm.js";
	var suitOwner="fillSuitOwnerForm.js";
	var suitFinancial = "fillSuitFinancialForm.js";
	var suitImportant = "fillSuitImportantForm.js";
	var fundSources = "fillSuitFundForm.js";
	var check=document.getElementById("is_fl");
	var product_selector = document.getElementById("product_selector");
	
	check.addEventListener('click', function () {
    {
		document.getElementById('suit_fund').remove();
		ownerfile="fillFloridaOwnerForm.js";
		authorizationFile="fillFloridaAuthorizationForm.js";
		suitOwner="fillFloridaSuitOwner.js";
		suitFinancial="fillFloridaSuitFinancialForm.js";
		suitImportant = "fillFloridaSuitImportantForm.js";
		var d1 = document.getElementById('suit');
	d1.insertAdjacentHTML('beforeend', '<li id="suit_add">Additional Information</li><li id="suit_ack">Signature Acknowledgements</li><li id="suit_supplement">Supplement</li>');
	document.getElementById("suit_supplement").onclick = suitSupplementClickHandler;
	document.getElementById("suit_ack").onclick = suitAcknowledgementClickHandler;
	document.getElementById("suit_add").onclick = suitAdditionalClickHandler;
	}
	
	});
	
	product_selector.addEventListener('change', function(){
		if( product_selector.value == "PP" || product_selector.value == "PE" || product_selector.value == "SI" || product_selector.value == "RP") 
    {
		fundSources = "fillPPFundForm.js";
        var add = document.getElementById('annuity_details');
		add.insertAdjacentHTML('afterend','<li id="crediting_option">Crediting Option</li>');
		document.getElementById("crediting_option").onclick = creditingOptionClickHandler;
    }
	
	if(product_selector.value == "GP")
    {
		fundSources = "fillPPFundForm.js";
        
    }
	
	});
	
	
		
	
	
	 var creditingOptionClickHandler = function crediting_option() {
        chrome.tabs.executeScript(null, {
			
            file: 'fillCreditingOption.js'
        }, function () {});
		
	}
	
	
    document.getElementById("owner").onclick = function owner() {
        chrome.tabs.executeScript(null, {
			
            file: ownerfile
        }, function () {});
		
	}
		
		 document.getElementById("annuitant").onclick = function annuitant() {
        chrome.tabs.executeScript(null, {
            file: "fillAnnuitantForm.js"
        }, function () {});

    }
	
	document.getElementById("beneficiary").onclick = function beneficiary() {
        chrome.tabs.executeScript(null, {
            file: "fillBeneficiaryForm.js"
        }, function () {});

    }
	
	
	document.getElementById("annuity_details").onclick = function annuity_details() {
        chrome.tabs.executeScript(null, {
            file: "fillAnnuityDetailsForm.js"
        }, function () {});

    }
	
		
	
	document.getElementById("authorization").onclick = function authorization() {
        chrome.tabs.executeScript(null, {
            file: authorizationFile
        }, function () {});

    }
    
    document.getElementById("suit_owner").onclick = function suit_owner() {
        chrome.tabs.executeScript(null, {
            file: suitOwner
        }, function () {});

    }
	
	document.getElementById("suit_financial").onclick = function suit_financial() {
        chrome.tabs.executeScript(null, {
            file: suitFinancial
        }, function () {});

    }
	
	document.getElementById("suit_important").onclick = function suit_important() {
        chrome.tabs.executeScript(null, {
            file: suitImportant
        }, function () {});

    }
	
	var suitSupplementClickHandler = function suit_supplement() {
        chrome.tabs.executeScript(null, {
            file: "fillFloridaSuitSupplementForm.js"
        }, function () {});

    }
	
	var suitAcknowledgementClickHandler=function suit_ack(){
		chrome.tabs.executeScript(null, {
            file: "fillFloridaSuitAcknowledgement.js"
        }, function () {});
	}
	
	var suitAdditionalClickHandler=function suit_add(){
		chrome.tabs.executeScript(null, {
            file: "fillFloridaSuitAdditional.js"
        }, function () {});
	}
	
	document.getElementById("suit_fund").onclick = function suit_fund() {
        chrome.tabs.executeScript(null, {
            file: fundSources
        }, function () {});

    }
	
	document.getElementById("1035").onclick = function suit_fund() {
        chrome.tabs.executeScript(null, {
            file: "1035.js"
        }, function () {});

    }
	
	document.getElementById("confirmation").onclick = function confirmation() {
        chrome.tabs.executeScript(null, {
            file: "fillConfirmationForm.js"
        }, function () {});

    }
	
	document.getElementById("automate").onclick = function automate() {
		
        chrome.tabs.executeScript(null, {
            file: "automate.js"
        }, function () {
		chrome.tabs.getSelected(null, function(tab) { 
		document.getElementById("currentEform").innerHTML="Filling " + tab.title + " Eform";  
			setInterval(automate, 7000);
		});
		
		});

    }
	
	
	
	
	
    
   
   
    

}