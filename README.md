<h1 align="center" markdown="1">
    asur-ams <br>
    <font size="5">
        ASUR Attendance Management System
    </font>
    <p align="center" markdown="1">
        <!-- <img src="https://img.shields.io/github/issues/punyamsingh/asur-next" alt="GitHub issues" /> -->
        <!-- <img src="https://img.shields.io/github/forks/punyamsingh/asur-next" alt="GitHub forks" /> -->
        <!-- <img src="https://img.shields.io/github/stars/punyamsingh/asur-next" alt="GitHub stars" /> -->
        <!-- <img src="https://img.shields.io/github/license/punyamsingh/asur-next" alt="GitHub license" /> -->
    </p>
</h1>


##### A subsidiary of A.S.U.R. [🔗](https://github.com/Rahuldj2/ASUR) <br> (Attendance System Using Recognition)

<p align="center">
  <a href="https://freeimage.host/" target="_blank">
    <img src="https://iili.io/JoWfxef.png" alt="ASUR Logo" width="200" height="210"/>
  </a>
</p>

### Overview: <br>
#### A web app for teachers to initiate attendance sessions and manage records of students. Students can also login to find their attendance records and other details for each subject. 


```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Please ask the maintainers for the .env.local file before running it locally.

Hosted Server and Site links
[Vercel](https://asur-ams.vercel.app/) [Netlify](https://asur-ams.netlify.app/)


![GitHub Contributors Image](https://contrib.rocks/image?repo=punyamsingh/asur-next)



# Deployment Steps for Next.js Application on AWS EC2 with RDS and Nginx

## Create AWS Resources
1. **Create EC2 Instance (Free Tier)**
   - Follow AWS documentation to create an EC2 instance.

2. **Create RDS Instance**
   - Create an RDS MySQL instance with a private IP.
   - Connect the RDS instance to your existing public EC2 instance.
   - [AWS RDS Setup Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html)

## Install Node.js and MySQL Client on EC2
3. **Install Node.js 16.x**
```bash
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
```
4. **Run mysql script to write to database**
 ```bash
mysql -h <rds-endpoint> -u <your-username> -p < asur.sql
```

## Clone github
 ```bash
git clone https://github.com/Rahuldj2/asur-next
cd asur-next
npm install
npm run build
```

## Install PM2
 ```bash
npm install pm2 -g
pm2 start npm --name "nextjs-app" -- start
```

## Install and Configure nginx for reverse proxy
 ```bash
sudo yum install nginx
```

## Server config template
```bash
sudo nano /etc/nginx/conf.d/your-app.conf
```
```bash
server {
    listen 80;
    server_name <domain> <ec2 public ip>;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 443 ssl;
    server_name <domain> <ec2 public ip>;

    ssl_certificate /etc/nginx/ssl/certificate.crt;
    ssl_certificate_key /etc/nginx/ssl/private.key;

    # Ensure strong security settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;

    # Enable OCSP stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}




