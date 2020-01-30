using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Org.BouncyCastle.Utilities;
using TimeCats.Models;

namespace TimeCats.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<ApplicationUser> _roleManager;
        private readonly ILogger _logger;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            RoleManager<ApplicationUser> roleManager,
            ILogger<AccountController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _logger = logger;
        }

        private async Task CreateRoles()
        {
            if (!await _roleManager.RoleExistsAsync("Admin"))
            {
                _roleManager.CreateAsync(new IdentityRole("Admin"));
            }

            if (!await _roleManager.RoleExistsAsync("Instructor"))
            {
                _roleManager.CreateAsync(new IdentityRole("Instructor"));
            }
            
            if (!await _roleManager.RoleExistsAsync("Student"))
            {
                var role = new IdentityRole("Student");
                await _roleManager.CreateAsync(role);
            }
        }
        
        public async Task<IActionResult> Register([FromBody] object userJson)
        {
            await CreateRoles();
            
            var ujson = userJson.ToString();
            var user = JsonConvert.DeserializeObject<ApplicationUser>(ujson);
            var result = await _userManager.CreateAsync(user);
            if (result.Succeeded)
            {
                _logger.LogInformation("User successfully registered an account.");
                await _signInManager.SignInAsync(user, false);
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

                if (result.IsLockedOut)
                {
                    _logger.LogWarning("User account locked out.");
                    return RedirectToPage("/lockout");
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                    return RedirectToAction("Error", "Home");
                }
            }

            return RedirectToAction("Error", "Home");
        }
    }
}