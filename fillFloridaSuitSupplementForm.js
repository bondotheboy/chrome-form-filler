
function fillForm() {

	fillText('eform_left_panel:flowStep:eform:FLSup_date',"05/18/2016");
	selectCheckbox('eform_left_panel:flowStep:eform:FLSup_multiple:0');
	fillText('eform_left_panel:flowStep:eform:FLSup_owner_first_name',"Arindam");
	fillText('eform_left_panel:flowStep:eform:FLSup_owner_last_name',"Bandyopadhyay");
	
	fillText('eform_left_panel:flowStep:eform:FLSup_long_liab',"0");
	fillText('eform_left_panel:flowStep:eform:FLSup_short_liab',"0");
	fillText('eform_left_panel:flowStep:eform:FLSup_total_liab',"0");
	fillText('eform_left_panel:flowStep:eform:FLSup_total_liquid_assets',"200000");
	fillText('eform_left_panel:flowStep:eform:FLSup_annuity_purchase_amount',"100000");
	fillText('eform_left_panel:flowStep:eform:FLSup_from_liquid_assets',"100000");
	fillText('eform_left_panel:flowStep:eform:FLSup_from_non_liquid_assets',"0");
	fillText('eform_left_panel:flowStep:eform:FLSup_remaining_liquid_assets',"100000");
	
	selectCheckbox('eform_left_panel:flowStep:eform:FLSup_reverse_mortgage:1');
	selectCheckbox('eform_left_panel:flowStep:eform:FLSup_FGL_info_provided:1');
	selectCheckbox('eform_left_panel:flowStep:eform:FLSup_penalty_withdraw_funds:1');
	
	fillText('eform_left_panel:flowStep:eform:surrender_company',"Gerber");
	fillText('eform_left_panel:flowStep:eform:FLSup_existing_product',"HFA");
	fillText('eform_left_panel:flowStep:eform:FLSup_existing_purchase_year',"2015");
	fillText('eform_left_panel:flowStep:eform:FLSup_existing_value_prior',"100000");
	fillText('eform_left_panel:flowStep:eform:surrender_amount',"100");
	fillText('eform_left_panel:flowStep:eform:surrender_percent',"1");
	fillText('eform_left_panel:flowStep:eform:mva_amount',"100");
	
	selectCheckbox('eform_left_panel:flowStep:eform:FLSup_source_life_annuity:1');
	selectCheckbox('eform_left_panel:flowStep:eform:FLSup_exchanged_life_annuity:1');
	fillText('eform_left_panel:flowStep:eform:FLSup_replace_explanation',"Test");
	
	fillText('eform_left_panel:flowStep:eform:FLSup_acknowledgements_percent',"1");
	fillText('eform_left_panel:flowStep:eform:FLSup_acknowledgements_date',"2");
	selectCheckbox('eform_left_panel:flowStep:eform:FLSup_owner_sig_agent_state:0');
	fillText('eform_left_panel:flowStep:eform:FLSup_agent_state_date',"05/18/2016");
	
	selectCheckbox('eform_left_panel:flowStep:eform:FLSup_agent_signature_important:0');
	fillText('eform_left_panel:flowStep:eform:FLSup_signature_important_acknowledgements',"05/18/2016");
	fillText('eform_left_panel:flowStep:eform:FLSup_agent_first_name',"Tara");
	fillText('eform_left_panel:flowStep:eform:FLSup_agent_last_name',"Wilson");
	fillText('eform_left_panel:flowStep:eform:FLSup_agent_prod_number',"123");
	
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