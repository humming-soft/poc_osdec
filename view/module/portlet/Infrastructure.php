<!DOCTYPE html>
<html>
<head>
	<title>Form</title>

	<!-- bootstrap -->
		<link rel="stylesheet" type="text/css" href="../assets/package/Bootstrap/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="../assets/package/Bootstrap/bootstrap-theme.css">
		<link rel="stylesheet" type="text/css" href="../assets/package/Bootstrap/bootstrap_override.css">
		<script type="text/javascript" src="../assets/package/Bootstrap/bootstrap.js"></script>

</head>
<body>

<div id="dashboard" class="col-md-12">

	
										
										<div class="col-sm-12 col-md-6">
											<div class="row">
												
												<form action="#">

												<br>

												
												<h1 class="well">Infrastructure Request Management Module</h1>

												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="textinput">Client Name:*</label>  
														<div class="col-xs-8 col-sm-8 col-md-10">
															<input id="textinput" name="textinput" placeholder="Insert Client Name here" class="form-control input-md" required="" type="text">
															<span class="help-block"> </span> 
														</div>
												</div>


												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="textinput">Reason For Use:*</label>  
														<div class="col-xs-8 col-sm-8 col-md-10">
															<input id="textinput" name="textinput" placeholder="Insert your REason" class="form-control input-md" required="" type="text">
															<span class="help-block"> </span> 
														</div>
												</div>

												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="course">Instructor Name</label>
													<div class="col-xs-8 col-sm-8 col-md-10">
														<select id="course" name="course" class="input-xlarge">
															<option>Encik Naim</option>
															<option>Encik Nabil</option>
															<option>Encik Faiz</option>
														</select>
														<span class="help-block"> </span>
														<br>
													</div>
												</div>

												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="course">Class Date</label>
													<div class="col-xs-8 col-sm-8 col-md-10">
															<label for="meeting"></label><input id="meeting" type="date" value="2017-01-16"/>
														<span class="help-block"> </span>
														<br>
													</div>
												</div>
												
												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="course">Choose Venue Location</label>
													<div class="col-xs-8 col-sm-8 col-md-10">
														<select id="course" name="course" class="input-xlarge">
															<option>Room 402</option>
															<option>Room 405</option>
															<option>Room 304</option>
														</select>
														<span class="help-block"> </span>
														<br>
													</div>
												</div>


												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="course">Choose session</label>
													<div class="col-xs-8 col-sm-8 col-md-10">
														<select id="course" name="course" class="input-xlarge">
															<option>Morning Session (9:00am-12:00pm)</option>
															<option>Afternoon Session (2:00pm-5:00pm)</option>
														</select>
														<span class="help-block"> </span>
														<br>
													</div>
												</div>

												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="course">Choose Course</label>
													<div class="col-xs-8 col-sm-8 col-md-10">
														<select id="course" name="course" class="input-xlarge">
															<option>LINUX</option>
															<option>Python Programming</option>
															<option>C Programming</option>
															<option>JAVA PROGRAMMING</option>
														</select>
														<span class="help-block"> </span>
														<br>
													</div>
												</div>

												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="textinput">Instructor Email*</label>  
														<div class="col-xs-8 col-sm-8 col-md-10">
															<input id="textinput" name="textinput" placeholder="Insert Instructor Email" class="form-control input-md" required="" type="text">
															<span class="help-block"> </span> 
														</div>
												</div>

  												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="textinput">Ins.Cont.No.*</label>  
														<div class="col-xs-8 col-sm-8 col-md-10">
															<input id="textinput" name="textinput" placeholder="Insert Instructor Contact Number" class="form-control input-md" required="" type="text">
															<span class="help-block"> </span> 
														</div>
												</div>

												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="course">Required Projector?</label>
													<div class="col-xs-8 col-sm-8 col-md-10">
														<select id="course" name="course" class="input-xlarge">
															<option>YES</option>
															
															<option>NO</option>
														</select>
														<span class="help-block"> </span>
														<br>
													</div>
												</div>

												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="course">Expected Student?</label>
													<div class="col-xs-8 col-sm-8 col-md-10">
														<select id="course" name="course" class="input-xlarge">
															<option>1-10 Person</option>					
															<option>11-20 Person</option>
															<option>21-30 Person</option>
														</select>
														<span class="help-block"> </span>
														<br>
													</div>
												</div>

												<div class="form-group">
													<label class="col-xs-4 col-sm-4 col-md-2 control-label" for="textinput">Notes</label> 
													<div class="col-xs-8 col-sm-8 col-md-10"> 
														<textarea placeholder="Enter Notes Here.." rows="3" class="form-control"></textarea>
														<span class="help-block"> </span> 
													</div>
												</div>

												


												<div class="col-md-6">
													<button type="button" class="btn">Cancel</button>
												</div>

												<div class="col-md-6">
													<button type="button" class="btn">Submit</button>
												</div>

												</form>										
											</div>
										</div>

										<div class="col-md-6">
											<div class="row">
												...
											</div>
										</div>


</div>

</body>
</html>


												