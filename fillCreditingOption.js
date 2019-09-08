
function fillForm() {
	
	
	
document.getElementById("eform_left_panel:flowStep:eform:monthly_cap:0").click();


	
	setTimeout(function(){ fillText('eform_left_panel:flowStep:eform:monthly_cap_interest_rate',2);
		window.document.getElementById('navigation_control:flowButtonNext').click();
	}, 2000);
	
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