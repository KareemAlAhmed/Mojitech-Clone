<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anek+Bangla&family=Open+Sans&display=swap" rel="stylesheet">
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://kit.fontawesome.com/3ab769c610.js" crossorigin="anonymous"></script>

    <!-- Styles -->
    <link href="css/app.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Open Sans', sans-serif;
        }
        #app{
            min-height: 100vh;
            max-width: 100vw;
        }
        .itemPreviewName::after{
            content: "";
            position: absolute;
            background-color: #666666;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
        }
        .browser{
            color:#26a7ca;
        }
        .browser:hover{
            color: black;
        }
        svg{
            width: 40px;
            height: 20px;
            fill: #fff;
            opacity: 0.5;
        }
        svg:hover{
            opacity: 1;
        }
    </style>
</head>

<body class="antialiased">
    <div id="app" class="m-0">
        <announce-event></announce-event>
 
        <header-component>
           <template v-slot:logo>
           <img src="./storage/thumbnails/2logo-mojitech-1.png">
           </template>
           <template v-slot:like>
           <img src="./storage/thumbnails/like.png">
           </template>
           <template v-slot:cart>
           <img src="./storage/thumbnails/cart.png">
           </template>
           <template v-slot:search>
           <img src="./storage/thumbnails/search.png" >
           </template>
        </header-component>
        <nav-component></nav-component>
        <preview-display></preview-display>
        <x-itemPreview :objects="$specialOffers">
            SPECIAL OFFERS
        </x-itemPreview>
        <x-featureItemPreview :featureItems="$featureItems">
            TODAY'S DEALS
        </x-featureItemPreview>
        <x-itemPreview :objects="$specialOffers">
            LAPTOPS
        </x-itemPreview>
        <x-itemPreview :objects="$specialOffers">
            GAMING DESKTOPS
        </x-itemPreview>
        <x-footer></x-footer>
    </div>

    <script src="js/app.js"></script>
</body>

</html>