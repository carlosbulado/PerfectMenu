using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Service
{
  public class UserService : BaseService<Models.User>, Interface.IUserService
  {
    public UserService(Database.DBContext context) : base(context)
    {
      this._Table = this._context.Users;
    }

    [HttpGet]
    public async Task<Models.User> GetByLoginPswrd(string login, string pswrd)
    {
      return await this._Table.Where(x => x.Login == login && x.Pswrd == pswrd).SingleOrDefaultAsync();
    }
  }
}
