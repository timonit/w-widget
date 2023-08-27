# w-widget

Виджет погоды. 

## Сброка
Весь код собирается в папке dist, в двух файлах index.js, style.css.

```js
// npm
npm run build:bundle

// yarn
yarn build:bundle
```

Пример использования
```
<head>
    <link rel="stylesheet" href="/style.css">
    <script type="module" crossorigin src="/index.js"></script>
</head>
<body>
    <weather-widget>
</body>

```



## Сборка веб компонента
Эксперементальная версия виджета в виде веб компонента. Компилируются 2 файла web-component.js, style.css

```js
// npm
npm run build:wc

// yarn
yarn build:wc
```

Пример использования
```
<head>
    <link rel="stylesheet" href="/style.css">
    <script type="module" crossorigin src="/web-component.js"></script>
</head>
<body>
    <weather-widget>
</body>

```
