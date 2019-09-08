
function fillForm() {
selectCheckbox('eform_left_panel:flowStep:eform:liquid_assets:0');
	selectCheckbox('eform_left_panel:flowStep:eform:other_sources:0');
	fillText('eform_left_panel:flowStep:eform:liquid_source_amount',100000);
	fillText('eform_left_panel:flowStep:eform:other_source_amount',200000);
	selectDropdown('eform_left_panel:flowStep:eform:annuity_life_exchange',2);
	selectDropdown('eform_left_panel:flowStep:eform:surrender_charge_payment',2);
	selectCheckbox('eform_left_panel:flowStep:eform:owner_signature:0');
	selectCheckbox('eform_left_panel:flowStep:eform:joint_owner_signature:0');
	fillText('eform_left_panel:flowStep:eform:owner_signature_date','12/12/2015');
	fillText('eform_left_panel:flowStep:eform:joint_owner_signature_date','12/12/2015');
	selectCheckbox('eform_left_panel:flowStep:eform:agent_signature:0');
	fillText('eform_left_panel:flowStep:eform:agent_signature_date','12/12/2015');
	fillText('eform_left_panel:flowStep:eform:agent_name','TARAWI');
	fillText('eform_left_panel:flowStep:eform:agent_producer_number','1234567890');
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