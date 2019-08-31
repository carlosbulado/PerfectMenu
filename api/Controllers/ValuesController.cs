using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET: api/Values
        [HttpGet]
        public IEnumerable<string> Get()
        {
          var list = new List<string>();
          SqlConnection conn = new SqlConnection("Server=(local);Database=PerfectMenuDB;Trusted_Connection=True;MultipleActiveResultSets=true");
          conn.Open();

          SqlCommand command = new SqlCommand("Select * from [Users]", conn);
          // int result = command.ExecuteNonQuery();
          using (SqlDataReader reader = command.ExecuteReader())
          {
            while (reader.Read())
            {
              list.Add(String.Format("{0}", reader["Name"]));
            }
          }

          conn.Close();

      return list;
        }

        // GET: api/Values/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
