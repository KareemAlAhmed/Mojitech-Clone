@props(['products'])
<div class="itemPreview " style="margin: 0px 10px;padding:0 425px;margin-bottom: 25px;">
    <div class="itemPreviewContainer" style="display:flex;justify-content:space-between;border-bottom:2px solid rgb(241, 241, 241);margin-bottom: 30px;">
    <!-- <special-offer></special-offer> -->
        <p style="font-weight: bold;color:#666666;padding-bottom: 6px;position:relative;" class="itemPreviewName">{{$slot}}</p>
        <a href="#" style="text-decoration: none;font-weight:bold;" class="browser hover:text-gray-900">Browse All
        <i class="arrow right" style="  border: solid ;border-width: 0 3px 3px 0;display: inline-block;padding: 3px;  transform: rotate(-45deg);-webkit-transform: rotate(-45deg);"></i></a>
    </div>
        
<?php 
$result=[];
foreach($products as $product){
    array_push($result,$product);
}
$name=request('search')
?>


    <item-component
    product="{{$name}}"></item-component>

</div>
