$(document).ready(function(){
	
	$('button.btn_add').click(function(){
		window.location.href = "module_client_registration.php";
	})
	
	
	$('div.portlet_index .index_header .title').text('List of the Clients');
	
	
	var index = [
		{"data_Schedule":"20 Jan 2018 : Session 3 (2.00pm-5.00pm)","data_Attendees":"13","data_Speaker":"2","data_Remarks":"none"},
		{"data_Schedule":"21 Jan 2018 : Session 3 (2.00pm-5.00pm)","data_Attendees":"11","data_Speaker":"1","data_Remarks":"none"}
	]
	
	for (var i = 0; i < index.length; i++) {
		a = index[i];
		index_Schedule = a.data_Schedule;
		index_Attendees = a.data_Attendees;
		index_Speaker = a.data_Speaker;
		index_Remarks = a.data_Remarks;
		
		index_tbody_tr = '<tr><td>'+index_Schedule+'</td><td>'+index_Attendees+'</td><td>'+index_Speaker+'</td><td>'+index_Remarks+'</td><td><button type="button" title="Details" class="btn btn-primary"><i class="fa fa-address-card" aria-hidden="true"></i> Details</button><button type="button" title="Edit" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" title="Delete" class="btn btn-warning" data-toggle="modal" data-target=".btn_delete_popup"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td></tr>';
		
		$('div.portlet_index table tbody').append(index_tbody_tr);
		
	};
	
	
});

