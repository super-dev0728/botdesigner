<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{'WebRobot Bot Designer 1.0'}}</title>

    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

</head>

<body>
    <div id="app"></div>

    <!-- Scripts -->
    <script src="{{ asset('/js/manifest.js') }}"></script>
    <script src="{{ asset('/js/vendor.js') }}"></script>
    <script src="{{ asset('/js/app.js') }}"></script>

</body>
</html>

