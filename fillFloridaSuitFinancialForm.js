
function fillForm() {
	
	fillText('eform_left_panel:flowStep:eform:approx_annual_house_income_flsuit',"10000");
	fillText('eform_left_panel:flowStep:eform:approx_annual_house_expenses_flsuit',"2000");
	fillText('eform_left_panel:flowStep:eform:annual_disposable_income_flsuit',"8000");
	
	selectCheckbox('eform_left_panel:flowStep:eform:sources_of_income_flsuit:0');
	fillText('eform_left_panel:flowStep:eform:home_value_flsuit',"100000");
	fillText('eform_left_panel:flowStep:eform:other_real_estate_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:business_interest_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:qualified_plans_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:mutual_funds_penalty_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:annuities_insurance_CV_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:other_desc_non_liquid_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:other_value_non_liquid_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:total_non_liquid_flsuit',"100000");
	
	fillText('eform_left_panel:flowStep:eform:cash_equiv_flsuit',"200000");
	fillText('eform_left_panel:flowStep:eform:mutual_funds_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:short_cd_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:bank_savings_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:money_market_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:annuities_insurance_no_penalty_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:other_desc_liquid_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:other_value_liquid_flsuit',"0");
	fillText('eform_left_panel:flowStep:eform:total_liquid_flsuit',"200000");
	
	fillText('eform_left_panel:flowStep:eform:existing_assets_flsuit',"300000");
	fillText('eform_left_panel:flowStep:eform:esiting_liquid_NW_flsuit',"200000");
	fillText('eform_left_panel:flowStep:eform:total_purchase_amount_flsuit',"100000");
	fillText('eform_left_panel:flowStep:eform:remaining_liquid_assets_flsuit',"100000");
	
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