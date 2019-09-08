
function fillForm() {
	
	selectCheckbox('eform_left_panel:flowStep:eform:other_product_package:0');
	selectCheckbox('eform_left_panel:flowStep:eform:owner_signature_confirmation:0');
	fillText('eform_left_panel:flowStep:eform:owner_signature_date',"05/02/2015");
	selectCheckbox('eform_left_panel:flowStep:eform:agent_signature:0');
	selectCheckbox('eform_left_panel:flowStep:eform:verify_ADV1090:0');
	selectCheckbox('eform_left_panel:flowStep:eform:verify_ADV1029:0');
	selectCheckbox('eform_left_panel:flowStep:eform:verify_ADV1475:0');
	selectCheckbox('eform_left_panel:flowStep:eform:pe_rider_package:0');
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