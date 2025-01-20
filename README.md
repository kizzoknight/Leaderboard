<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embed KeepTheScore</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .iframe-container {
            width: 100%;
            max-width: 800px; /* Adjust max-width as needed */
            margin: 20px auto;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div class="iframe-container">
        <iframe
            id="iframe-rtdzjgnpmksnr"
            src="https://keepthescore.com/embed/rtdzjgnpmksnr/"
            style="width:100%; height:100%; border:none;"
            scrolling="no"
        ></iframe>
    </div>
    <script>
        window.onmessage = (e) => {
            if (e.data.hasOwnProperty("frameHeight")) {
                const iframe = document.getElementById("iframe-" + e.data.board_token);
                if (iframe) {
                    iframe.style.height = `${e.data.frameHeight + 40}px`;
                }
            }
        };
    </script>
</body>
</html>
