$(document).ready(function(){
	
	$('button.btn_add').click(function(){
		window.location.href = "module_infrastructure_request.php";
	})
	
	
	$('div.portlet_index .index_header .title').text('List of the Infrastructure');
	
	
	var index = [
		{"client_name":"MOE","room":"Room 421","date":"22 Jul 2017","session":"1400-1700","course":"LINUX"},
		{"client_name":"MOE","room":"Room 421","date":"22 Jul 2017","session":"1400-1700","course":"LINUX"},
		{"client_name":"MOF","room":"Room 153","date":"23 Sep 2017","session":"0900-1200","course":"MySQL"},
		{"client_name":"MOF","room":"Room 153","date":"23 Sep 2017","session":"0900-1200","course":"MySQL"},
		{"client_name":"JKR","room":"Room 200","date":"9 Dec 2017","session":"0900-1200","course":"MySQL"}
	]
	
	for (var i = 0; i < index.length; i++) {
		a = index[i];
		
		index_client_name = a.client_name;
		index_room = a.room;
		index_date = a.date;
		index_session = a.session;
		index_course = a.course;
		
		index_tbody_tr = '<tr><td>'+index_client_name+'</td><td>'+index_room+'</td><td>'+index_date+'</td><td>'+index_session+'</td><td>'+index_course+'</td><td><button type="button" title="Details" class="btn btn-primary"><i class="fa fa-address-card" aria-hidden="true"></i> Details</button><button type="button" title="Edit" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" title="Delete" class="btn btn-warning" data-toggle="modal" data-target=".btn_delete_popup"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td></tr>';
		
		$('div.portlet_index table tbody').append(index_tbody_tr);
		
	};
	
	
});

