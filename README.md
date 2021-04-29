# Backend Boilerplate (Tribe10x)

## Requirements
- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation
Make a copy of `.env.template` and name it `.env` and set the environment variables to their respective values.
Since we're using Docker Compose, for the database we can use the db service name as such:
```
TYPEORM_DBHANDLER=postgres
TYPEORM_HOST=postgres
TYPEORM_USERNAME=tribe10x
TYPEORM_PASSWORD=MySup3rP@ssw0rd!
TYPEORM_DATABASE=tribe10xdb
TYPEORM_PORT=5432
```

## Usage
To run this project, simply run:
```
$ docker-compose up -d
```

To stop the execution of the project, run:
```
$ docker-compose down
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License 
[MIT](./LICENSE)
