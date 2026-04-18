SHELL := /bin/bash

.PHONY: help install dev build test test-watch typecheck lint format clean docker-build docker-run docker-test release-checklist

help:
	@echo "Available targets:"
	@echo "  install            Install dependencies"
	@echo "  dev                Run CLI in dev mode"
	@echo "  build              Build TypeScript sources"
	@echo "  test               Run test suite"
	@echo "  test-watch         Run tests in watch mode"
	@echo "  typecheck          Run TypeScript type checks"
	@echo "  lint               Run linter"
	@echo "  format             Format repository files"
	@echo "  clean              Remove generated artifacts"
	@echo "  docker-build       Build container image"
	@echo "  docker-run         Start development container"
	@echo "  docker-test        Run tests inside container"
	@echo "  release-checklist  Show release checklist"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

test:
	npm run test

test-watch:
	npm run test:watch

typecheck:
	npm run typecheck

lint:
	npm run lint

format:
	npm run format

clean:
	npm run clean

docker-build:
	docker build -t bitcoin-tx-safety-engine:local .

docker-run:
	docker compose up --build btse-dev

docker-test:
	docker compose run --rm btse-test

release-checklist:
	@cat docs/runbooks/release-checklist.md
