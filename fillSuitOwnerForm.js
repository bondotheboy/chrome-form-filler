
function fillForm() {
	
	fillText('eform_left_panel:flowStep:eform:owner_name',"Arindam");
	fillText('eform_left_panel:flowStep:eform:owner_age',28);
	selectDropdown('eform_left_panel:flowStep:eform:owner_work_status',2);
	
	selectDropdown('eform_left_panel:flowStep:eform:owner_residence',1);
	selectDropdown('eform_left_panel:flowStep:eform:joint_owner_residence',1);
	selectDropdown('eform_left_panel:flowStep:eform:federal_tax_Rates',1);
	selectCheckbox('eform_left_panel:flowStep:eform:product_list:0');
	selectCheckbox('eform_left_panel:flowStep:eform:reverse_mortgage:1');
	selectDropdown('eform_left_panel:flowStep:eform:risk_tolerance',1);
	selectCheckbox('eform_left_panel:flowStep:eform:reason:0');
	selectCheckbox('eform_left_panel:flowStep:eform:fgl_purchase_agent_attorney:1');
		
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