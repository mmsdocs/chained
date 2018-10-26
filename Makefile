DOCKER_COMPOSE := docker-compose -p chained

.PHONY: build
build:
	$(DOCKER_COMPOSE) build

.PHONY: logs
logs:
	$(DOCKER_COMPOSE) logs

.PHONY: log_chained
log_chained:
	$(DOCKER_COMPOSE) logs | grep -i 'chained'

.PHONY: log_db
log_db:
	$(DOCKER_COMPOSE) logs | grep -i 'db'

.PHONY: log_postgrest
log_postgrest:
	$(DOCKER_COMPOSE) logs | grep -i 'postgrest'

.PHONY: run
run:
	$(DOCKER_COMPOSE) up -d

.PHONY: down
down:
	$(DOCKER_COMPOSE) down

.PHONY: drop
drop:
	$(DOCKER_COMPOSE) down -v --rmi local --remove-orphans