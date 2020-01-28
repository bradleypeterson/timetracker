﻿using System;
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

        public void AddUser(User user)
        {
            _timeTrackerContext.Users.Add(user);
            _timeTrackerContext.SaveChanges();
        }

        public User GetUserByUsername(string username)
        {
            var user = _timeTrackerContext.Users.FirstOrDefault(u => u.username.ToLower().Equals(username.ToLower()));
            return user;
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