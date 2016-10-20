@extends('Admin.layout')
@section('content')
<section class="content-header">
  <h1>Add Submission<small>Control panel</small> </h1>
  <ol class="breadcrumb">
    <li><a href="/admindashboard"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="active"><a href="/managesubmision">Manage Submission</a></li>
    <li class="active">Add Submission</li>
  </ol>
</section>
<br/>
<div class="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-3"> @if (session('addsuccessadd'))
  <div class="alert alert-danger text-center"> {{ session('addsuccessadd') }} </div>
  @endif </div>
<div class="row">
  <!-- left column -->
  <div class="col-md-12 col-lg-12 col-xm-12 col-sm-12">
    <!-- general form elements -->
    <div class="box box-primary">
      <div class="box-header with-border">
        <h3 class="box-title">Add Submission</h3>
      </div>
      <!-- /.box-header -->
      <!-- form start -->
      <form role="form" method="post" action="{{ url('/savesubmission') }}" enctype="multipart/form-data" name="submission" id="submissionadd">
        <input name="_token" type="hidden" value="{{ csrf_token() }}"/>
        <div class="box-body col-md-8 col-lg-8 col-xm-8 col-sm-8">
          <div class="form-group">
            <label for="businesstype">Listing Type:</label>
          </div>
          <div class="form-group">
            <select class="selectpicker form-control" name="usertype" id="usertypelist">
              <option value="0">Free listing</option>
              <option value="1">Premium Listing</option>
            </select>
          </div>
          <div class="form-group">
            <label for="businesstype">Contact Name:<span class="requiredfiled">*</span></label>
          </div>
          <div class="form-group">
            <select class="selectpicker form-control" name="useridvalue" id="useridvalue">
                <option value=""> Select Contact Name </option>
                @foreach ($submitterdetails as $submitter)
                <option value="{{{$submitter->id}}}">{{{$submitter->name}}}</option>
                @endforeach 
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Title<span class="requiredfiled">*</span></label>
            <input type="text" class="form-control" id="title" name="title" placeholder="Title">
          </div>
          <div class="form-group">
            <label>Description<span class="requiredfiled">*</span></label>
            <textarea class="form-control" rows="3" id="description" name="description" placeholder="Enter ..."></textarea>
          </div>
          <div class="form-group">
            <label for="exampleInputFile">Upload Image </label>
            <input type="file" id="image" name="image" accept="image*">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Total Award Amount</label>
            <input type="text" class="form-control" id="awardamount" name="awardamount" placeholder="Title">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">E-mail</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Title">
          </div>  
          <div class="form-group">
            <label for="exampleInputPassword1">Website</label>
            <input type="url" class="form-control" id="url" name="url" placeholder="Website">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Prospectus Link</label>
            <input type="url" class="form-control" id="prospectuslink" name="prospectuslink" placeholder="Website">
          </div>
           <div class="form-group">
            <label for="businesstype">Locale :</label>
          </div>
          <div class="form-group">
            <select class="selectpicker form-control" name="regionaltype" id="regionaltype">
                <option value=""> Select Type </option>
                @foreach ($regionallist as $regional)
                <option value="{{{$regional->id}}}">{{{$regional->regionalname}}}</option>
                @endforeach 
            </select>
          </div>

          <div class="form-group">
            <label for="businesstype">Is this an online event? :</label>
          </div>
          <div class="form-group">
            <select class="selectpicker form-control" name="eventtype" id="eventtype">
              <option value="0">Yes</option>
              <option value="1">No</option>
            </select>
          </div>

          <div class="form-group">
            <label for="businesstype">Are there any submission fees?:</label>
          </div>
          <div class="form-group">
              <select class="selectpicker form-control" name="feestype" id="feestype">
              <option value="0">Yes</option>
              <option value="1">No</option>
            </select>
          </div>

           <div class="form-group">
            <label for="businesstype">Type:</label>
          </div>
          <div class="form-group">
           <select class="selectpicker form-control" name="categorytype" id="categorytype">
              @foreach ($categorylist as $category)
                <option value="{{{$category->id}}}">{{{$category->categoryname}}}</option>
                @endforeach 
            </select>
          </div>

          <div class="form-group">
            <label>Mediums:</label>
            <div class="checkbox">
              <label><input type="checkbox" name="subcategoryname[]" id="subcategoryname" value="1">Acrylic</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="2">Ceramics</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="3">Crafts</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="4">Digital Media</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="5">Fiber</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="6">Glass, Mosaic</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="7">Graphic Design   </label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="8">Drawing/Illustration</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="9">Jewelry</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="10">Mixed media</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="11">Metalsmithing</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="12">Sculpture</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="13">Oil</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="14">Pastel</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="15">Photography</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="16">Watercolor</label>
              <label><input type="checkbox"  name="subcategoryname[]" id="subcategoryname" value="17">Video/Film</label>
            </div>
          </div>

          <div class="form-group">
            <label for="businesstype">Date Type :</label>
          </div>
          <div class="form-group">f
            <select class="selectpicker form-control" name="datetype" id="datetype">
              <option value="0">Deadline</option>
              <option value="1">Date of Date</option>
              <option value="2">On going</option>
            </select>
          </div>
          <div class="form-group event">
            <label>DeadLine :</label>
            <div class="input-group date">
              <div class="input-group-addon"> <i class="fa fa-calendar"></i> </div>
              <input type="text" class="form-control pull-right" id="datepicker" name="deadline_date" value="">
            </div>
          </div>
          <div class=""  id="eventdiv"  style="display:none">
          <div class="form-group">
            <label>Event Start Date :</label>
            <div class="input-group date">
              <div class="input-group-addon"> <i class="fa fa-calendar"></i> </div>
              <input type="text" class="form-control pull-right" id="eventstartdate" name="eventstartdate" value="">
            </div>
          </div>
          <div class="form-group">
            <label>Event End Dat :</label>
            <div class="input-group date">
              <div class="input-group-addon"> <i class="fa fa-calendar"></i> </div>
              <input type="text" class="form-control pull-right" id="eventenddate" name="eventenddate" value="">
            </div>
          </div>
          </div>
           <div>
           <h4 class="remove"> Publish Dates</h4>
          <div class="form-group">
            <label>Listing Start Date :</label>
            <div class="input-group date">
              <div class="input-group-addon"> <i class="fa fa-calendar"></i> </div>
              <input type="text" class="form-control pull-right" id="listingstart" name="listingstartdate" value="">
            </div>
          </div>

          <div class="form-group">
            <label>Listing End Date  :</label>
            <div class="input-group date">
              <div class="input-group-addon"> <i class="fa fa-calendar"></i> </div>
              <input type="text" class="form-control pull-right" id="listingend" name="listingenddate" value="">
            </div>
          </div>
          </div>
          <div class=""  id="Premiumdiv"  style="display:none">
          <h4 class="remove"> Premium Listing Dates</h4>
          <div class="form-group">
            <label>Premium Listing Start Date:</label>
            <div class="input-group date">
              <div class="input-group-addon"> <i class="fa fa-calendar"></i> </div>
              <input type="text" class="form-control pull-right" id="postingstart" name="posting_start_date" value="">
            </div>
          </div>
          <div class="form-group">
            <label>Premium Listing End Date:</label>
            <div class="input-group date">
              <div class="input-group-addon"> <i class="fa fa-calendar"></i> </div>
              <input type="text" class="form-control pull-right" id="postingend" name="posting_end_date" value="">
            </div>
          </div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div class="box-footer"> </div>
      </form>
      <!-- form end -->
    </div>
    <!-- /.box -->
    <!-- /.box-body -->
  </div>
  <!-- /.box -->
</div>
<!--/.col (right) -->
@endsection