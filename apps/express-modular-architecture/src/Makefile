build:
	docker build . -t samayun/penguin

start:
	docker run -p 1111:1111 -d samayun/penguin

run:
	docker run -p 1111:1111 samayun/penguin

stop:
	docker stop samayun/penguin

stop-all:
	docker stop $(docker ps -q)

kill:
	sudo killall node

list: 
	docker container ls