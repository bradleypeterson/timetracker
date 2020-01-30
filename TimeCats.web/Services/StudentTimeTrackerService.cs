using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using TimeCats.Models;

namespace TimeCats
{
    public class StudentTimeTrackerService
    {
        private readonly TimeTrackerContext _timeTrackerContext;
        
        public StudentTimeTrackerService(TimeTrackerContext studentCtx)
        {
            _timeTrackerContext = studentCtx;
        }

        public ICollection<Dashboard> GetDashboardsForUser()
        {
            throw new NotImplementedException();
        }

        public int AddCourse(Course course)
        {
            var c = _timeTrackerContext.Courses.Add(course);
            _timeTrackerContext.SaveChanges();

            return c.Entity.courseID;
        }
    }
}