using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperJobsApp.Models
{
    public class DeveloperJob
    {
        public int Id { get; set; }
        public string JobTitle { get; set; }
        public string CompanyName { get; set; }
        public CompanyAddress CompanyAddress { get; set; }
        public string SalaryRange { get; set; }
        public bool? IsRemote { get; set; }
        public bool? EquitySharing { get; set; }
        public JobType JobType { get; set; }
        public int JobTypeId { get; set; }
        public string ExperienceLevel { get; set; }
        public Industry Industry { get; set; }
        public int IndustryId { get; set; }
        public int CompanySize { get; set; }
        public CompanyType CompanyType { get; set; }
        public int CompanyTypeId { get; set; }
        public string JobDescription { get; set; }
        public string IsActive { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? DeactivatedDate { get; set; }
    }
}
