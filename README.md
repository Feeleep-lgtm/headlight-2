# CSV parser

## Description

This API takes a csv file, processes it and send back the response as an array of JSON objects

The CSV file is sent to the server via a POST request to `"/csv"`, which the server processes and sends back response in JSON format 

## Endpoints

- ### `/`

    -   method = `GET`

    -   content = `api documentaion`

- ### `/csv`

    - method = `POST`

    - enctype = `multipart/form-data`

    - mimetype = `csv`

    - form-data = `'csv'`

    - response-type = `json`
