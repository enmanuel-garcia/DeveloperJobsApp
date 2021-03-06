﻿using DeveloperJobsApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperJobsApp.DB
{
    public class DeveloperJobsContext : DbContext
    {
        public DbSet<DeveloperJob> DeveloperJobs { get; set; }

        public DeveloperJobsContext(DbContextOptions<DeveloperJobsContext> developerJobsContextOptions) 
            : base(developerJobsContextOptions) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<DeveloperJobsApp.Models.CompanyAddress> CompanyAddress { get; set; }

        public DbSet<DeveloperJobsApp.Models.Industry> Industry { get; set; }

        public DbSet<DeveloperJobsApp.Models.JobType> JobType { get; set; }

        public DbSet<DeveloperJobsApp.Models.CompanyType> CompanyType { get; set; }
    }
}
