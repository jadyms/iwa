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
                <!-- Navbar -->
    <nav id="mainNav" class="navbar navbar-dark navbar-expand-md py-0 fixed-top" >
      <a href="#" class="navbar-brand">TMS</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navbar" >
          <span class="navbar-toggler-icon"></span>
        </button>
       <div class="collapse navbar-collapse" id="navLinks">
        <ul class="navbar-nav">
          <li class="nav-item">
             <a href="index.html" class="nav-link">HOME</a>
          </li>
          <li class="nav-item">
             <a href="" class="nav-link">ABOUT</a>
          </li><li class="nav-item">
             <a href="" class="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
                

      
                 <div class="container sticky-top "> 
                
                <section id="jumbotron" class="jumbotron text-center mt-5">
                <h2>Track My Studies</h2>
                <p>Application to track how much time I am investing studying for each subject.</p>
            
                <form class="form-inline">
                    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Databases</a>
    <a class="dropdown-item" href="#">IWA</a>
  </div>
</div>
  <label class="sr-only" for="inlineFormInputName2">Subject</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Add an activity"/>
   <label class="sr-only" for="inlineFormInputName2">Hours Planned</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Hours Planned"/>

  <label class="sr-only" for="inlineFormInputGroupUsername2">Hours Done</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">Time</div>
    </div>
    
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
    
  </div>

  <!-- In case you dont have done any hours yet
    <div class="form-check mb-2 mr-sm-2">
    <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
    <label class="form-check-label" for="inlineFormCheck">
      No hours done yet
    </label>
  </div> -->

  <button type="submit" class="btn btn-primary mb-2">Add new activity</button>
</form>
            </section>
                </div> 


          
                    <div class="container-table">
                              
                        <table class="table table-bordered table-fixed table-hover table-striped  data-height: 1px">
                   <div id="row">
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
                       </div>
                </table>
                

                    </div>

                    <nav class="navbar fixed-bottom navbar-light bg-light">
  <a class="navbar-brand" href="#">Calculate hours</a>
 <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Planned" aria-label="Search"/>
    <input class="form-control mr-sm-2" type="search" placeholder="Done" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Calculate</button>
  </form>
</nav>
                    

            
               
                <!-- <form class="indent">
                    <p>
                        <input type="button" name="btnCalcHours" value="Calculate Hours" id="calcHours" />
				Total: 
				<input type="text" name="txtHoursAmt" /><input type="checkbox" name="cbOpts" value="isVeg" id="showVeg" /><label for="showVeg">Assignments Due</label></p>
                </form>
                 -->
               
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>