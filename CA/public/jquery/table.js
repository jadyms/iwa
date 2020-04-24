// Code from https://github.com/mikhail-cct/CA1-In-class-Demo/blob/master/views/jquery/table.js

//Draw the table from XML data
function draw_table(){
    $("#results").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
                select_row();
            }
        });
    };
    $.getJSONuncached("/get/html")
}

//Select a row to be highlighted
function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var category = $(this).prevAll("tr").children("td[colspan='5']").length - 1;
		var activity = $(this).attr("id") - 1;
		delete_row(category, activity);
	})
};

//Delete the selected row
function delete_row(cat, act)
{
	$("#delete").one("click", function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				category: cat,
				activity: act
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

//Calling the function
$(document).ready(function ()
{
	draw_table();
});