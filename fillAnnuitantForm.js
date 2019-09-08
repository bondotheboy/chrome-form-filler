
function fillForm() {
	
selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_title',1);
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_first_name',"Nokola");
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_last_name',"Tesla");
selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_gender',1);
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_ssn',"1231231230");
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_date_of_birth',"05/18/1990");
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_identification_no',"1231233211");
selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_identification_state',15);
selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_identification_type',1);
selectCheckbox('eform_left_panel:flowStep:eform:accordionPanel:joint_annuitant:1');
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