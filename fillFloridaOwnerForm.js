
function fillForm() {
	
	//Owner Information
	//Owner Information
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:title',1);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_first_name',"Arindam");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_middle_name',"");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_last_name',"Bandyopadhyay");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:owner_gender',1);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_ssn',"111111111");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_date_of_birth',"02/02/1986");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:address1',"Address Line1");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:address2',"Address Line2");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:city',"Chicago");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:state',11);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:zip',"11111");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_phone',"1234567890");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_email_address',"test@test.com");
	selectCheckbox('eform_left_panel:flowStep:eform:accordionPanel:contract_state_check:0');
	
	//Employer Information
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_employer',"Step");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_employer_address1',"Step Address Line1");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_employer_address2',"Step Address Line2");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:employer_city',"Chicago");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:employer_zip',"11111");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:employer_state',15);
	
	//Additional Information
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_relation',1);
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:identification_type',1);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:identification_no',"1234567890");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:identification_state',15);
	selectCheckbox('eform_left_panel:flowStep:eform:accordionPanel:joint_owner:1');
	selectCheckbox('eform_left_panel:flowStep:eform:accordionPanel:owner_Annuitant:0');
	
		
	//Joint Owner Information
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_title',1);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_first_name',"Terry");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_last_name',"John");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_gender',1);	
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_ssn',"111111111");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_DOB',"02/02/1985");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_address1',"address line 1");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_address2',"address line 2");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_state',15);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_city',"Chicago");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_phone',"1234567890");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_zip',"11111");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_email_address',"test@test.com");
	 
	//Joint Owner Employer Information
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_employer',"Step");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_employer_city',"Chicago");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_employer_address1',"address line1");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_employer_state',15);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_owner_employer_address2',"address line 2");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_employer_zip',"11111");	
	 
	//Joint Owner Additional Information
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_annuitant_relation',3);
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_identification_type',5);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_identification_specify',"other");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_identification_no',"11111111111");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_owner_identification_state',15);
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