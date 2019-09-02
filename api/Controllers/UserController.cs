using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace api.Controllers
{
  [Route("api/user")]
  [ApiController]
  public class UserController : BaseApiController<Models.User>
  {
    public UserController(Service.Interface.IUserService service) : base(service) { }

    [Route("[action]/{login}/{pswrd}")]
    public async Task<Models.User> GetByLoginPswrd(string login, string pswrd)
    {
      return await ((Service.Interface.IUserService)this.Service).GetByLoginPswrd(login, pswrd);
    }
  }
}
