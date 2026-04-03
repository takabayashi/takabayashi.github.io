.PHONY: install dev build preview clean release tag push deploy help

VERSION ?= $(shell git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")
NEXT_PATCH = $(shell echo $(VERSION) | awk -F. '{print $$1"."$$2"."$$3+1}')
NEXT_MINOR = $(shell echo $(VERSION) | awk -F. '{print $$1"."$$2+1".0"}')
NEXT_MAJOR = $(shell echo $(VERSION) | awk -F. '{sub(/v/,"",$$1); print "v"$$1+1".0.0"}')

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	bun install

dev: ## Start dev server with hot reload
	bun --hot index.ts

build: ## Build static site into dist/
	bun run build.ts

preview: build ## Build and preview locally
	cd dist && bunx serve

clean: ## Remove dist/ directory
	rm -rf dist

push: ## Commit and push to main
	git push origin main

release-patch: ## Create a patch release (v1.0.0 -> v1.0.1)
	git tag $(NEXT_PATCH)
	git push origin $(NEXT_PATCH)
	@echo "Tagged and pushed $(NEXT_PATCH)"

release-minor: ## Create a minor release (v1.0.0 -> v1.1.0)
	git tag $(NEXT_MINOR)
	git push origin $(NEXT_MINOR)
	@echo "Tagged and pushed $(NEXT_MINOR)"

release-major: ## Create a major release (v1.0.0 -> v2.0.0)
	git tag $(NEXT_MAJOR)
	git push origin $(NEXT_MAJOR)
	@echo "Tagged and pushed $(NEXT_MAJOR)"

release: ## Create a release with a specific version (make release VERSION=v1.2.3)
	git tag $(VERSION)
	git push origin $(VERSION)
	@echo "Tagged and pushed $(VERSION)"

status: ## Show deploy and release status
	@echo "Current version: $(VERSION)"
	@gh run list --limit 5
