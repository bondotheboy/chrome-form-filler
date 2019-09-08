

function fillForm() {
	
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
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:state',15);
	fillText('eform_left_panel:flowStep:eform:accordionPanel:zip',"11111");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_phone',"1234567890");
	fillText('eform_left_panel:flowStep:eform:accordionPanel:owner_email_address',"test@test.com");
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:contract_state_check',1);
	
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
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_owner',2);
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:owner_Annuitant',2);
	
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
	
	
		//beneficiary
	fillText('eform_left_panel:flowStep:eform:bene_first_name',"Phil");
	fillText('eform_left_panel:flowStep:eform:bene_last_name',"Collin");
	selectDropdown('eform_left_panel:flowStep:eform:bene_relation',10);
	fillText('eform_left_panel:flowStep:eform:date_of_birth',"05/18/1990");
	fillText('eform_left_panel:flowStep:eform:ssn',"123123123");
	fillText('eform_left_panel:flowStep:eform:share_percentage',"100");
	
	//
	
	selectCheckbox('eform_left_panel:flowStep:eform:liquid_assets:0');
	selectCheckbox('eform_left_panel:flowStep:eform:other_sources:0');
	fillText('eform_left_panel:flowStep:eform:liquid_source_amount',100000);
	fillText('eform_left_panel:flowStep:eform:other_source_amount',200000);
	selectDropdown('eform_left_panel:flowStep:eform:annuity_life_exchange',2);
	selectDropdown('eform_left_panel:flowStep:eform:surrender_charge_payment',2);
	selectCheckbox('eform_left_panel:flowStep:eform:owner_signature:0');
	selectCheckbox('eform_left_panel:flowStep:eform:joint_owner_signature:0');
	fillText('eform_left_panel:flowStep:eform:owner_signature_date','12/12/2015');
	fillText('eform_left_panel:flowStep:eform:joint_owner_signature_date','12/12/2015');
	selectCheckbox('eform_left_panel:flowStep:eform:agent_signature:0');
	fillText('eform_left_panel:flowStep:eform:agent_signature_date','12/12/2015');
	fillText('eform_left_panel:flowStep:eform:agent_name','TARAWI');
	fillText('eform_left_panel:flowStep:eform:agent_producer_number','1234567890');
	
	//suit fiancial
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
	
	//existing insurance
		selectDropdown('eform_left_panel:flowStep:eform:existing_policies',2);
	selectDropdown('eform_left_panel:flowStep:eform:replace_policies',2);
	
	//confirmation
		selectCheckbox('eform_left_panel:flowStep:eform:owner_signature_confirmation:0');
	fillText('eform_left_panel:flowStep:eform:owner_signature_date',"05/02/2015");
	selectCheckbox('eform_left_panel:flowStep:eform:agent_signature:0');
	selectCheckbox('eform_left_panel:flowStep:eform:verify_ADV1090:0');
	
	//authorization
	
	selectCheckbox('eform_left_panel:flowStep:eform:owner_sign:0');
	fillText('eform_left_panel:flowStep:eform:signed_at_city',"Chicago");
	selectDropdown('eform_left_panel:flowStep:eform:signed_at_state',15);
	fillText('eform_left_panel:flowStep:eform:owner_signed_date','12/12/2015');
	selectDropdown('eform_left_panel:flowStep:eform:check_existing_policy',1);
	selectDropdown('eform_left_panel:flowStep:eform:check_replacing_policy',1);
	
	selectCheckbox('eform_left_panel:flowStep:eform:agent_sign:0');
	fillText('eform_left_panel:flowStep:eform:agent_signed_date',"12/12/2015");
	fillText('eform_left_panel:flowStep:eform:agent_first_name',"Tara");
	fillText('eform_left_panel:flowStep:eform:agent_email',"test@test.com");
	fillText('eform_left_panel:flowStep:eform:agent_phone_number',"1234567890");
	fillText('eform_left_panel:flowStep:eform:agent_fax_number',"1324657890");
	fillText('eform_left_panel:flowStep:eform:agent_last_name',"Wilson");
	fillText('eform_left_panel:flowStep:eform:agent_FG',"TARAWI");
	
	//annuity details
		selectDropdown('eform_left_panel:flowStep:eform:annuity_purpose',1);
	fillText('eform_left_panel:flowStep:eform:initial_premium',"100000");
	selectDropdown('eform_left_panel:flowStep:eform:premium_type',1);
	fillText('eform_left_panel:flowStep:eform:interest_guarantee_rate',"10");
	fillText('eform_left_panel:flowStep:eform:interest_annuity_year_rate',"10");
	fillText('eform_left_panel:flowStep:eform:annuity_period',"10");
	
	//annuitant
	selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_title',1);
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_first_name',"Nokola");
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_last_name',"Tesla");
selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_gender',1);
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_ssn',"1231231230");
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_date_of_birth',"05/18/1990");
fillText('eform_left_panel:flowStep:eform:accordionPanel:annuitant_identification_no',"1231233211");
selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_identification_state',15);
selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:annuitant_identification_type',1);
selectDropdown('eform_left_panel:flowStep:eform:accordionPanel:joint_annuitant',2);

//suit owner
	fillText('eform_left_panel:flowStep:eform:owner_name',"Arindam");
	fillText('eform_left_panel:flowStep:eform:owner_age',28);
	fillText('eform_left_panel:flowStep:eform:joint_owner_name',"Swapnil");
	fillText('eform_left_panel:flowStep:eform:joint_owner_age',28);
	selectDropdown('eform_left_panel:flowStep:eform:owner_work_status',2);
	selectDropdown('eform_left_panel:flowStep:eform:joint_owner_work_status',1);
	
	selectDropdown('eform_left_panel:flowStep:eform:owner_residence',1);
	selectDropdown('eform_left_panel:flowStep:eform:joint_owner_residence',1);
	selectDropdown('eform_left_panel:flowStep:eform:federal_tax_Rates',1);
	selectCheckbox('eform_left_panel:flowStep:eform:product_list:0');
	selectDropdown('eform_left_panel:flowStep:eform:reverse_mortgage',2);
	selectDropdown('eform_left_panel:flowStep:eform:risk_tolerance',1);
	selectCheckbox('eform_left_panel:flowStep:eform:reason:0');
	selectDropdown('eform_left_panel:flowStep:eform:fgl_purchase_agent_attorney',1);
	fillText('eform_left_panel:flowStep:eform:owner_name',"Swapnil");
	fillText('eform_left_panel:flowStep:eform:owner_age',28);
	fillText('eform_left_panel:flowStep:eform:joint_owner_name',"Swapnil");
	fillText('eform_left_panel:flowStep:eform:joint_owner_age',28);
	selectDropdown('eform_left_panel:flowStep:eform:owner_work_status',1);
	selectDropdown('eform_left_panel:flowStep:eform:joint_owner_work_status',1);
	
	selectDropdown('eform_left_panel:flowStep:eform:owner_residence',1);
	selectDropdown('eform_left_panel:flowStep:eform:joint_owner_residence',1);
	selectDropdown('eform_left_panel:flowStep:eform:federal_tax_Rates',1);
	selectCheckbox('eform_left_panel:flowStep:eform:product_list:0');
	selectDropdown('eform_left_panel:flowStep:eform:reverse_mortgage',1);
	selectDropdown('eform_left_panel:flowStep:eform:risk_tolerance',1);
	selectCheckbox('eform_left_panel:flowStep:eform:reason:0');
	selectDropdown('eform_left_panel:flowStep:eform:fgl_purchase_agent_attorney',2);
	
	//suit important
	selectDropdown('eform_left_panel:flowStep:eform:annuity_distribution',2);
	selectDropdown('eform_left_panel:flowStep:eform:surrender_charges_confirmation',2);
	selectDropdown('eform_left_panel:flowStep:eform:income_after_annuity_purchase',1);
	selectDropdown('eform_left_panel:flowStep:eform:adverse_changes_expenses',2);
	setInterval(window.document.getElementById('navigation_control:flowButtonNext').click(), 2000);
	
	
	
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

