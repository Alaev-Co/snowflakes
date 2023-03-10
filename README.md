
# Snowflakes

Добавляет на сайт **новогоднее настроение**, а точнее снегопад, сугробы и машинку, которая их регулярно убирает!

**⚠️ Код никак не изменяет другие файлы и не влияет на работу сайта.
Однако, перед установкой скрипта рекомендуем создать резервную копию базы данных и всех файлов.**

- [Snowflakes](#snowflakes)
  - [Демо](#демо)
  - [Установка](#установка)
    - [Если загружаем файлы к себе на сервер](#если-загружаем-файлы-к-себе-на-сервер)
    - [Если подключаем удаленный скрипт](#если-подключаем-удаленный-скрипт)
  - [Настройка](#настройка)

## Демо

- [Снегопад](https://alaev-co.github.io/snowflakes/examples/snowflakes.html)
- [Снегопад и сугробы](https://alaev-co.github.io/snowflakes/examples/snowflakes-with-snow-balls.html)

## Установка

### Если загружаем файлы к себе на сервер

1. [Скачать](https://github.com/Alaev-Co/snowflakes/releases) и распаковать архив.
2. Загрузить папку с файлами себе на хостинг.
3. Подключить css-стили и js-скрипт:

ПЕРЕД закрывающим тегом `</head>` вставить строку:

```html
    <link href="/snowFlakes/snow.min.css" rel="stylesheet">
```

ПОСЛЕ открывающего тега `<body>` вставить строки:

```html
    <script src="/snowFlakes/Snow.js"></script>
    <script>
        new Snow();
    </script>
```

Очистить кеш в настройках вашей CMS-системы (опционально).
_____

### Если подключаем удаленный скрипт

1. Подключаем только css-стили и js-скрипт.

ПЕРЕД закрывающим тегом `</head>` вставить строку:

```html
    <link href="https://cdn.jsdelivr.net/gh/Alaev-Co/snowflakes/dist/snow.min.css" rel="stylesheet">
```

ПОСЛЕ открывающего тега `<body>` вставить строку:

```html
    <script src="https://cdn.jsdelivr.net/gh/Alaev-Co/snowflakes/dist/Snow.min.js"></script>
    <script>
        new Snow();
    </script>
```

Очистить кеш в настройках вашей CMS-системы (опционально).

## Настройка

Список переменных, чтобы настроить все так, как вам нравится!  

| Параметр                   | Значение | По умолчанию | Описание                                                                      |
| -------------------------- | -------- | ------------ | ----------------------------------------------------------------------------- |
| iconColor                  | string   | #a6e7ff      | Цвет снежинки                                                                 |
| iconSize                   | number   | 15           | Размер снежинки                                                               |
| icon                       | string   | svg          | Изображение снежинки (если указать, то iconColor, iconSize работать не будут) |
| snowPlowImage              | string   | svg          | Изображение снегоуборочной машины                                             |
| showSnowBalls              | bool     | true         | Включить сугробы                                                              |
| showSnowBallsIsMobile      | bool     | true         | Включить на устройствах < 1024px                                              |
| showSnowflakes             | bool     | true         | Включить снегопад                                                             |
| countSnowflake             | number   | 100          | Кол-во снежинок (0-100)                                                       |
| snowBallsLength            | number   | 10           | Кол-во сугробов (0-10)                                                        |
| snowBallIterations         | number   | 40           | Кол-во итераций роста сугроба (10-40)                                         |
| snowBallupNum              | number   | 1            | Кол-во пикселей роста сугроба за одну итерацию (1-3)                          |
| snowBallIterationsInterval | number   | 1000         | Скорость роста сугроба в **миллисекундах**                                    |
| clearSnowBalls             | number   | 20000        | Интервал очищения в **миллисекундах**                                         |
