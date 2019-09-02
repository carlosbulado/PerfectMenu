using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.Service
{
  public abstract class BaseService<T> : Interface.IBaseService<T> where T : Models.Entity
  {
    protected readonly Database.DBContext _context;
    protected DbSet<T> _Table { get; set; }

    public BaseService(Database.DBContext context)
    {
      _context = context;
    }

    #region Transaction
    protected IDbContextTransaction _Transaction { get; set; }
    public void BeginTransaction()
    {
      this._Transaction = this._context.Database.BeginTransaction();
    }

    public void EndTransaction()
    {
      try
      {
        this.CommitTransaction();
      }
      catch (System.Exception ex)
      {
        this.RollbackTransaction();
      }
    }

    public void CommitTransaction()
    {
      if (this._Transaction != null) this._Transaction.Commit();
    }

    public void RollbackTransaction()
    {
      this._Transaction.Rollback();
    }

    public void TrySaveChanges()
    {
      if (this._Transaction == null) this._context.SaveChangesAsync();
    }
    #endregion

    public async Task<IList<T>> GetAll()
    {
      return await this._Table.ToListAsync();
    }

    public async Task<T> GetById(string guid)
    {
      return await this._Table.SingleOrDefaultAsync(entry => entry.Guid == guid);
    }

    public async Task<T> Save(T entry)
    {
      try
      {
        if(this.GetById(entry.Guid) != null) await this._Table.AddAsync(entry);
        else this._Table.Update(entry);
        return entry;
      }
      catch(System.Exception ex)
      {
        var saving = await this._Table.AddAsync(entry);
        return saving.Entity;
      }
      finally
      {
        this.TrySaveChanges();
      }
    }
  }
}
