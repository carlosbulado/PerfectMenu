
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
  public class Entity
  {
    [Key]
    public string Guid { get; set; }
    public Status Status { get; set; }

    public override bool Equals(object obj)
    {
      return this.GetType() == obj.GetType() && this.Guid == ((Entity)obj).Guid;
    }

    public override int GetHashCode()
    {
      return this.Guid.GetHashCode();
    }
  }

  public enum Status
  {
    Active = 0,
    Inactive = 1
  }
}