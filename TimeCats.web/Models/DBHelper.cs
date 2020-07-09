using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using TimeCats.Services;

namespace TimeCats.Models
{
    
    public class DBHelper
    {
        private static TimeTrackerContext _context { get; set; }
        public DBHelper(TimeTrackerContext context)
        {
            _context = context;
        }

        public static List<Dashboard> GetDashboard(int userID)
        {
            var dashboard = new List<Dashboard>();
            return _context.Groups
                .Include(g => g.Project)
                .Include(g => g.UserGroups)
                .ThenInclude(ug => ug.User)
                .ThenInclude(u => u.timecards)
                .FirstOrDefault(u => u.userID = userID);
            

            foreach(Group test in _context.Groups){

            
                dashboard.Add(new Dashboard
                {
                    groupID = test.groupID,
                    groupName = test.groupName,
                    projectID = test.projectID,
                    projectName = test.Project.projectName,
                    courseID = test.Project.CourseID,
                    courseName = test.Project.Course.courseName,
                    instructorID = test.Project.Course.InstructorId,
                    instructorName = test.Project.Course.instructorName

                });            
            
            }
            

            dashboard.Add(new Dashboard{
                groupID = 69,
                groupName = "Bull Honkey",
                projectID = 2,
                projectName = "This is dumb, why won't it work",
                courseID = 10,
                courseName = "Worst class ever, like ever ever",
                instructorID = 420,
                instructorName = "Snoop Dogg"
            });
            dashboard.Add(new Dashboard{
                groupID = 420,
                groupName = "Why me",
                projectID = 5,
                projectName = "I'm over this",
                courseID = 420,
                courseName = "Making you 2nd guess your degree",
                instructorID = 3,
                instructorName = "Jesus"
            });

            return dashboard;
        }


        public static Group GetGroup(int groupID)
        {
            return _context.Groups
                .Include(g => g.Project)
                .Include(g => g.UserGroups)
                .ThenInclude(ug => ug.User)
                .ThenInclude(u => u.timecards)
                .FirstOrDefault(g => g.groupID == groupID);
        }

// Everything below here we can just consider to be trash leftover from the people before
// but will keep until it's total worthlessness has been proven

        //    var group = new Group();
        //    group.users = new List<User>();
        //    var foundUser = false;


        //    using (var conn = new MySqlConnection(ConnString.ToString()))
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            //SQL and Parameters
        //            cmd.CommandText =
        //                "Select g.*, u.userID, u.firstName, u.lastName, t.groupID AS 'tgroupID', t.timeID, " +
        //                "date_format(t.timeIn, '%m/%d/%Y %l:%i %p') AS 'timeIn', date_format(t.timeOut, '%m/%d/%Y %l:%i %p') AS 'timeOut', " +
        //                "t.description, t.isEdited, t.userID AS 'tuserID', ug.isActive AS isActiveInGroup  " +
        //                "From cs4450.groups g Left Join uGroups ug On " +
        //                "ug.groupID = g.groupID " +
        //                "Left Join users u On " +
        //                "u.userID = ug.userID " +
        //                "Left Join timeCards t On " +
        //                "(u.userID = t.userID AND g.groupID = t.groupID) " +
        //                "Where g.groupID = @groupID";
        //            cmd.Parameters.AddWithValue("@groupID", groupID);

        //            using (var reader = cmd.ExecuteReader())
        //            {
        //                //Runs once per record retrieved
        //                while (reader.Read())
        //                {

        //                    foundUser = false;
        //                    group.groupName = names.groupName;
        //                    group.groupID = names.groupID;
        //                    group.isActive = names.isActive;
        //                    group.projectID = reader.GetInt32("projectID");

        //                    //get each users time info
        //                    foreach (var user in group.users)
        //                        if (user.userID == reader.GetInt32("userID"))
        //                        {
        //                            foundUser = true;
        //                            //Add time slot

        //                            if (user.timecards == null) user.timecards = new List<TimeCard>();

        //                            if (!reader.IsDBNull(9))
        //                                user.timecards.Add(new TimeCard
        //                                {
        //                                    timeIn = reader.IsDBNull(10) ? "" : reader.GetString("timeIn"),
        //                                    timeOut = reader.IsDBNull(11) ? "" : reader.GetString("timeOut"),
        //                                    description = reader.GetString("description"),
        //                                    groupID = reader.GetInt32("tgroupID"),
        //                                    timeslotID = reader.GetInt32("timeID"),
        //                                    isEdited = reader.GetBoolean("isEdited"),
        //                                    userID = reader.GetInt32("tuserID")
        //                                });
        //                        }

        //                    if (!foundUser)
        //                    {
        //                        var timecardlist = new List<TimeCard>();
        //                        if (!reader.IsDBNull(9))
        //                            timecardlist.Add(new TimeCard
        //                            {
        //                                timeIn = reader.IsDBNull(10) ? "" : reader.GetString("timeIn"),
        //                                timeOut = reader.IsDBNull(11) ? "" : reader.GetString("timeOut"),
        //                                description = reader.GetString("description"),
        //                                groupID = reader.GetInt32("tgroupID"),
        //                                timeslotID = reader.GetInt32("timeID"),
        //                                isEdited = reader.GetBoolean("isEdited"),
        //                                userID = reader.GetInt32("tuserID")
        //                            });

        //                        //Add the user and then the time slot
        //                        if (!reader.IsDBNull(5))
        //                            group.users.Add(new User
        //                            {
        //                                userID = reader.GetInt32("userID"),
        //                                firstName = reader.GetString("firstName"),
        //                                lastName = reader.GetString("lastName"),
        //                                timecards = timecardlist,
        //                                isActive = reader.GetBoolean("isActiveInGroup")
        //                            });
        //                    }
        //                }
        //            }
        //        }
        //    }

        //    return group;
        //}






    }
}