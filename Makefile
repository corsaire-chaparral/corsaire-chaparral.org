.PHONY: help
help:
	@echo "Usage: make <command>"
	@echo "  serve  Runs a development webserver on port 1313"
	@echo "  build   Build the site with minification"
	@echo "  styles  Build the shared style sheets (no longer managed by Hugo)"
	@echo "  build-staging   Build the site with *staging* configuration"

.PHONY: serve
serve:
	hugo serve --disableFastRender --config=config.yml,config.staging.yml

.PHONY: build
build:
	rm -rf ./public
	hugo --minify --buildFuture

.PHONY: build-staging
build-staging:
	rm -rf ./public
	hugo --config=config.yml,config.staging.yml --minify

.PHONY: styles
styles: static/styles/main.css

static/styles/%.css: _assets/styles/%.scss _assets/styles/**/*.scss
	pnpm sass $< $@
	@echo Post-processing directly on the target CSS file...
	pnpm postcss $@ -o $@

.PHONY: deploy
deploy:
	@echo ""
	@echo " NOTE: To deploy, source .env, then run ./deploy.sh"
	@echo ""

.PHONY: all-staging
all-staging:
	hugo --config=config.yml,config.staging.yml --minify && ./deploy-staging

all: build deploy
