# Docker - Compose For Production

Changes might include in production

- Removing any volume bindings for application
- Change binding port
- Set environment variable differently
- Specifying a restart policy `restart: always` to avoid downtime
- Adding extra services, such as a [log aggregator]()

for this reason consider defining an additional compose file, for example `production.yml`

> use [multiple compose files](docker-multiple-compose-files.md#override-attributes-for-different-environments)


