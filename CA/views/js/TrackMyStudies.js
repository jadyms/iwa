// returns a number that represents the sum of all the selected menu
// item prices.
function calculateHour(idMenuTable) {
    var fHourTotal = 0; //Planned hours
   // var dHourTotal = 0; //Done Hours
    var i = 0;
    var HourTag = document.querySelectorAll('input');
    for (i = 0; i < HourTag.length; i++) {
        // is this menu item selected? it is if the checkbox is checked
        if (HourTag[i].checked) {
            // get the checkbox' parent table row
            var oTR = getParentTag(HourTag[i], 'TR');
            // retrieve the hours from the Hours Done/Planned column, which is the third/fourth column in the table
            var HourPlanned = oTR.getElementsByTagName('TD')[3];
            //var HourDone = oTR.getElementsByTagName('TD')[4];
            // the first child text node of the column contains the price
            fHourTotal += parseFloat(HourPlanned.firstChild.data);
            //dHourTotal += parseFloat(HourDone.firstChild.data);
        };
    };
    // return the price as a decimal number with 2 decimal places
       //return fHourTotal, dHourTotal;
       return fHourTotal;
};

function highlightVegetarian(idTable, bShowVeg) {
    // if bShowVeg is true, then we're highlighting vegetarian
    //	meals, otherwise we're unhighlighting them.
    var i = 0;
    var oTable = document.getElementById(idTable);
    var oTBODY = oTable.getElementsByTagName('tbody')[0];
    var aTRs = oTBODY.getElementsByTagName('tr');
    // walk through each of the table rows and see if it has a 
    // "vegetarian" attribute on it.
    for (i = 0; i < aTRs.length; i++) {
        if (aTRs[i].getAttribute('vegetarian') == "true") {
            if (bShowVeg) {
                aTRs[i].style.backgroundColor = "lightGreen";
            } else {
                aTRs[i].style.backgroundColor = "";
            };
        };
    };
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