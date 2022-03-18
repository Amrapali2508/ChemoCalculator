function Calculate_pH() {
    var FieldValueConcentration = document.getElementById("Concentration").value;
    var FieldValueAcidityConstant = document.getElementById("AcidityConstant").value;
    
    
    if (isNaN(FieldValueConcentration) | FieldValueConcentration == "" | isNaN(FieldValueAcidityConstant) | FieldValueAcidityConstant == "") {
    var pH_value = document.getElementById("pH_value");
    while(pH_value.firstChild)pH_value.removeChild(pH_value.firstChild)
    var ErrorMessage = document.createTextNode("Incorrect or missing content in one or more fields. Note: The system uses . (dot/full stop) as decimal mark!");
    pH_value.appendChild(ErrorMessage);
    }
    
    
    else if (FieldValueConcentration <= "0" | FieldValueAcidityConstant <= "0") {
    var pH_value = document.getElementById("pH_value");
    while(pH_value.firstChild)pH_value.removeChild(pH_value.firstChild)
    var ErrorMessage = document.createTextNode("Concentrations and dissociation constants cannot be less than or equal to 0!");
    pH_value.appendChild(ErrorMessage);
    }
    
    
    else {
    var pH_value = document.getElementById("pH_value");
    var Discriminant = Math.pow(FieldValueAcidityConstant,2) + 4*FieldValueConcentration;
    if (Discriminant == "0") {
    var AcidConcentration = -0.5*FieldValueAcidityConstant;
    }
    else {
    var AcidConcentration1 = -0.5*FieldValueAcidityConstant + 0.5*Math.sqrt(Discriminant);
    var AcidConcentration2 = -0.5*FieldValueAcidityConstant - 0.5*Math.sqrt(Discriminant);
    }
    
    if (AcidConcentration1 <= "0" | AcidConcentration1 > FieldValueConcentration) {
    var AcidConcentration = AcidConcentration2;
    }
    else {
    var AcidConcentration = AcidConcentration1;
    }
    
    var Result = document.createTextNode("pH = " + -1*Math.log10(AcidConcentration));
    
    while(pH_value.firstChild)pH_value.removeChild(pH_value.firstChild)
    pH_value.appendChild(Result);
    
    }
    
    }