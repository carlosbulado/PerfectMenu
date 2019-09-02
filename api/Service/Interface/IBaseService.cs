using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.Service.Interface
{
  public interface IBaseService<T> where T : Models.Entity
  {
    #region Transaction
    void BeginTransaction();
    void EndTransaction();
    void CommitTransaction();
    void RollbackTransaction();
    void TrySaveChanges();
    #endregion
    Task<IList<T>> GetAll();
    Task<T> GetById(string guid);
    Task<T> Save(T entry);
  }
}
