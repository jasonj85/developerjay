using DeveloperJayLibrary.Models;
using Microsoft.EntityFrameworkCore;

namespace DeveloperJayLibrary.DataAccess;

public class BlogContext : DbContext
{
    public BlogContext(DbContextOptions<BlogContext> options) : base(options)
    {
    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Comment> Comments { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<PostCategories> PostCategories { get; set; }
    public DbSet<PostTags> PostTags { get; set; }
    public DbSet<Tag> Tags { get; set; }
}