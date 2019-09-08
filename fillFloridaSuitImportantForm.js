
function fillForm() {

	selectDropdown('eform_left_panel:flowStep:eform:annuity_years_flsuit',2);
	selectCheckbox('eform_left_panel:flowStep:eform:annuity_distributions_flsuit:1');
	selectDropdown('eform_left_panel:flowStep:eform:years_fund_access_flsuit',2);
	
	selectCheckbox('eform_left_panel:flowStep:eform:owner_sig2_flsuit:0');
	fillText('eform_left_panel:flowStep:eform:owner_sig2_date_flsuit',"05/18/2016");
	window.document.getElementById('navigation_control:flowButtonNext').click();
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