<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
                     <table id="menuTable" class=" table table-striped table-hover indent">
                            <thead>
                         
                            
                     

                        <tr>
                            <th scope="col">Select</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Hours Planned</th>
                            <th scope="col">Hours Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/todo/category">
                            <tr>
                                <td colspan="4" id="category"> 
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
                

       
    </xsl:template>
</xsl:stylesheet>