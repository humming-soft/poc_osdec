$(document).ready(function(){
	
	$('button.btn_add').click(function(){
		window.location.href = "module_assessment_module_candidate_registration.php";
	})
	
	
	$('div.portlet_index .index_header .title').text('List of the Assessment');
	
	
	var index = [
		{"index_id":"P1012","index_name":"Ramli Basyir","index_gender":"Male","index_address":"1-1-3 Apartment Meranti Timur,<br> Taman Serani Perdana,<br> 83000 Selayang,<br> Selangor","index_hpno":"018 5547 4112","index_background":"MySQL","index_status":"Level 2","index_score_avg":"12.7"},
		{"index_id":"P1011","index_name":"Hamidon bin Mat Jais","index_gender":"Male","index_address":"2-1-1 Apartment Emerald,<br> Bandar Suria Utama,<br> 83000 Puchong,<br> Selangor","index_hpno":"018 5547 4112","index_background":"MySQL, PHP, Java","index_status":"Level 2","index_score_avg":"17.3"}
	]
	
	for (var i = 0; i < index.length; i++) {
		a = index[i];
		index_data1 = a.index_id;
		index_data2 = a.index_name;
		index_data3 = a.index_gender;
		index_data4 = a.index_address;
		index_data5 = a.index_hpno;
		index_data6 = a.index_background;
		index_data7 = a.index_status;
		index_data8 = a.index_score_avg;
		
		index_tbody_tr = '<tr><td>'+index_data1+'</td><td>'+index_data2+'</td><td>'+index_data4+'<br><br><i class="fa fa-mobile" aria-hidden="true"></i>&nbsp&nbsp&nbsp '+index_data5+'</td><td>'+index_data6+'<br><br><button type="button" title="CV" class="btn btn-default"><i class="fa fa-address-card" aria-hidden="true"></i> CV</button></td><td>'+index_data7+'</td><td>'+index_data8+'</td><td><button type="button" title="Details" class="btn btn-primary"><i class="fa fa-address-card" aria-hidden="true"></i> Details</button><button type="button" title="Edit" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" title="Delete" class="btn btn-warning" data-toggle="modal" data-target=".btn_delete_popup"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td></tr>';
		
		$('div.portlet_index table tbody').append(index_tbody_tr);
		
	};
	
	
});

