
function fillForm() {

selectCheckbox('eform_left_panel:flowStep:eform:floridaRule162_incomeCoverList:1');
fillText('eform_left_panel:flowStep:eform:floridaRule162_incomeCoverExplain',"Test");
selectCheckbox('eform_left_panel:flowStep:eform:floridaRule162_expenseChangeList:1');
fillText('eform_left_panel:flowStep:eform:floridaRule162_expenseChangeExplain',"Test");
selectCheckbox('eform_left_panel:flowStep:eform:floridaRule162_medicalChangeList:1');
fillText('eform_left_panel:flowStep:eform:floridaRule162_medicalChangeExplain',"Test");
selectCheckbox('eform_left_panel:flowStep:eform:floridaRule162_surrenderPerList:1');
fillText('eform_left_panel:flowStep:eform:floridaRule162_surrenderPerExplain',"Test");
selectCheckbox('eform_left_panel:flowStep:eform:floridaRule162_emergencyFundList:1');
fillText('eform_left_panel:flowStep:eform:floridaRule162_emergencyFundExplain',"Test");

fillText('eform_left_panel:flowStep:eform:annuity_advantages_flsuit',"Test");
fillText('eform_left_panel:flowStep:eform:annuity_disadvantages_flsuit',"Test");
fillText('eform_left_panel:flowStep:eform:annuity_basis_recommend_flsuit',"Test");

selectCheckbox('eform_left_panel:flowStep:eform:agent_sig_flsuit:0');
fillText('eform_left_panel:flowStep:eform:agent_sig_date_flsuit',"05/18/2016");

selectCheckbox('eform_left_panel:flowStep:eform:owner_sig3_flsuit:0');
fillText('eform_left_panel:flowStep:eform:owner_sig3_date_flsuit',"05/18/2016");
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