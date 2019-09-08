
function fillForm() {
	
		selectCheckbox('eform_left_panel:flowStep:eform:owner_sign:0');
	fillText('eform_left_panel:flowStep:eform:signed_at_city',"Chicago");
	selectDropdown('eform_left_panel:flowStep:eform:signed_at_state',11);
	fillText('eform_left_panel:flowStep:eform:owner_signed_date','12/12/2015');
	selectCheckbox('eform_left_panel:flowStep:eform:annuitant_sign:0');
	
	selectCheckbox('eform_left_panel:flowStep:eform:check_existing_policy:1');
	selectCheckbox('eform_left_panel:flowStep:eform:check_replacing_policy:1');
	
	selectCheckbox('eform_left_panel:flowStep:eform:agent_sign:0');
	fillText('eform_left_panel:flowStep:eform:agent_signed_date',"12/12/2015");
	fillText('eform_left_panel:flowStep:eform:agent_first_name',"Tara");
	fillText('eform_left_panel:flowStep:eform:agent_email',"test@test.com");
	fillText('eform_left_panel:flowStep:eform:agent_phone_number',"1234567890");
	fillText('eform_left_panel:flowStep:eform:agent_fax_number',"1324657890");
	fillText('eform_left_panel:flowStep:eform:agent_last_name',"Wilson");
	fillText('eform_left_panel:flowStep:eform:agent_FG',"TARAWI");
	fillText('eform_left_panel:flowStep:eform:agent_license',"123");
	selectCheckbox('eform_left_panel:flowStep:eform:fraud_owner_signature:0');
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