
namespace api.Service
{
  public class UserService : BaseService<Models.User>
  {
    public UserService(Database.DBContext context) : base(context)
    {
      this._Table = this._context.Users;
    }
  }
}
