$(document).ready(function () {
														
$listingtype = $("#usertypelist").val();
$datechange = $("#datetype").val();
if($listingtype != '')
{
		if($listingtype == 0)
		{
			$("#Premiumdiv").hide();
		}
		else
		{
			$("#Premiumdiv").show();
		}
}
if($datechange != '')
{
	if($datechange == 1)
	{
		$("#eventdiv").show();
	}
}
	/* Login form */
  $("#loginForm").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true
        }
      },
      messages: {
        email: {
          required: "Please enter email",
          email: "Please enter valid Email" 
        },
        password: {
          required: "Please provide a password"
        }
      }
  });
		
	/*Advertising*/
	$("#advertisingform").validate({
			rules: {
        username: {
          required: true,
        },
				email:{
					required: true,
					email: true
				},
				name:{
					required: true,
				},
				description:{
					required: true,
				}
			},
			messages: {
        username: {
          required: "Please enter Contact Name" 
        },
				email:{
					required: "Please enter Email address",
					email: "Please enter valid Email"
				},
				name:{
					required: "Please enter Title "
				},
				description:{
					required: "Please enter Description "
				}
      }
	});
	
	/*Add Subscriber*/
	
		$("#addsubscriberform").validate({
			rules: {
        username: {
          required: true,
        },
				password: {
          required: true,
					minlength: 6
        },
				firstname:{
					required: true,
					minlength:3
				},
				lastname:{
					required: true,
					minlength:3
				},
				email:{
					required: true,
				},
				usertype:{
					required: true,
				},
				address:{
					required: true,
				},
				city:{
					required: true,
				},
				selectstate:{
					required: true,
				},
				selectcountry:{
					required: true,
				},
				gender:{
					required: true,
				},
				dob:{
					required: true,
				}
			},
			messages: {
        username: {
          required: "Please enter your user name" 
        },
				email:{
					required: "Please enter email address",
					email: "Please enter valid Email"
				},
				password:{
					required: "Please enter the password ",
					minlength: "Atleast enter minimum 6 characters"
				},
				firstname:{
					required: "Please enter the first name",
				},
				lastname:{
					required: "Please enter the last name",
				},
				usertype:{
					required: "Please select the user type",
				},
				address:{
					required: "Please enter the address",
				},
				city:{
					required: "Please enter the city",
				},
				selectstate:{
					required: "Please select the state",
				},
				selectcountry:{
					required: "Please select the country",
				},
				dob:{
					required: "Please select the dob",
				},
				gender:{
					required: "Please select the gender",
				}
      }
	});
		
/*Edit Subscriber*/		
		$("#editsubscriberform").validate({
			rules: {
        username: {
          required: true,
        },
				firstname:{
					required: true,
					minlength:3
				},
				lastname:{
					required: true,
					minlength:3
				},
				email:{
					required: true,
				},
				usertype:{
					required: true,
				},
				address:{
					required: true,
				},
				city:{
					required: true,
				},
				selectstate:{
					required: true,
				},
				selectcountry:{
					required: true,
				},
				gender:{
					required: true,
				},
				dob:{
					required: true,
				}
			},
			messages: {
        username: {
          required: "Please enter your user name" 
        },
				email:{
					required: "Please enter email address",
					email: "Please enter valid Email"
				},
				firstname:{
					required: "Please enter the first name "
				},
				lastname:{
					required: "Please enter the last name "
				},
				usertype:{
					required: "Please select the user type",
				},
				address:{
					required: "Please enter the address",
				},
				city1:{
					required: "Please enter the city",
				},
				selectstate:{
					required: "Please select the state",
				},
				selectcountry:{
					required: "Please select the country",
				},
				dob:{
					required: "Please select the dob",
				},
				gender:{
					required: "Please select the gender",
				}
      }
	});
});


/* Add Submnitter*/
		$("#submitterform").validate({
			rules: {
        username: {
          required: true,
        },
				password: {
          required: true,
					minlength: 6
        },
				organizationname:{
					required: true,
				},
				streetaddress:{
					required: true,
				},
				businesstype:{
					required: true,
				},
				selectcountry:{
					required: true,
				},
				url:{
					required: true,
				},
				selectstate:{
					required: true,
				},
				email:{
					required: true,
				}
		},
			messages: {
        username: {
          required: "Please enter your user name" 
        },
				email:{
					required: "Please enter email address",
					email: "Please enter valid Email"
				},
				password:{
					required: "Please enter the password ",
					minlength: "Atleast enter minimum 6 characters"
				},
				organizationname:{
					required: "Please enter the organization name",
				},
				streetaddress:{
					required: "Please enter the street address",
				},
				businesstype:{
					required: "Please select the business type",
				},
				selectcountry:{
					required: "Please select the country",
				},
				url:{
					required: "Please enter the website url",
				},
				selectstate:{
					required: "Please select the state",
				}
      }
	});
		

/* Add Submitter End*/
	
/* Edit Submitter Start */
		$("#editsubmitterform").validate({
			rules: {
        username: {
          required: true,
        },
				organizationname:{
					required: true,
				},
				streetaddress:{
					required: true,
				},
				businesstype:{
					required: true,
				},
				selectcountry:{
					required: true,
				},
				url:{
					required: true,
				},
				selectstate:{
					required: true,
				},
				email:{
					required: true,
				}
		},
			messages: {
        username: {
          required: "Please enter your user name" 
        },
				email:{
					required: "Please enter email address",
					email: "Please enter valid Email"
				},
				organizationname:{
					required: "Please enter the organization name",
				},
				streetaddress:{
					required: "Please enter the street address",
				},
				businesstype:{
					required: "Please select the business type",
				},
				selectcountry:{
					required: "Please select the country",
				},
				url:{
					required: "Please enter the website url",
				},
				selectstate:{
					required: "Please select the state",
				}
      }
	});
		
/* Edit Submitter end*/


/*Coupons start*/
$("#coupons").validate({
		rules: {
        	name: {
          		required: true,
        	},
			coupon:{
				required: true,
			},
			type:{
				required: true,
			},
			coupon_type:{
				required: true,
			},
			end_date:{
				required: true,
			}
			},
		messages: {
	        name: {
	          required: "Please enter  Name" 
	        },
			coupon:{
				required: "Please enter Coupons"
			},
			type:{
				required: "Please enter Type"
			},
			coupon_type:{
				required: "Please enter Coupons Type"
			},
			end_date:{

				required: "Please enter Coupon End Date "
			}
	  }
	});
/*Coupons end*/
/*Edit coupon start*/
$("#editcouponform").validate({
		rules: {
        	name: {
          		required: true,
        	},
			coupon:{
				required: true,
			},
			type:{
				required: true,
			},
			coupon_type:{
				required: true,
			},
			end_date:{
				required: true,
			}
			},
		messages: {
	        name: {
	          required: "Please enter  Name" 
	        },
			coupon:{
				required: "Please enter Coupons"
			},
			type:{
				required: "Please enter Type"
			},
			coupon_type:{
				required: "Please enter Coupons Type"
			},
			end_date:{

				required: "Please enter Coupon End Date "
			}
	  }
	});


/*Edit coupon end*/

/*Partners start*/
$("#partners").validate({
		rules: {
        	name: {
          		required: true,
        	},
			email:{
				required: true,
			},
			city:{
				required: true,
			},
			selectstate:{
				required: true,
			},
			selectcountry:{
				required: true,
			},
			url:{
				required: true,
			}
			},
		messages: {
	        name: {
	          required: "Please enter the name" 
	        },
			email:{
				required: "Please enter the email",
				email: "Please enter valid Email"
			},
			city:{
				required: "Please enter the city"
			},
			selectstate:{
				required: "Please select the state"
			},
			selectcountry:{
				required: "Please select the country "
			},
			url:{
				required: 'Please enter the website url',
			}
	   }
	});
/*Partners end*/

$("#editpartners").validate({
		rules: {
        	name: {
          		required: true,
        	},
			email:{
				required: true,
			},
			city:{
				required: true,
			},
			selectstate:{
				required: true,
			},
			selectcountry:{
				required: true,
			},
			url:{
				required: true,
			}
			},
		messages: {
	        name: {
	          required: "Please enter the name" 
	        },
			email:{
				required: "Please enter the email",
				email: "Please enter valid Email"
			},
			city:{
				required: "Please enter the city"
			},
			selectstate:{
				required: "Please select the state"
			},
			selectcountry:{
				required: "Please select the country "
			},
			url:{
				required: 'Please enter the website url',
			}
	   }
	});

/*Submission Add page start*/

$("#submissionadd").validate({
		rules: {
        	useridvalue: {
          		required: true,
        	},
			title:{
				required: true,
			},
			description:{
				required: true,
			}
			},
		messages: {
	        useridvalue: {
	          required: "Please select the Contact Name" 
	        },
			title:{
				required: "Please enter the Title"
			},
			description:{
				required: "Please enter the Description"
			}
	   }
	});
/*Submission Add page end*/

/*Submission Edit page start*/

$("#editsubmission").validate({
		rules: {
        	useridvalue: {
          		required: true,
        	},
			title:{
				required: true,
			},
			description:{
				required: true,
			}
			},
		messages: {
	        useridvalue: {
	          required: "Please select the Contact Name" 
	        },
			title:{
				required: "Please enter the Title"
			},
			description:{
				required: "Please enter the Description"
			}
	   }
	});
/*Submission Edit page end*/

//Date picker
var dateToday = new Date();
	
$('#birthdatepicker').datepicker({
		weekStart: 2,
		startDate: "01/1/1950",
		endDate: dateToday,
});
$('#datepicker').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});
$('#enddatepicker').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});


$('#staereditdatepicker').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});

$('#endeditdatepicker').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});
            




/*datatable*/
$(function () {
	$(document).ready(function() {	
		//Advertisement
		advertisementlisting();
				 
	  	//For Subscriber list
		subscriberlisting();
		
		 //For Subsmitter list
		submitterlisting();

		//For Partner list
		partnerlisting();

		//For coupons list
		couponlisting();

		//For Submission list
		eventsubmission();

		//For Artist List
		artistlisting();
		//For messageing
		//messagelist();

		//Message Type
		$(".messagetype").click(function(){
		  //$('#unread_filter input, #read_filter input, #delete_filter input, #send_filter input').val('');
			//$('input[type=search]').val('');
			messagelist($(this).attr('href'));
		});
		
			messagelist('#tab1default');

	});
});

/*Advertising*/
function deleteRecord(id) {

	var msg ="Are you sure want to delete this record!";  
	jQuery.fancybox({
			'overlayShow'   :   true,   
			'modal': true,
			'showCloseButton' : true,
			'content' : "<div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center\" ><p>"+msg+"</p><br/><button data-token=\"{{ csrf_token() }}\" type=\"button\" class=\"btn btn-info\" id=\"fancyConfirm_ok\" >Ok</button>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-danger\" id=\"fancyConfirm_cancel\">Cancel</button></div>", 
			afterShow : function() {
					$('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
			}     
	});
	$("#fancyConfirm_ok").click(function(){
						var token = $('meta[name="csrf-token"]').attr('content');
				   jQuery.ajax({ 
						type: "POST",
						url:'/deleteadvertising',
						data: "id="+id+"&_token="+token, 
						success: function (responsevalue) {
							if(responsevalue==1)
							{
								advertisementlisting();
							}
							else
							{
								
							}
							$("#delsuccess-alert").addClass("alert alert-success").html('Successfully delete record!..').fadeIn(2000).fadeOut(5000);
							//return false;
						  jQuery.fancybox.close();
					}
				});																		 
		 });
	$("#fancyConfirm_cancel").click(function(){
			jQuery.fancybox.close();																	 
	});																		 
	return false;				
}

function changestatus(id,status)
{
	var token = $('meta[name="csrf-token"]').attr('content');
	$.ajax({
		type: "POST",
		url: '/ajaxupdatestatus/'+id,
		data:'status='+status+"&_token="+token,
		dataType: 'text',
		success: function (responsevalue) {
			if(responsevalue==1)
			{
				advertisementlisting();
			}
			else
			{
				
			}
			$("#success-alert").addClass("alert alert-success").html('Successfully status changed!..').fadeIn(2000).fadeOut(5000);
			return false;    
			jQuery.fancybox.close();
			
		}
	});
}
/* For Advertisement Listing*/
function advertisementlisting()
{
	var oTable = $('#advertisement').dataTable({
											"fnCreatedRow": function( nRow, aData, iDataIndex ) {
														$(nRow).attr('id', aData[0]);
												},
										"bProcessing": true,
										"bServerSide": true,	
										"bDestroy": true,
										"oLanguage": {
													//"sLoadingRecords": "Please wait - loading...",
													"sProcessing": "<img src='../../Admin/img/default.gif'  alt='User Image'>",
													 },
										"processing": true,
										"stateSave": true,
										"sPaginationType": "full_numbers",
										"sAjaxSource": "/ajaxlistadvertising",
										"aaSorting": [ [0,'asc']],
										"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
										"aoColumns": [
												null,
												null,
												null,
												null,
												null,
												null,
												null,
												null,
												{ "bSortable": false,
												}
										 ]
			  			});
				
	 $('#advertisement_filter input').unbind();
	 $('#advertisement_filter input').bind('keyup', function(e) {
			 if(e.keyCode == 13) {
				 oTable.fnFilter(this.value);
			 }
	 });
}

//For subscriber listing
function subscriberlisting()
{
	var lTable =$('#listsubscriber').dataTable({
					"fnCreatedRow": function( nRow, aData, iDataIndex ) {
														$(nRow).attr('id', aData[0]);
												},
					"bProcessing": true,
					"bServerSide": true,
					"paging":false,
					"bDestroy": true,
					"oLanguage": {
												"sLoadingRecords": "Please wait - loading...",
											 },
					"processing": true,
					"stateSave": true,
					"sPaginationType": "full_numbers",
					"sAjaxSource": "/ajaxlistsubscribers",
					"aaSorting": [ [0,'asc']],
					"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
					"aoColumns": [
							null,
							null,
							null,
							null,
							null,
							null,
							null,
							null,
							null,
							{ "bSortable": false,
												}
					 ]
		});
		
	 $('#listsubscriber_filter input').unbind();
	 $('#listsubscriber_filter input').bind('keyup', function(e) {
			 if(e.keyCode == 13) {
				 lTable.fnFilter(this.value);
			 }
	 });
}

/* For Submitter Listing*/

function submitterlisting()
{
		var lTable =$('#listsubmitter').dataTable({
					"fnCreatedRow": function( nRow, aData, iDataIndex ) {
														$(nRow).attr('id', aData[0]);
												},
					"bProcessing": true,
					"bServerSide": true,
					"paging":false,
					"bDestroy": true,
					"oLanguage": {
												"sLoadingRecords": "Please wait - loading...",
											 },
					"processing": true,
					"stateSave": true,
					"sPaginationType": "full_numbers",
					"sAjaxSource": "/ajaxmanagesubmitter",
					"aaSorting": [ [0,'asc']],
					"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
					"aoColumns": [
							null,
							null,
							null,
							null,
							null,
							null,
							{ "bSortable": false,
												}
					 ]
		});
		
	 $('#listsubscriber_filter input').unbind();
	 $('#listsubscriber_filter input').bind('keyup', function(e) {
			 if(e.keyCode == 13) {
				 lTable.fnFilter(this.value);
			 }
	 });
	
}

/* For deleting the susbcriber*/
function deleteuser(id)
{
	var msg ="Are You Sure to Delete this Subscriber!";  
	jQuery.fancybox({
			'overlayShow'   :   true,   
			'modal': true,
			'showCloseButton' : true,
			'content' : "<div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center\" ><p>"+msg+"</p><br/><button data-token=\"{{ csrf_token() }}\" type=\"button\" class=\"btn btn-info\" id=\"fancyConfirm_ok\" >Ok</button>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-danger\" id=\"fancyConfirm_cancel\">Cancel</button></div>", 
			afterShow : function() {
					$('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
			}     
		});
	$("#fancyConfirm_ok").click(function(){
						var token = $('meta[name="csrf-token"]').attr('content');
				   jQuery.ajax({ 
						type: "POST",
						url:'/deletesubscriber',
						data: "id="+id+"&_token="+token, 
						success: function (responsevalue) {
							if(responsevalue==1)
							{
								$(".delmsg").fadeIn(1000).fadeOut(3000);
								subscriberlisting();
							}
							else
							{
								
							}
						 jQuery.fancybox.close();
					}
				});																		 
		 });
	$("#fancyConfirm_cancel").click(function(){
			jQuery.fancybox.close();																	 
	});																		 
	return false;				
	
}

function changesubscriberstatus(id,status)
{
	var token = $('meta[name="csrf-token"]').attr('content');
	$.ajax({
		type: "POST",
		url: '/ajaxsubscriberstatus',
		data:'status='+status+"&_token="+token+"&id="+id,
		dataType: 'text',
		success: function (responsevalue) {
			if(responsevalue==1)
			{
				$(".statuschange").fadeIn(1000).fadeOut(1000);
				subscriberlisting();
			}
			else
			{
				
			}
		 jQuery.fancybox.close();
		}
	});

}

/* For deleting the submitter*/
function deletesubmitter(id)
{

	var msg ="Are You Sure to Delete this Submitter!";
	jQuery.fancybox({
			'overlayShow'   :   true,   
			'modal': true,
			'showCloseButton' : true,
			'content' : "<div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center\" ><p>"+msg+"</p><br/><button data-token=\"{{ csrf_token() }}\" type=\"button\" class=\"btn btn-info\" id=\"fancyConfirm_ok\" >Ok</button>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-danger\" id=\"fancyConfirm_cancel\">Cancel</button></div>", 
			afterShow : function() {
					$('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
			}     
		});

	$("#fancyConfirm_ok").click(function(){
				var token = $('meta[name="csrf-token"]').attr('content');
				   jQuery.ajax({ 
						type: "POST",
						url:'/deletesubmitter',
						data: "id="+id+"&_token="+token, 
						success: function (responsevalue) {
							if(responsevalue==1)
							{
								$(".submittermsg").fadeIn(1000).fadeOut(1000);
								submitterlisting();
							}
							else
							{
								
							}
						 jQuery.fancybox.close();
					}
				});																		 
		 });
	$("#fancyConfirm_cancel").click(function(){
			jQuery.fancybox.close();																	 
	});																		 
	return false;

}

/*Status for submitter*/

function changesubmitterstatus(id,status)
{
	var token = $('meta[name="csrf-token"]').attr('content');
	$.ajax({
		type: "POST",
		url: '/ajaxsubmitterstaus',
		data:'status='+status+"&_token="+token+"&id="+id,
		dataType: 'text',
		success: function (responsevalue) {
			if(responsevalue==1)
			{
				$(".changesubmitter").fadeIn(1000).fadeOut(1000);
				submitterlisting();
			}
			else
			{
				
			}
		 jQuery.fancybox.close();
		}
	});
}

/* For Partner listing */
/* For Submitter Listing*/

function partnerlisting()
{
		var lTable =$('#partnersubmission').dataTable({
					"fnCreatedRow": function( nRow, aData, iDataIndex ) {
														$(nRow).attr('id', aData[0]);
												},
					"bProcessing": true,
					"bServerSide": true,
					"paging":false,
					"bDestroy": true,
					"oLanguage": {
												"sLoadingRecords": "Please wait - loading...",
											 },
					"processing": true,
					"stateSave": true,
					"sPaginationType": "full_numbers",
					"sAjaxSource": "/ajaxmanagepartner",
					"aaSorting": [ [0,'asc']],
					"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
					"aoColumns": [
							null,
							null,
							null,
							null,
							null,
							null,
							{ "bSortable": false,
												}
					 ]
		});
		
	 $('#listsubscriber_filter input').unbind();
	 $('#listsubscriber_filter input').bind('keyup', function(e) {
			 if(e.keyCode == 13) {
				 lTable.fnFilter(this.value);
			 }
	 });
	 
	 

	
}

/* For deleting the partner*/

function deletepartnerlisting(id)
{

	var msg ="Are You Sure to Delete this Partner!";
	jQuery.fancybox({
			'overlayShow'   :   true,   
			'modal': true,
			'showCloseButton' : true,
			'content' : "<div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center\" ><p>"+msg+"</p><br/><button data-token=\"{{ csrf_token() }}\" type=\"button\" class=\"btn btn-info\" id=\"fancyConfirm_ok\" >Ok</button>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-danger\" id=\"fancyConfirm_cancel\">Cancel</button></div>", 
			afterShow : function() {
					$('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
			}     
		});

	$("#fancyConfirm_ok").click(function(){
				var token = $('meta[name="csrf-token"]').attr('content');
				   jQuery.ajax({ 
						type: "POST",
						url:'/deletepartner',
						data: "id="+id+"&_token="+token, 
						success: function (responsevalue) {
							if(responsevalue==1)
							{
								$(".partnermsg").fadeIn(1000).fadeOut(1000);
								partnerlisting();
							}
							else
							{
								
							}
						 jQuery.fancybox.close();
					}
				});																		 
		 });
	$("#fancyConfirm_cancel").click(function(){
			jQuery.fancybox.close();																	 
	});																		 
	return false;

}

/* For changing the status of partner */
 function changepartnerstatus(id,status)
 {
	var token = $('meta[name="csrf-token"]').attr('content');
	$.ajax({
		type: "POST",
		url: '/ajaxpartnerstaus',
		data:'status='+status+"&_token="+token+"&id="+id,
		dataType: 'text',
		success: function (responsevalue) {
			if(responsevalue==1)
			{
				$(".changepartner").fadeIn(1000).fadeOut(1000);
				partnerlisting();
			}
			else
			{
				
			}
		 jQuery.fancybox.close();
		}
	});
	
 }


/*coupons */
function couponlisting()
{
	var oTable = $('#couponsmanage').dataTable({
					"fnCreatedRow": function( nRow, aData, iDataIndex ) {
								$(nRow).attr('id', aData[0]);
						},
				"bProcessing": true,
				"bServerSide": true,	
				"bDestroy": true,
				"oLanguage": {
						"sLoadingRecords": "Please wait - loading...",
							},
				"processing": true,
				"stateSave": true,
				"sPaginationType": "full_numbers",
				"sAjaxSource": "/ajaxcouponlist",
				"aaSorting": [ [0,'asc']],
				"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
				"aoColumns": [
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						{ "bSortable": false,
												}
				 ]
			});
				
	 $('#advertisement_filter input').unbind();
	 $('#advertisement_filter input').bind('keyup', function(e) {
			 if(e.keyCode == 13) {
				 oTable.fnFilter(this.value);
			 }
	 });
}

/* For changing the status of coupon */
function couponstatus(id,status)
{

	var token = $('meta[name="csrf-token"]').attr('content');
	$.ajax({
		type: "POST",
		url: '/ajaxcouponstaus',
		data:'status='+status+"&_token="+token+"&id="+id,
		dataType: 'text',
		success: function (responsevalue) {
			if(responsevalue==1)
			{
				$(".changecoupons").fadeIn(1000).fadeOut(1000);
				couponlisting();
			}
			else
			{
				
			}
		 jQuery.fancybox.close();
		}
	});
}

/* For deleting the coupons*/

function deletecoupon(id) {

	var msg ="Are You Sure to Delete this Coupons!";
	jQuery.fancybox({
			'overlayShow'   :   true,   
			'modal': true,
			'showCloseButton' : true,
			'content' : "<div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center\" ><p>"+msg+"</p><br/><button data-token=\"{{ csrf_token() }}\" type=\"button\" class=\"btn btn-info\" id=\"fancyConfirm_ok\" >Ok</button>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-danger\" id=\"fancyConfirm_cancel\">Cancel</button></div>", 
			afterShow : function() {
					$('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
			}     
		});

	$("#fancyConfirm_ok").click(function(){
				var token = $('meta[name="csrf-token"]').attr('content');
				   jQuery.ajax({ 
						type: "POST",
						url:'/deletecoupons',
						data: "id="+id+"&_token="+token, 
						success: function (responsevalue) {
							if(responsevalue==1)
							{
								$(".couponmsg").fadeIn(1000).fadeOut(1000);
								couponlisting();
							}
							else
							{
								
							}
						 jQuery.fancybox.close();
					}
				});																		 
		 });
	$("#fancyConfirm_cancel").click(function(){
			jQuery.fancybox.close();																	 
	});																		 
	return false;
}


/*Submission Premium Listing Dates*/

$('#usertypelist').change(function(){
	$('#posting_start_date').val('');
	$('#posting_end_date').val('');
	if($(this).find(':selected').val()=='1')
	{
		$('#Premiumdiv').show();	
	}
	else
	{
		$('#Premiumdiv').hide();
	}

});

/*Submission Date type*/
$('#datetype').change(function(){
	$('#eventstartdate').val('');
	$('#eventenddate').val('');

	if($(this).find(':selected').val()=='1')
	{
		$('#eventdiv').show();
		$('.event').hide();
	}
	else
	{
		$('#eventdiv').hide();
		$('.event').show();

	}
	if($(this).find(':selected').val()=='2')
	{
		$('.event').hide();
		$('#eventdiv').hide();
	}

});	

/*submission page datepicker*/
$('#eventstartdate').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
		
});

$('#eventenddate').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});

$('#postingstart').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});

$('#postingend').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});

$('#listingstart').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});

$('#listingend').datepicker({
		weekStart: 2,
		startDate: dateToday,
		
});



/*$(document).ready(function() {
    $('#eventsubmission').DataTable( {
        "scrollX": true
    } );
} );*/

/*Display Manage Submission */

function eventsubmission()
{
	var oTable = $('#eventsubmission').dataTable({
					"fnCreatedRow": function( nRow, aData, iDataIndex ) {
								$(nRow).attr('id', aData[0]);
						},
				"bProcessing": true,
				"bServerSide": true,
				"scrollX": true,
      			"bDestroy": true,
				"oLanguage": {
						"sLoadingRecords": "Please wait - loading...",
							},
				"processing": true,
				"stateSave": true,
				"sPaginationType": "full_numbers",
				"sAjaxSource": "/ajaxmanagesubmission",
				"aaSorting": [ [0,'asc']],
				"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
				"aoColumns": [
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						{ "bSortable": false,
												}
				 ]
			});
				
	 $('#advertise_filter input').unbind();
	 $('#advertisement_filter input').bind('keyup', function(e) {
			 if(e.keyCode == 13) {
				 oTable.fnFilter(this.value);
			 }
	 });
}

/*Submission Change status*/
function changesubmission(id,status)
{

	var token = $('meta[name="csrf-token"]').attr('content');
	$.ajax({
		type: "POST",
		url: '/ajaxsubmissionstatus',
		data:'status='+status+"&_token="+token+"&id="+id,
		dataType: 'text',
		success: function (responsevalue) {
			if(responsevalue==1)
			{
				$(".changesubmission").fadeIn(1000).fadeOut(1000);
				eventsubmission();
			}
			else
			{
				
			}
		 jQuery.fancybox.close();
		}
	});
}

/*Delete Submission Record*/
function deletesubmission(id) {

	var msg ="Are You Sure to Delete this Submission!";
	jQuery.fancybox({
			'overlayShow'   :   true,   
			'modal': true,
			'showCloseButton' : true,
			'content' : "<div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center\" ><p>"+msg+"</p><br/><button data-token=\"{{ csrf_token() }}\" type=\"button\" class=\"btn btn-info\" id=\"fancyConfirm_ok\" >Ok</button>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-danger\" id=\"fancyConfirm_cancel\">Cancel</button></div>", 
			afterShow : function() {
					$('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
			}     
		});

	$("#fancyConfirm_ok").click(function(){
				var token = $('meta[name="csrf-token"]').attr('content');
				   jQuery.ajax({ 
						type: "POST",
						url:'/deletesubmission',
						data: "id="+id+"&_token="+token, 
						success: function (responsevalue) {
							if(responsevalue==1)
							{
								$(".submissionmsg").fadeIn(1000).fadeOut(1000);
								eventsubmission();
							}
							else
							{
								
							}
						 jQuery.fancybox.close();
					}
				});																		 
		 });
	$("#fancyConfirm_cancel").click(function(){
			jQuery.fancybox.close();																	 
	});																		 
	return false;
}


//Artistlisting
function artistlisting()
{
	var oTable = $('#artistmonth').dataTable({
					"fnCreatedRow": function( nRow, aData, iDataIndex ) {
								$(nRow).attr('id', aData[0]);
						},
				"bProcessing": true,
				"bServerSide": true,	
				"bDestroy": true,
				"processing": true,
				"stateSave": true,
				"sPaginationType": "full_numbers",
				"sAjaxSource": "/ajaxarttist",
				"aaSorting": [ [0,'asc']],
				"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
				"aoColumns": [
						null,
						null,
						null,
						null,
						null,
						null,
						{ "bSortable": false,
												},
						{ "bSortable": false,
												}
				 ]
			});
				
	 $('#advertisement_filter input').unbind();
	 $('#advertisement_filter input').bind('keyup', function(e) {
			 if(e.keyCode == 13) {
				 oTable.fnFilter(this.value);
			 }
	 });
}

// Changestatusartist

function changestatusartist(id,status)
{
	var token = $('meta[name="csrf-token"]').attr('content');
	$.ajax({
		type: "POST",
		url: '/ajaxartiststatus',
		data:'status='+status+"&_token="+token+"&id="+id,
		dataType: 'text',
		success: function (responsevalue) {
			if(responsevalue==1)
			{
				$(".changeartist").fadeIn(1000).fadeOut(1000);
				artistlisting();
			}
			else
			{
				
			}
		 jQuery.fancybox.close();
		}
	});
}

//DeleteartistRecord

function deleteartistRecord(id)
{
	var msg ="Are You Sure to Delete this Artist Details!";
	jQuery.fancybox({
			'overlayShow'   :   true,   
			'modal': true,
			'showCloseButton' : true,
			'content' : "<div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center\" ><p>"+msg+"</p><br/><button data-token=\"{{ csrf_token() }}\" type=\"button\" class=\"btn btn-info\" id=\"fancyConfirm_ok\" >Ok</button>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-danger\" id=\"fancyConfirm_cancel\">Cancel</button></div>", 
			afterShow : function() {
					$('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
			}     
		});

	$("#fancyConfirm_ok").click(function(){
				var token = $('meta[name="csrf-token"]').attr('content');
				   jQuery.ajax({ 
						type: "POST",
						url:'/deleteartist',
						data: "id="+id+"&_token="+token, 
						success: function (responsevalue) {
							if(responsevalue==1)
							{
								$(".artistmsg").fadeIn(1000).fadeOut(1000);
								artistlisting();
							}
							else
							{
								
							}
						 jQuery.fancybox.close();
					}
				});																		 
		 });
	$("#fancyConfirm_cancel").click(function(){
			jQuery.fancybox.close();																	 
	});																		 
	return false;
}

//Message
function messagelist(ele)
{
	$('input:checkbox').removeAttr('checked');
	var common_var;
	if(ele == '#tab1default')
	{
		common_var= 'unread';

	}else if(ele == '#tab4default')
	{
		common_var= 'messaging';

	}
	else if(ele == '#tab2default')
	{
		common_var= 'read';
	}
	else if(ele == '#tab3default')
	{
		common_var= 'delete';
	}
	var oTable = $('#'+common_var).dataTable({
					"fnCreatedRow": function( nRow, aData, iDataIndex ) {
								$(nRow).attr('id', aData[0]);
						},
				"bProcessing": true,
				"bServerSide": true,	
				"bDestroy": true,
				"processing": true,
				"oLanguage": { "sSearch": "" },
				"stateSave": true,
				"columnDefs": [ {
            "orderable": false,
            "className": 'select-checkbox',
            "targets":   0
        } ],
				"sPaginationType": "full_numbers",
				"sAjaxSource": "/ajaxmessage/?ele="+escape(ele),
				"aaSorting": [ [1,'asc']],
				"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
				"aoColumns": [
						{ "bSortable": false,
												},
						null,
						null,
						null,
						{ "bSortable": false,
												}
				 ]
			});
	   oTable.fnFilter('');
		 
		 var filterinput = '#'+common_var+'_filter input';
		 $(filterinput).unbind();
		 $(filterinput).bind('keyup', function(e) {
				 if(e.keyCode == 13) {
					 oTable.fnFilter(this.value);
				 }
		 });
}
/*Messaging module*/
function selectAll(source,tabname,tabid) {	
		var checckboxName= 'checkbox-table-'+tabid+'';
		checkboxes = document.getElementsByName(checckboxName);
		for(var i in checkboxes)
		checkboxes[i].checked = source.checked;
	
    
    $('.checkboxes').on('click',function(){
        if($('.checkboxes:checked').length == $('.checkboxes').length){
            $('#checkbox-table-all-unread').prop('checked',true);
        }else{
            $('#checkbox-table-all-unread').prop('checked',false);
        }
    });
		
		$('.checkboxes').on('click',function(){
        if($('.checkboxes:checked').length == $('.checkboxes').length){
            $('#checkbox-table-all-read').prop('checked',true);
        }else{
            $('#checkbox-table-all-read').prop('checked',false);
        }
    });
		
		$('.checkboxes').on('click',function(){
        if($('.checkboxes:checked').length == $('.checkboxes').length){
            $('#checkbox-table-all-delete').prop('checked',true);
        }else{
            $('#checkbox-table-all-delete').prop('checked',false);
        }
    });
		
		$('.checkboxes').on('click',function(){
        if($('.checkboxes:checked').length == $('.checkboxes').length){
            $('#checkbox-table-all-send').prop('checked',true);
        }else{
            $('#checkbox-table-all-send').prop('checked',false);
        }
    });
}




function applyaction(tabname,tabid,actiontype)
{
		 /*var searchIDs = $('.checkboxread:checked').map(function(){
				return $(this).val();     
		 });
		 checkedvalue=searchIDs.get();*/
	
	 		var token = $('meta[name="csrf-token"]').attr('content');
			var allVals = [];
			if(tabid=='unread')
			{		
				$("input:checkbox[name=checkbox-table-unread]:checked").each(function () {
            //alert("Id: " + $(this).attr("id") + " Value: " + $(this).val());
						allVals.push($(this).val());
        });
			}
			else if(tabid=='read')
			{
				$("input:checkbox[name=checkbox-table-read]:checked").each(function () {
						allVals.push($(this).val());
        });
			}
			
			else if(tabid=='delete')
			{
				$("input:checkbox[name=checkbox-table-delete]:checked").each(function () {
						allVals.push($(this).val());
        });
			}
			else if(tabid=='send')
			{
				$("input:checkbox[name=checkbox-table-send]:checked").each(function () {
						allVals.push($(this).val());
        });
			}
							
			if(allVals=='')
			{
					jQuery.fancybox({
									'overlayShow'   :   true,
									'modal': true,
									'showCloseButton' : true,
									'content' : "<strong>check atleast one checbox</strong>",
									afterShow : function() {
											$('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
									}     
								});
			 }
			 else
			 {
				  $.ajax({
									type: "POST",
									url: '/changemessagestatus',
									data:'checkedvalue='+allVals+"&tabname="+tabname+"&tabid="+tabid+"&actiontype="+actiontype+"&_token="+token,
									dataType: 'text',
									success: function (responsevalue) {
										if(responsevalue==1)
										{
											//console.log(tabname)
											messagelist(tabname);
											if(tabid == 'unread')
											{
													if(actiontype == 'read')
													{
														$(".readmeg").fadeIn(1000).fadeOut(1000);
													}
													else if(actiontype == 'delete')
													{
															$(".deleteunmeg").fadeIn(1000).fadeOut(1000);
													}
											}
											else if(tabid == 'read')
											{
													if(actiontype == 'unread')
													{
														$(".unreadmeg").fadeIn(1000).fadeOut(1000);
													}
													else if(actiontype == 'delete')
													{
															$(".deleteunmeg").fadeIn(1000).fadeOut(1000);
													}
											}
											else if(tabid == 'delete')
											{
												$(".unreadmeg").fadeIn(1000).fadeOut(1000);
											}
											else if(tabid == 'send')
											{
													$(".deletesend").fadeIn(1000).fadeOut(1000);
											}
										}
									}
					});
			 }
}


$(document).ready(function() {
  $('#messageForm').submit(function() {
		if($("#groupmessage").val() == '')
		{
				$(this).attr('action', "/savemessage");
				 $("#messageForm").submit();
		}
		else if($("#groupmessage").val() != '')
		{
				$(this).attr('action', "/savebulkmessage");
				$("#messageForm").submit();
		}
    return false;
  });
});

