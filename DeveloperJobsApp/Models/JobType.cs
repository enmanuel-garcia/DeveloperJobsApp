using System;

namespace DeveloperJobsApp.Models
{
    public class JobType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string IsActive { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}