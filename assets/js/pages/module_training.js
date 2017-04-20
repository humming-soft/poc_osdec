$(document).ready(function(){
	
	$('button.btn_add').click(function(){
		window.location.href = "module_training_attendance.php";
	})
	
	
	$('div.portlet_index .index_header .title').text('List of the Training');
	
	
	var index = [
		{"instructor":"En Faiz","class_loc":"Room 421","session":"1400-1700","date":"22 Jul 2017"},
		{"instructor":"En Faiz","class_loc":"Room 225","session":"1400-1700","date":"22 Jul 2017"},
		{"instructor":"En Pahmi","class_loc":"Room 71","session":"0900-1200","date":"10 Sep 2017"},
		{"instructor":"En Pahmi","class_loc":"Room 192","session":"0900-1200","date":"11 Sep 2017"}
	]
	
	for (var i = 0; i < index.length; i++) {
		a = index[i];
		index_instructor = a.instructor;
		index_class_loc = a.class_loc;
		index_session = a.session;
		index_date = a.date;
		
		index_tbody_tr = '<tr><td>'+index_instructor+'</td><td>'+index_class_loc+'</td><td>'+index_session+'</td><td>'+index_date+'</td><td><button type="button" title="Details" class="btn btn-primary"><i class="fa fa-address-card" aria-hidden="true"></i> Details</button><button type="button" title="Edit" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" title="Delete" class="btn btn-warning" data-toggle="modal" data-target=".btn_delete_popup"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td></tr>';
		
		$('div.portlet_index table tbody').append(index_tbody_tr);
		
	};
	
	
});

