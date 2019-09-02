using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Database
{
  public class DBContext : DbContext
  {
    public DBContext(DbContextOptions<DBContext> options) : base(options) { }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      this.CreateDbSets(modelBuilder);
      //this.CreateQueries(modelBuilder);
    }

    #region BdSets
    public DbSet<User> Users { get; set; }
    private void CreateDbSets(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>().ToTable("Users");
    }
    #endregion

    //#region DbQueries
    //public DbQuery<User> QueryUsers { get; set; }
    //private void CreateQueries(ModelBuilder modelBuilder)
    //{
    //  modelBuilder.Query<User>().ToView("Users");
    //}
    //#endregion

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //  optionsBuilder.UseSqlServer(@"Server=(local);Database=PerfectMenuDB;MultipleActiveResultSets=true;User ID=sa;Password=ExpandIT1;");
    //}

  }
}