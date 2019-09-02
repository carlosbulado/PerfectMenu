
using System.Threading.Tasks;

namespace api.Service.Interface
{
  public interface IUserService : IBaseService<Models.User>
  {
    Task<Models.User> GetByLoginPswrd(string login, string pswrd);
  }
}
