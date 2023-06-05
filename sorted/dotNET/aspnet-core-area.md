# ASP.NET Core - Area

## What It Is

- has its own set of controllers, views, models and razor pages

## When To Use

- each functional area can be worked on independently

## Folder Structure

- Project name
  - Areas
    - Products
      - Controllers
        - HomeController.cs
        - ManageController.cs
      - Views
        - Home
          - Index.cshtml
        - Manage
          - Index.cshtml
          - About.cshtml
        - Services
          - Controllers
            - HomeController.cs
          - Views
            - Home
              - Index.cshtml

## Associate controller with area

- add `Area` attribute to controller class

```cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.Docs.Samples;

namespace MVCareas.Areas.Products.Controllers;

[Area("Products")]
public class ManageController : Controller {
    public IActionResult Index()
    {
        ViewData["routeInfo"] = ControllerContext.MyDisplayRouteInfo();
        return View();
    }

    public IActionResult About()
    {
        ViewData["routeInfo"] = ControllerContext.MyDisplayRouteInfo();
        return View();
    }
}
```