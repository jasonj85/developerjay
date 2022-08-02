namespace DeveloperJayLibrary.Models;

public class Comment : BaseEntity
{
    public string Content { get; set; }
    public string PostedBy { get; set; }
    public Comment ParentComment { get; set; }
    public Post ParentPost { get; set; }
}
