//Code from Mikhail https://ea9d4800-d2de-46f0-b709-3d8b5eb2c357.ws-eu01.gitpod.io/#/workspace/CA1-In-class-Demo

// returns a number that represents the sum of selected activity hours
function calculateHour(idMenuTable) {
    var fHourTotal = 0; //Planned hours
    var dHourTotal = 0; //Done Hours
    var i = 0;
    var HourTag = document.querySelectorAll('input');
    for (i = 0; i < HourTag.length; i++) {
        // is this activity item selected? it is if the checkbox is checked
        if (HourTag[i].checked) {
            // get the checkbox' parent table row
            var oTR = getParentTag(HourTag[i], 'TR');
            // retrieve the hours from the Hours Done/Planned column, which is the third/fourth column in the table
            var HourPlanned = oTR.getElementsByTagName('TD')[3];
            var HourDone = oTR.getElementsByTagName('TD')[4];
            // the first child text node of the column contains the price
            fHourTotal += parseFloat(HourPlanned.firstChild.data);
            dHourTotal += parseFloat(HourDone.firstChild.data);
        };
    };
    // return the hours as a object
   return {fHourTotal, dHourTotal};
 
};

// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)

function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};