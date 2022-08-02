namespace DeveloperJayLibrary.Models
{
    public class Category : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Slug { get; set; }
        public List<Post> PostsLinked { get; set; }
    }
}
