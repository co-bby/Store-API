
# Store API

A restful store API 


## Tech Stack

**Client:** No Frontend !!!!

**Server:** Node, Express, MongoDB

**Architecture** Model View Controller (MVC)


## API Reference

#### Get all products static

```http
  GET /api/v1/products/static
```



#### Get all products

```http
  GET /api/v1/products?
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `featured`      | `boolean` |  |
| `company`| `string` | company name|
| `name`      | `string` | name of the product.  **Not Case Sensitive**|




## Run Locally

Clone the project

```bash
  git clone https://github.com/co-bby/Store-API
```

Go to the project directory

```bash
  cd store-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`=


