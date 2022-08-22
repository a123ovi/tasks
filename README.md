## Getting started

1. Install environment dependencies

   - [Docker](https://www.docker.com/get-started)

## How to run

1. Make sure Docker is installed and running:

   ```bash
   $ docker --version
   $ docker ps
   ```


2. Ensure you have yarn/npm or any other package manager installed and run this in a terminal:
  
  ```bash
   $ yarn docker-compose
   ```
  If you don't want to intall a package manager you can run this directly:
   ```bash
   $ docker-compose up --build
   ```

3. The previous command will create 3 containers, you can access any of them directly:
    web = localhost:3000
    api = localhost:3001
    redis =  localhost:6379

4. If you dont want to use Docker to run the project you will need to download Redis and install it locally: https://redis.io/download/

5. To run the 2 applications go to their respectives directories(api, web) and run yarn start:dev. Please remember to configure the .env files to point to the correct servers

