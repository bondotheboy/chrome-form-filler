
function fillForm() {
	
	fillText('eform_left_panel:flowStep:eform:bene_first_name',"Phil");
	fillText('eform_left_panel:flowStep:eform:bene_last_name',"Collin");
	selectDropdown('eform_left_panel:flowStep:eform:bene_relation',10);
	fillText('eform_left_panel:flowStep:eform:date_of_birth',"05/18/1990");
	fillText('eform_left_panel:flowStep:eform:ssn',"123123123");
	fillText('eform_left_panel:flowStep:eform:share_percentage',"100");
	
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