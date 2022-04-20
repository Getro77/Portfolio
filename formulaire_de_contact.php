<?php
if(isset($_POST['mailform']))
{
	if(!empty($_POST['nom']) AND !empty($_POST['mail']) AND !empty($_POST['message']))
	{
		$header="MIME-Version: 1.0\r\n";
		$header.='From:"Portfolio"<email-expediteur@example.org>'."\n";
		$header.='Content-Type:text/html; charset="uft-8"'."\n";
		$header.='Content-Transfer-Encoding: 8bit';

		$message='
		<html>
			<body>
				<div align="center">
					<u>Nom de l\'expéditeur :</u>'.$_POST['nom'].'<br />
					<u>Mail de l\'expéditeur :</u>'.$_POST['mail'].'<br />
					<br />
					'.nl2br($_POST['message']).'
				</div>
			</body>
		</html>
		';

		mail("thomas.rbt@outlook.fr", "Thomas-rbt.fr", $message, $header);
		$msg="Votre message a bien été envoyé !";
	}
	else
	{
		$msg="Tous les champs doivent être complétés !";
	}
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Message Envoyé</title>
	<link rel="stylesheet" href="./Css/main.css" />
    <link rel="stylesheet" href="./Css/responsive.css" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="shortcut icon" type="image/ßpng" href="./img/Picto/favicon-32x32.png"/>


</head>
<body>
	<div class="pointer"></div>
	<div class="message">
		<div class="message-sent">
			<hr id="ligne">
			<h1>Votre message à été envoyé !</h1>
			<hr id="ligne">
		</div>
	<a href="https://thomas-rbt.fr"><h2>Retour a l'accueil</h2></a>
	</div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js" integrity="sha512-2fk3Q4NXPYAqIha0glLZ2nluueK43aNoxvijPf53+DgL7UW9mkN+uXc1aEmnZdkkZVvtJZltpRt+JqTWc3TS3Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"
  integrity="sha512-/8phkpsAzxsbuX18zNkQ2gCq4Q5JsWoPo1jHLDeZorPUHRtx9YJxpdk+os05oDhPJVCNzA2/NMl4rmJyQ+6Fvg=="
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
  integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U="
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
  integrity="sha256-2p2tRZlPowp3P/04Pw2rqVCSbhyV/IB7ZEVUglrDS/c="
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"
  integrity="sha256-+9YNuItWuR4sbqeaNiJOxG0BvptYz4fbUXbIZoH5Jwo="
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.js"
  integrity="sha256-31FC/OT6XpfjAhj9FuXjw5/wPXXawCAjJQ29E23/XPk="
  crossorigin="anonymous"
></script>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js"
  integrity="sha512-lJDBw/vKlGO8aIZB8/6CY4lV+EMAL3qzViHid6wXjH/uDrqUl+uvfCROHXAEL0T/bgdAQHSuE68vRlcFHUdrUw=="
  crossorigin="anonymous"
></script>
<script src="./js/main.js"></script>
<script src="./js/mouse.js"></script>
</html>