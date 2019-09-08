
function fillForm() {
	
fillText('eform_left_panel:flowStep:eform:owner_first_name_flsuit',"Arindam");
fillText('eform_left_panel:flowStep:eform:owner_DOB_flsuit',"05/18/1990");
fillText('eform_left_panel:flowStep:eform:owner_age_flsuit',26);
fillText('eform_left_panel:flowStep:eform:owner_last_name_flsuit',"Bandyopadhyay");
selectDropdown('eform_left_panel:flowStep:eform:owner_gender_flsuit',2);
selectDropdown('eform_left_panel:flowStep:eform:owner_annuitant_relationship_flsuit',3);

fillText('eform_left_panel:flowStep:eform:entity_flsuit',"Personal");
fillText('eform_left_panel:flowStep:eform:tax_status_flsuit',"Complete");
fillText('eform_left_panel:flowStep:eform:form_ownership_flsuit',"Done");
fillText('eform_left_panel:flowStep:eform:supporting_doc_flsuit',"Test");
selectDropdown('eform_left_panel:flowStep:eform:owner_work_status_flsuit',2);
selectCheckbox('eform_left_panel:flowStep:eform:owner_residence:1');
selectDropdown('eform_left_panel:flowStep:eform:owner_taxrate_flsuit',2);
selectCheckbox('eform_left_panel:flowStep:eform:stock_bonds_flsuit_check:0');
fillText('eform_left_panel:flowStep:eform:stock_bonds_flsuit_years',2);
selectDropdown('eform_left_panel:flowStep:eform:risk_tolerance_flsuit',2);
fillText('eform_left_panel:flowStep:eform:comments_risk_tolerance',"Test");
selectCheckbox('eform_left_panel:flowStep:eform:fin_obj_flsuit:1');
selectCheckbox('eform_left_panel:flowStep:eform:why_purchase_flsuit:0');
selectCheckbox('eform_left_panel:flowStep:eform:owner_existing_annuity_flsuit:1');
selectCheckbox('eform_left_panel:flowStep:eform:owner_existing_life_insurance_flsuit:1');
selectCheckbox('eform_left_panel:flowStep:eform:source_funds_flsuit:0');
selectCheckbox('eform_left_panel:flowStep:eform:prop_annuity_replace_flsuit:1');
selectCheckbox('eform_left_panel:flowStep:eform:owner_sig_flsuit:0');
fillText('eform_left_panel:flowStep:eform:owner_sig_date_flsuit',"05/18/2016");


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