
function fillForm() {
	selectCheckbox('eform_left_panel:flowStep:eform:annuity_distribution:1');
	selectCheckbox('eform_left_panel:flowStep:eform:surrender_charges_confirmation:1');
	selectCheckbox('eform_left_panel:flowStep:eform:income_after_annuity_purchase:0');
	selectCheckbox('eform_left_panel:flowStep:eform:adverse_changes_expenses:1');
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