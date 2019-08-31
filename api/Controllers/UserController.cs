using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  [Route("api/user")]
  [ApiController]
  public class UserController : BaseApiController<Models.User>
  {
    public UserController(Service.BaseService<Models.User> service) : base(service) { }
  }
}
