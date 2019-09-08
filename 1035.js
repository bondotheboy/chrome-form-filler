
function fillForm() {
	
fillText('eform_left_panel:flowStep:eform:transfer_current_company',"FGL");
fillText('eform_left_panel:flowStep:eform:transfer_phone',"4412454578");
fillText('eform_left_panel:flowStep:eform:policy_number_exchanged',"Gerber");
fillText('eform_left_panel:flowStep:eform:current_policy_address',"East Street");
fillText('eform_left_panel:flowStep:eform:transfer_city',"Chicago");	
selectDropdown('eform_left_panel:flowStep:eform:transfer_state',4);
fillText('eform_left_panel:flowStep:eform:transfer_zip',"123132123");
fillText('eform_left_panel:flowStep:eform:transfer_owner',"Arindam");
fillText('eform_left_panel:flowStep:eform:transfer_ownerSSN',"123123");
fillText('eform_left_panel:flowStep:eform:transfer_joint_owner',"Swapnil");
fillText('eform_left_panel:flowStep:eform:transfer_joint_ownerSSN',"123321");
selectDropdown('eform_left_panel:flowStep:eform:transfer_exchange',1);
selectCheckbox('eform_left_panel:flowStep:eform:RMD_processed');
selectDropdown('eform_left_panel:flowStep:eform:transfer_account_funds',2);
selectDropdown('eform_left_panel:flowStep:eform:transfer_investment_vehicle',1);
selectDropdown('eform_left_panel:flowStep:eform:transfer_authorization_liquidate',1);
selectDropdown('eform_left_panel:flowStep:eform:transfer_withdraw_maturity',1);
fillText('eform_left_panel:flowStep:eform:transfer_withdraw_maturity_date',"05/18/2015");
selectDropdown('eform_left_panel:flowStep:eform:transfer_transfer_account_type',3);
selectCheckbox('eform_left_panel:flowStep:eform:transfer_witness:0');
selectCheckbox('eform_left_panel:flowStep:eform:transfer_joint_ownersig:0');
selectCheckbox('eform_left_panel:flowStep:eform:transfer_annuitantsig:0');
selectCheckbox('eform_left_panel:flowStep:eform:transfer_ownersig:0');
selectCheckbox('eform_left_panel:flowStep:eform:transfer_joint_cont_annuitantsig:0');
fillText('eform_left_panel:flowStep:eform:transfer_joint_owner_date',"05/18/2015");
fillText('eform_left_panel:flowStep:eform:transfer_signature_guarantee_stamp',"Arindam");
fillText('eform_left_panel:flowStep:eform:transfer_guarantee_stamp_date',"05/18/2015");

		
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