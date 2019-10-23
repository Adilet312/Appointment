function fullName(fullname)
{
  return fullname;
}
function description(descript)
{
  return descript;
}
function appointmentDate(date_app)
{

  return date_app;
}
function endingTime(end)
{
  return end;
}
function startingTime(start)
{
  return start;
}

$(document).ready(function()
{

  $("form#inputData").submit(function(event)
  { event.preventDefault();
    var full_name = $("#fullname").val();
    var description_app = $("#description").val();
    var date_app = parseFloat($("#appointmentDate").val());
    var startTime = parseFloat($("#startingTime").val());
    var endTime = parseFloat($("#endingTime").val());
    console.log(full_name);
    var output ="Full name: " +  fullName(full_name)+
                ", Description: "+description(description_app)+
                ", Appointment's date: "+appointmentDate(date_app)+
                ", Appointment start: "+startingTime(startTime)+
                ", Appointment end: "+endingTime(endTime);
    alert("Your application was successfully submited!");
    $("#output").text(output);


  });
});
