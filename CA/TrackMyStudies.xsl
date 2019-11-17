<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>Track My Studies</title>
                <link href="/css/TrackMyStudies.css" rel="stylesheet" type="text/css" />
                <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
                   <!-- Including Google Font -->
                 <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,700" rel="stylesheet"/>
                  <!-- Including Bootstrap -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

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
                

      
                 <div class="container sticky-top "> 
                
                <section id="jumbotron" class="jumbotron text-center mt-5">
                <h2>Track My Studies</h2>
                <p>Application to track how much time I am investing studying for each subject.</p>
                </section>
                </div> 


          
                    <div class="container-table">
                              
                        <table class="table table-bordered table-fixed  table-striped">
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
                

                    </div>
                    

            
               
                <form class="indent">
                    <p>
                        <input type="button" name="btnCalcHours" value="Calculate Hours" id="calcHours" />
				Total: 
				<input type="text" name="txtHoursAmt" /><input type="checkbox" name="cbOpts" value="isVeg" id="showVeg" /><label for="showVeg">Assignments Due</label></p>
                </form>
                <div class="container"> 
                     <nav class="navbar fixed-bottom navbar-light bg-light ">
  <a class="navbar-brand" href="#">Fixed bottom</a>
  <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
  </ul>
</nav>

                </div>
               
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>