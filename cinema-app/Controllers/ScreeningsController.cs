using Microsoft.AspNetCore.Mvc;

namespace cinema_app.Controllers
{
    public class ScreeningsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
