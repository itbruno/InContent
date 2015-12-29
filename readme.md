# InContent

## How To Use
In your HTML document, put the follow code for call the LESS/SASS Compiled:

- In your html file add the stylesheet in your `<head>`:

```html
<link rel="stylesheet" href="path-to-css/incontent.css" type="text/css" />
```

- Put the code below in your html file to use the effects:

```html
<div class="pic">
    <img src="img/01.jpg" class="pic-image" alt="Pic"/>
    <span class="pic-caption bottom-to-top">
        <h1 class="pic-title">Pic Title</h1>
        <p>Some description or text.</p>
    </span>
</div>
```

- The `.bottom-to-top` is the class of effect that your choice.

See demo [here][demo].

## Here is the list of classes and effect that you can use:

|         Class         |            Description            |
|-----------------------|-----------------------------------|
|.pic-title             | image content title               |
|.bottom-to-top         | Effect: bottom to top             |
|.top-to-bottom         | Effect: top to bottom             |
|.left-to-right         | Effect: left to right             |
|.right-to-left         | Effect: right to left             |
|.rotate-in             | Effect: rotate in                 |
|.rotate-out            | Effect: rotate out                |
|.open-up               | Effect: open up                   |
|.open-down             | Effect: open down                 |
|.open-left             | Effect: open left                 |
|.open-right            | Effect: open right                |
|.come-left             | Effect: come to left              |
|.come-right            | Effect: come to right             |

## License

InContent is released under MIT License.

## Test in your Mobile Device

Use some app for read the QR code and test in your mobile. If you dont have, what do you waiting?! =D
Take a look, its Free - QR Reader: [iPhone][qrcode-ios], [Android][qrcode-android] and [Windows Phone][qrcode-wphone].

![InContent - QRcode][qrcode]

[demo]: http://bit.ly/inContent
[qrcode]: http://i.imgur.com/8K3lGKz.png
[qrcode-ios]: http://bit.ly/18rWt4U
[qrcode-android]: http://bit.ly/18LEhkB
[qrcode-wphone]: http://bit.ly/1bFhgzY
