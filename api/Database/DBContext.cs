using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Database
{
  public class DBContext : DbContext
  {
    public DBContext(DbContextOptions<DBContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>().ToTable("Users");
    }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //  optionsBuilder.UseSqlServer(@"Server=(local);Database=PerfectMenuDB;MultipleActiveResultSets=true;User ID=sa;Password=ExpandIT1;");
    //}

  }
}