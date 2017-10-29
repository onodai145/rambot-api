# rambot-api

## setup

### pm2

    git clone https://github.com/onodai145/rembot-api.git
    cd rembot-api
    cp config/default.json config/production.json
    vi config/production.json
    pm2 start processes.json
    pm2 save

### docker

    git clone https://github.com/onodai145/rembot-api.git
    cd rembot-api
    cp config/default.json config/production.json
    vi config/production.json
    docker build -t rembot-api .
    docker run -e NODE_ENV=production -p 3000:3000 --name rembot-api -d -v $(pwd)/config:/rembot-api/config rembot-api
