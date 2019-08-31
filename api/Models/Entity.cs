
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
  public class Entity
  {
    [Key]
    public string Guid { get; set; }
  }
}