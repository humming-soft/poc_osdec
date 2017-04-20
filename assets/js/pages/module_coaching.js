$(document).ready(function(){
	
	$('button.btn_add').click(function(){
		window.location.href = "module_coaching_request.php";
	})
	
	
	$('div.portlet_index .index_header .title').text('List of the User');
	
	
	var index = [
		{"ID":"OSDEC1001","Username":"kudinmansor","Name":"Kudin bin Mansor","Agency":"OSDeC"},
		{"ID":"OSDEC1002","Username":"rahmattaib","Name":"Rahmat bin Taib","Agency":"OSDeC"},
		{"ID":"OSDEC1003","Username":"rashid","Name":"Rashid bin Kamarulzaman","Agency":"OSDeC"},
		{"ID":"OSDEC2001","Username":"hamidonali","Name":"Hamidon bin Ali","Agency":"MOE"},
		{"ID":"OSDEC3005","Username":"zulzain","Name":"Zulkifli bin Zain","Agency":"MINDEF"},
		{"ID":"OSDEC4003","Username":"megatatan","Name":"Megat Atan bin Megat Baharom","Agency":"MOF"}
	]
	
	for (var i = 0; i < index.length; i++) {
		a = index[i];
		index_id = a.ID;
		index_username = a.Username;
		index_name = a.Name;
		index_agency = a.Agency;
		
		index_tbody_tr = '<tr><td>'+index_id+'</td><td>'+index_username+'</td><td>'+index_name+'</td><td>'+index_agency+'</td><td><button type="button" title="Details" class="btn btn-primary"><i class="fa fa-address-card" aria-hidden="true"></i> Details</button><button type="button" title="Edit" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" title="Delete" class="btn btn-warning" data-toggle="modal" data-target=".btn_delete_popup"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td></tr>';
		
		$('div.portlet_index table tbody').append(index_tbody_tr);
		
	};
	
	
});

