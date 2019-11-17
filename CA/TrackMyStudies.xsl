<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>Track My Studies</title>
                <link href="TrackMyStudies.css" rel="stylesheet" type="text/css" />
                <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
                   <!-- Including Google Font -->
                 <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,700" rel="stylesheet"/>
                <!-- Include the JavaScript code for processing the XML data -->
                <script src="TrackMyStudies.js"></script>
                <script>
			        window.addEventListener("load", function() {
			            document.forms[0].txtHoursAmt.value = calculateHours('menuTable');
			            document.querySelector("#calcHours").addEventListener("click", function() {
			                document.forms[0].txtHoursAmt.value = calculateHours('menuTable');
			            });
			            document.querySelector("#showVeg").addEventListener("click", function() {
			                highlightthemeDue('menuTable', this.checked);
			            });
			        });
			    </script>
            </head>
            <body>
                <h2 class = "h2">Track My Studies</h2>
                <p>Application to track how much time I am investing studying for each subject.</p>
                <table id="menuTable" border="1" class="indent">
                    <thead>
                        <tr>
                            <th colspan="4">My Subjects</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Subject</th>
                            <th>Hours Planned</th>
                            <th>Hours Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/todo/category">
                            <tr>
                                <td colspan="4">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="theme">
                                <tr>
                                    <xsl:attribute name="themeDue">
                                        <xsl:value-of select="boolean(./@themeDue)" />
                                    </xsl:attribute>
                                    <td align="center">
                                        <input name="assignement0" type="checkbox" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="assignement" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="hoursPlanned" />
                                    </td>
                                     <td align="right">
                                        <xsl:value-of select="hoursDone" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
                <form class="indent">
                    <p>
                        <input type="button" name="btnCalcHours" value="Calculate Hours" id="calcHours" />
				Total: 
				<input type="text" name="txtHoursAmt" /><input type="checkbox" name="cbOpts" value="isVeg" id="showVeg" /><label for="showVeg">Assignments Due</label></p>
                </form>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>