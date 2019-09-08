
function fillForm() {
	
	
	
document.getElementById("eform_left_panel:flowStep:eform:fund_source:0").click();


	
	setTimeout(function(){ 
		selectCheckbox('eform_left_panel:flowStep:eform:liquid_assets:0');
		fillText('eform_left_panel:flowStep:eform:liquid_source_amount', 100000);
		selectCheckbox('eform_left_panel:flowStep:eform:annuity_life_exchange:1');
		selectCheckbox('eform_left_panel:flowStep:eform:surrender_charge_payment:1');
		selectCheckbox('eform_left_panel:flowStep:eform:owner_signature:0');
		fillText('eform_left_panel:flowStep:eform:owner_signature_date',"05/05/2015");
		selectCheckbox('eform_left_panel:flowStep:eform:agent_signature:0');
		fillText('eform_left_panel:flowStep:eform:agent_signature_date',"05/05/2016");
		fillText('eform_left_panel:flowStep:eform:agent_name',"TARAWI");
		fillText('eform_left_panel:flowStep:eform:agent_producer_number',123);
		window.document.getElementById('navigation_control:flowButtonNext').click();
	}, 4000);
	
}



function fillText(id,value){
	if(null != window.document.getElementById(id)){
		window.document.getElementById(id).value=value;
	}
}

function selectDropdown(id,optionNo){
	if(null != window.document.getElementById(id)){
		window.document.getElementById(id).options[optionNo].selected=true;
	}	
}

function selectCheckbox(id){
	if(null != window.document.getElementById(id)){
		window.document.getElementById(id).checked=true;
	}
}

chrome.runtime.sendMessage({
    action: "eformFormFill",
    source: fillForm()
});