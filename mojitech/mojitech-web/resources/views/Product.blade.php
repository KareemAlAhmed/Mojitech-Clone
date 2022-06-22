<x-layout>
    <?php  $path= asset('storage/thumbnails/AW2521HF.jpg') ?>
    <div class="productOverlay" style="height:50px;padding: 20px 15px;margin:15px 0 50px 0;background-image:url({{$path}}) ;background-repeat: no-repeat;background-position: center;position:relative;">
        <p style="margin:0 425px;color:white;font-size:.8em;z-index: +6;top: 16px;position:absolute;">Home / Plug-ins / {{$product->Small->name}}</p>
        {{-- Home/Big categorie/small category--}}
        <div class="overlay" style="width: 100%;top: 0;left: 0;height: 100%;background-color: rgba(0,0,0,.25);position: absolute;"></div>
    </div>
        <product-container :product="{{$product}}"></product-container>
      
</x-layout>