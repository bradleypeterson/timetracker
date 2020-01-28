using System.ComponentModel.DataAnnotations;

namespace TimeCats.ViewModels.AccountViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }
        
        
    }
}