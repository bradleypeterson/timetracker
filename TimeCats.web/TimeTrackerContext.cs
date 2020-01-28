using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TimeCats.Models;
using TimeCats.Utils;

namespace TimeCats
{
    public class TimeTrackerContext : IdentityDbContext<ApplicationUser>
    {
        // ORIGINAL TABLES
        public DbSet<Course> Courses { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<TimeCard> TimeCards { get; set; }
        
        // JOINING TABLES
        public DbSet<UserCourse> UserCourses { get; set; }
        public DbSet<UserGroup> UserGroups { get; set; }

        // public DbSet<Eval> Evals { get; set; }
        // public DbSet<EvalResponse> EvalResponses { get; set; }
        // public DbSet<EvalTemplate> EvalTemplates { get; set; }
        // public DbSet<EvalTemplateQuestion> EvalTemplateQuestions { get; set; }
        // public DbSet<EvalTemplateQuestionCategory> EvalTemplateQuestionCategories { get; set; }

        public TimeTrackerContext(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder dbModelBuilder)
        {
            base.OnModelCreating(dbModelBuilder);
            this.ConfigureRelationships(dbModelBuilder);
            this.SeedData(dbModelBuilder);
        }
    }
}