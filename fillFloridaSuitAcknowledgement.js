
function fillForm() {

selectCheckbox('eform_left_panel:flowStep:eform:aknowledgement4:0');
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