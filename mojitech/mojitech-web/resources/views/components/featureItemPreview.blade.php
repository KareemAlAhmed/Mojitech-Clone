@props(["featureItems"])
<div class="itemPreview" style="margin: 0px 10px;padding:0 425px;margin-bottom: 100px;">
    <div class="itemPreviewContainer" style="display:flex;justify-content:space-between;border-bottom:2px solid rgb(241, 241, 241);margin-bottom: 30px;">
    <!-- <special-offer></special-offer> -->
        <p style="font-weight: bold;color:#666666;padding-bottom: 6px;position:relative;" class="itemPreviewName">{{$slot}}</p>
    </div>
    <div class="items" style="display: flex;">

        @foreach($featureItems as $item)
            <feature-component><a href="/Product"><img src="{{ asset('./storage/thumbnails/feature.jpg') }}"></a></feature-component>
        @endforeach
    </div>
  
</div>
