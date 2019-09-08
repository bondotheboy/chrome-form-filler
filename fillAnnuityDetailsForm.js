
function fillForm() {
	
	selectDropdown('eform_left_panel:flowStep:eform:annuity_purpose',2);
	fillText('eform_left_panel:flowStep:eform:initial_premium',"100000");
	selectDropdown('eform_left_panel:flowStep:eform:premium_type',1);
	selectDropdown('eform_left_panel:flowStep:eform:interest_guarantee_rate',1);
	fillText('eform_left_panel:flowStep:eform:guarantee_rate',"10");
	fillText('eform_left_panel:flowStep:eform:interest_annuity_year_1_rate',"10");
	selectCheckbox('eform_left_panel:flowStep:eform:optional_rider:0');
	selectCheckbox('eform_left_panel:flowStep:eform:existing_policies:1');
	selectCheckbox('eform_left_panel:flowStep:eform:product_package:0');
	selectCheckbox('eform_left_panel:flowStep:eform:replace_policies:1');
	selectCheckbox('eform_left_panel:flowStep:eform:inherited_ira:0');
	selectCheckbox('eform_left_panel:flowStep:eform:agent_initiated_transfer:0');
	
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