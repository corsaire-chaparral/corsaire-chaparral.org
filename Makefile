.PHONY: build


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

build-staging:
	rm -rf ./public
	hugo --config=config.yml,config.staging.yml --minify

deploy:
	@echo ""
	@echo " NOTE: To deploy, source .env, then run ./deploy.sh"
	@echo ""

all-staging:
	hugo --config=config.yml,config.staging.yml --minify && ./deploy-staging

all: build deploy
