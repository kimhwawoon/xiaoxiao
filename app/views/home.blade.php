<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../docs-assets/ico/favicon.png">
    <title>xiaoxiao</title>
    <!-- Bootstrap core CSS -->
    {{ HTML::style('css/bootstrap.css') }}
    <!-- Custom styles for this template -->
    {{ HTML::style('css/header.css') }}
    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]>
    <script src="../../docs-assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<!-- Wrap all page content here -->
<style type="text/css">
    a.article_title {
        text-decoration:none;
        font-size: 22px;
        font-weight: bold;
        color: #000;
    }

    a.article_title:hover {
        color: #39b3d7;
        text-decoration:none;
    }
</style>
<div id="wrap">
    @include('header');
    <!-- Begin page content -->
    <div class="container">
        <div class="col-sm-7">
            @foreach ($articles as $art)
            <section style="padding-bottom: 20px;">
                <div class="row">
                    <h2><a href="#" class="article_title" style="tex">{{$art->title}}</a></h2>
                </div>
                <div class="row" style="padding: 5px 0px;">
                    <!-- JiaThis Button BEGIN -->
                    <div class="jiathis_style">
                        <a class="jiathis_like_tsinat" data="width=320"></a>
                    </div>
                    <script type="text/javascript" src="http://v3.jiathis.com/code_mini/jia.js" charset="utf-8"></script>
                    <!-- JiaThis Button END -->
                </div>
                <div class="row">
                    <a href="#">
                        <img class="img-responsive img-thumbnail" src="{{$art->savepath}}" style="width: 100%;">
                    </a>
                </div>
            </section>
            @endforeach
        </div>
        <div class="col-sm-3">
            <div class="row" style="padding-top: 30px; text-align: center;">
                推荐！
            </div>
        </div>
    </div>
</div>
@include("footer")
<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
{{ HTML::script('js/jquery.js') }}
{{ HTML::script('js/bootstrap.js') }}
{{ HTML::script('js/header.js') }}

{{ HTML::script('js/jquery.validate.js') }}
</body>
</html>