namespace DeveloperJayLibrary.Models;

public class BaseEntity
{
    public int Id { get; set; }
    public bool Active { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
    public DateTime ActiveDate { get; set; }
}
