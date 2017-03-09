# live-code

1. Deskripsi :
  Program ini dibuat untuk memenuhi Live code yang pertama
2. Step - step pembuatan :
  1. NPM install
  2. buat model food, restaurant difolder server/models
  3. buat controller untuk food, restaurant difolder server/controllers
  4. buat routes untuk food, restaurant difolder server/routes
  5. untuk menjalankannya gunakan nodemon app.js

3. APi Endpoint


|       Route      |  HTTP   | Description |
|------------------|---------|-------------|
|/api/food      |   GET   |\listing foods |
|/api/food/create      |   POST   | insert new food |
|/api/food/update/:id   |   PUT   | Update food |
|/api/food/delete/:id        |   DELETE  | delete food|
|/api/rest/find/:id    |    GET | find one food|
|/api/rest      |   GET   |listing restaurant|
|/api/rest/create    |  POST | insert new restaurant |
|/api/rest/update/:id    |    PUT | Update restaurant|
|/api/rest/delete/:id    |    DELETE | delete restaurant|
|/api/rest/find/:id    |    GET | find one restaurant|
