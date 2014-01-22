<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="{{URL::to('/')}}/favicon.ico">
    <title>{{$pagetitle}}</title>
    <!-- Bootstrap core CSS -->
    {{ HTML::style('packages/bootstrap/css/bootstrap.css') }}
    <!-- Custom styles for this template -->
    {{ HTML::style('css/header.css') }}
    {{ HTML::style('css/user.profile.css') }}
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<script type="text/javascript">
    var ROOT_PATH = "{{URL::to('/')}}";
</script>
<body>
@include('header');
<!-- Begin page content -->
<div class="container">
    <div class="jumbotron">
        <p>
            <img src="{{URL::to('/')}}/{{Auth::user()->avatar}}" class="img-responsive img-thumbnail" style="width: 100px;"/>
        </p>
        <p>{{Auth::user()->name}}</p>
        <p class="lead">{{Auth::user()->introduction}}</p>
    </div>
    <div class="row" id="timeliner">
        @foreach($articles as $article)
        <div class="item">
            <div>
                <p>
                    <a href="{{URL::to('/article').'/'.$article->id}}">
                        {{$article->title}} 发表于{{$article->created_at}}
                    </a>
                </p>
                <p>
                <a href="{{URL::to('/article').'/'.$article->id}}">
                    <img class="img-responsive img-thumbnail" src="{{URL::to('/')}}/{{$article->thumbnailpath}}" style="width: 250px;height: 120px;">
                </a>
                </p>
            </div>
        </div>
        @endforeach
    </div>
</div>
@include("footer")
<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
{{ HTML::script('js/jquery.js') }}
{{ HTML::script('packages/bootstrap/js/bootstrap.js') }}
{{ HTML::script('js/jquery.validate.js') }}
{{ HTML::script('js/jquery.form.js') }}
{{ HTML::script('js/header.js') }}
{{Html::script('js/jquery.masonry.min.js')}}
{{Html::script('js/user.profile.js')}}
</body>
</html>