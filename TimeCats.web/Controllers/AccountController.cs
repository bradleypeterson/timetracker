using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using TimeCats.Models;

namespace TimeCats.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<AccountController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
        }

        public async Task<IActionResult> Register(ApplicationUser user)
        {
            var result = await _userManager.CreateAsync(user);
            if (result.Succeeded)
            {
                _logger.LogInformation("User successfully registered an account.");
                _signInManager.SignInAsync(user, false);
                return RedirectToAction("Index", "Home");
            }
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
            
            // If we got this far something failed, redisplay form
            return RedirectToAction("Error", "Home");
        }

        public async Task<IActionResult> Login(string username, string password)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(username, password, false, false);
                if (result.Succeeded)
                {
                    _logger.LogInformation("User login success.");
                    return LocalRedirect("account/dashboard");
                }
            }

            return RedirectToAction("Error", "Home");
        }
    }
}