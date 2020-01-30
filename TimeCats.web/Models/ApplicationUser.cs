using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace TimeCats.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }

        public bool Active { get; set; } = true;
        
        public IdentityRole Role { get; set; }
        
        public List<TimeCard> TimeCards { get; set; }
        
        public List<UserGroup> UserGroups { get; set; }

        public List<UserCourse> UserCourses { get; set; }
    }
}