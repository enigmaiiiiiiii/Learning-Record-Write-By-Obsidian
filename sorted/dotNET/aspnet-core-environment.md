# ASP.NET - Environment

## How To Start In A Specific Environment

- according to
  - [environment settings order](#environment-settings-order)
  - [appsettings.json](#appsettingsjson)

## appsettings.json

`JsonConfigurationProvider` responsible for loading `appsettings.json`

- loads order
  1. `appsettings.json`
  2. `appsettings.{Environment}.json`
- `appsettings.{Environment}.json` overrides `appsettings.json`


## Environment variables Settings Effect Order

configuration effect priority order highest to lowest

1. command line arguments
2. Non-prefixed environment variables
  - prefixed environment variables: `DOTNET_`, `ASPNETCORE_`
  - Non-prefix environment variables: `PATH`
3. [User secrets](aspnet-core-secrets-management.md)
4. `appsettings.{Environment}.json`
5. `appsettings.json`

## Variable Determine The ASP.NET Runtime The Environment

- DOTNET_ENVIRONMENT
- ASPNETCORE_ENVIRONMENT

## set local machine environment variable

- set in `properties/launchSettings.json`

`launchSettings.json` looks like this

```json
{
  "profiles": {
    "IIS Express": {
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "ProjectName": {
      "commandName": "Project",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

- there two profiles
  - `IIS Express`: represent [IIS Express]() is the web server
  - `ProjectName`: represent [Kestrel web server](aspnet-core-kestrel.md)

run with specific profiles

- `dotnet run --launch-profile ProjectName`


## IHostEnvironment properties

`IHostEnvironment.<EnvironmentName>`, for `EnvironmentName` there are:

- IHostEnvironment.Development
- IHostEnvironment.Staging
- IHostEnvironment.Production

they can be set to any value

but values provided by framework