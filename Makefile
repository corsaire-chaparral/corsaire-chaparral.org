.PHONY: build

include .env

help:
	@echo "Usage: make <command>"
	@echo "  serve  Runs a development webserver on port 1313"
	@echo "  build   Build the site with minification"
	@echo "  build-staging   Build the site with *staging* configuration"

serve:
	hugo serve --disableFastRender --config=config.yml,config.staging.yml

build:
	rm -rf ./public
	hugo '--minify'

deploy:
	curl -X POST $(RENDER_DEPLOY_URL)

build-staging:
	rm -rf ./public
	hugo --config=config.yml,config.staging.yml --minify

all-staging:
	hugo --config=config.yml,config.staging.yml --minify && ./deploy-staging

all: build deploy
