# Build
mvn clean package && docker build -t com.airhacks/events .

# RUN

docker rm -f events || true && docker run -d -p 8080:8080 -p 4848:4848 --name events com.airhacks/events 