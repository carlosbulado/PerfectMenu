using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BaseApiController<T> : ControllerBase where T : Models.Entity
  {
    protected Service.BaseService<T> Service { get; set; }

    public BaseApiController(Service.BaseService<T> _service)
    {
      this.Service = _service;
    }

    // GET api/[controller]
    [HttpGet]
    public async Task<IList<T>> Get()
    {
      return await this.Service.GetAll();
    }

    // GET api/[controller]/5
    [HttpGet("{guid}")]
    public async Task<T> Get(string guid)
    {
      return await this.Service.GetById(guid);
    }

    // POST api/[controller]
    [HttpPost]
    public void Post([FromBody] T entry)
    {
      var savedEntry = this.Service.Save(entry);
    }

    // PUT api/[controller]/5
    [HttpPut("{guid}")]
    public void Put(string guid, [FromBody] T value)
    {
    }

    // DELETE api/[controller]/5
    [HttpDelete("{guid}")]
    public void Delete(string guid)
    {
    }
  }
}