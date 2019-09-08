
function fillForm() {
selectCheckbox('eform_left_panel:flowStep:eform:income_source:0');
	fillText('eform_left_panel:flowStep:eform:monthly_income',10000);
	fillText('eform_left_panel:flowStep:eform:monthly_expense',2000);
	fillText('eform_left_panel:flowStep:eform:disposable_income',8000);
	fillText('eform_left_panel:flowStep:eform:cash',200000);
	fillText('eform_left_panel:flowStep:eform:mutual_fund',0);
	fillText('eform_left_panel:flowStep:eform:savings',0);
	fillText('eform_left_panel:flowStep:eform:annuity_with_no_surrender',0);
	fillText('eform_left_panel:flowStep:eform:cd',0);
	fillText('eform_left_panel:flowStep:eform:life_insurance_without_surrender',0);
	fillText('eform_left_panel:flowStep:eform:ira_over',0);
	fillText('eform_left_panel:flowStep:eform:stock_bonds',0);
	fillText('eform_left_panel:flowStep:eform:other_liquid_assets',0);
	fillText('eform_left_panel:flowStep:eform:total_liquid_assets',200000);
	fillText('eform_left_panel:flowStep:eform:home_value',200000);
	fillText('eform_left_panel:flowStep:eform:gold',0);
	fillText('eform_left_panel:flowStep:eform:other_real_estate',0);
	fillText('eform_left_panel:flowStep:eform:annuity_with_surrender',0);
	fillText('eform_left_panel:flowStep:eform:ira_under',0);
	fillText('eform_left_panel:flowStep:eform:life_insurance_with_surrender',0);
	fillText('eform_left_panel:flowStep:eform:classB_mutual_fund',0);
	fillText('eform_left_panel:flowStep:eform:other_non_liquid_assets',0);
	fillText('eform_left_panel:flowStep:eform:total_non_liquid_assets',200000);
	fillText('eform_left_panel:flowStep:eform:total_assets',400000);
	fillText('eform_left_panel:flowStep:eform:total_liabilities',0);
	fillText('eform_left_panel:flowStep:eform:short_term_liabilities',0);
	fillText('eform_left_panel:flowStep:eform:long_term_liabilities',0);
	fillText('eform_left_panel:flowStep:eform:total_net_worth',400000);
	
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